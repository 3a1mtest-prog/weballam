export type Category = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** lucide-react icon name, resolved in components/ui/Icon.tsx */
  icon: string;
  sort_order: number;
  is_active: boolean;
};

export type Service = {
  id: string;
  category_slug: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  price: number;
  /** Pre-discount price; shown struck through when higher than `price`. */
  old_price: number | null;
  currency: string;
  /** e.g. "لكل 1000" — rendered next to the price. */
  unit: string | null;
  delivery_time: string;
  features: string[];
  badge: string | null;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
};

export type Testimonial = {
  id: string;
  name: string;
  handle: string;
  rating: number;
  body: string;
};

export type CartItem = {
  service_slug: string;
  title: string;
  price: number;
  currency: string;
  quantity: number;
  note?: string;
};

export type OrderPayload = {
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_contact: string | null;
  items: CartItem[];
  total: number;
  currency: string;
  notes: string | null;
};
