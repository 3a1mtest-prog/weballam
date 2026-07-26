-- ═══════════════════════════════════════════════════════════════════════════
--  AL-GHAZAWE STORE — Supabase schema
--  Run this in the Supabase SQL Editor, then run seed.sql.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── Categories ─────────────────────────────────────────────────────────────
create table if not exists public.categories (
  id          text primary key,
  slug        text not null unique,
  name        text not null,
  tagline     text not null default '',
  description text not null default '',
  icon        text not null default 'Sparkles',
  sort_order  int  not null default 0,
  is_active   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- ── Services ───────────────────────────────────────────────────────────────
create table if not exists public.services (
  id            text primary key,
  category_slug text not null references public.categories (slug) on delete cascade,
  slug          text not null unique,
  title         text not null,
  summary       text not null default '',
  description   text not null default '',
  price         numeric(10, 2) not null default 0,
  old_price     numeric(10, 2),
  currency      text not null default '₪',
  unit          text,
  delivery_time text not null default '',
  features      jsonb not null default '[]'::jsonb,
  badge         text,
  is_featured   boolean not null default false,
  is_active     boolean not null default true,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists services_category_idx on public.services (category_slug);
create index if not exists services_active_idx   on public.services (is_active, sort_order);

-- ── Testimonials ───────────────────────────────────────────────────────────
create table if not exists public.testimonials (
  id         text primary key,
  name       text not null,
  handle     text not null default '',
  rating     int  not null default 5 check (rating between 1 and 5),
  body       text not null,
  is_active  boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ── Orders ─────────────────────────────────────────────────────────────────
create table if not exists public.orders (
  id               uuid primary key default gen_random_uuid(),
  order_number     text not null unique,
  customer_name    text not null,
  customer_phone   text not null,
  customer_contact text,
  items            jsonb not null default '[]'::jsonb,
  total            numeric(10, 2) not null default 0,
  currency         text not null default '₪',
  notes            text,
  status           text not null default 'new'
                   check (status in ('new', 'contacted', 'paid', 'delivered', 'cancelled')),
  created_at       timestamptz not null default now()
);

create index if not exists orders_created_idx on public.orders (created_at desc);
create index if not exists orders_status_idx  on public.orders (status);

-- ── Keep services.updated_at fresh ─────────────────────────────────────────
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists services_touch_updated_at on public.services;
create trigger services_touch_updated_at
  before update on public.services
  for each row execute function public.touch_updated_at();

-- ═══════════════════════════════════════════════════════════════════════════
--  Row Level Security
--  Catalog tables are world-readable; orders are insert-only for the public
--  and readable only with the service-role key (your admin dashboard).
-- ═══════════════════════════════════════════════════════════════════════════

alter table public.categories   enable row level security;
alter table public.services     enable row level security;
alter table public.testimonials enable row level security;
alter table public.orders       enable row level security;

drop policy if exists "categories are public" on public.categories;
create policy "categories are public"
  on public.categories for select
  using (is_active);

drop policy if exists "services are public" on public.services;
create policy "services are public"
  on public.services for select
  using (is_active);

drop policy if exists "testimonials are public" on public.testimonials;
create policy "testimonials are public"
  on public.testimonials for select
  using (is_active);

-- Anyone may place an order; nobody may read orders back through the anon key.
drop policy if exists "anyone can place an order" on public.orders;
create policy "anyone can place an order"
  on public.orders for insert
  with check (true);
