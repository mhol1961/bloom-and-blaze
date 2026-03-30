// ─── Product types ───────────────────────────────────────────────────────────

export interface Product {
  id: string
  name: string
  slug: string
  sku?: string
  description?: string
  short_description?: string
  long_description?: string
  price: number
  compare_at_price?: number
  cost_price?: number
  category?: string
  strain_type?: string
  cbd_content?: number
  thc_content?: number
  terpenes?: string[]
  coa_batch_number?: string
  coa_id?: string
  lab_tested: boolean
  test_date?: string
  track_quantity: boolean
  quantity: number
  low_stock_threshold: number
  allow_backorder: boolean
  weight?: number
  weight_grams?: number
  restricted_states?: string[]
  requires_age_verification: boolean
  featured: boolean
  is_featured?: boolean
  is_new: boolean
  status: string
  tags?: string[]
  image_url?: string
  gallery_images?: string[]
  ingredients?: string[]
  effects?: string[]
  max_quantity_per_order?: number
  meta_title?: string
  meta_description?: string
  published_at?: string
  created_at: string
  updated_at: string
  // Admin variant support
  variants?: ProductVariant[]
  organic?: boolean
  visibility_status?: string
  publish_status?: string
  archived?: boolean
}

export interface ProductVariant {
  id: string
  product_id: string
  name: string
  price: number
  weight: number
  weight_unit: string
  inventory: number
  sku?: string
  created_at?: string
  updated_at?: string
}

export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  alt_text?: string
  sort_order: number
  is_primary: boolean
  created_at?: string
}

// ─── Customer types ──────────────────────────────────────────────────────────

export interface Customer {
  id: string
  email: string
  first_name?: string
  last_name?: string
  phone?: string
  date_of_birth?: string
  age_verified: boolean
  age_verified_at?: string
  age_verification_method?: string
  age_verification_data?: any
  billing_address?: any
  shipping_address?: any
  default_state?: string
  square_customer_id?: string
  ghl_contact_id?: string
  total_spent: number
  order_count: number
  average_order_value: number
  last_order_date?: string
  favorite_products?: string[]
  accepts_marketing: boolean
  sms_consent: boolean
  email_capture_source?: string
  referral_source?: string
  created_at: string
  updated_at: string
  last_login_at?: string
}

// ─── Cart types ──────────────────────────────────────────────────────────────

export interface CartItem {
  product_id: string
  product_name: string
  product_slug: string
  product_image_url?: string
  price: number
  compare_at_price?: number
  quantity: number
  category?: string
  thc_content?: number
  cbd_content?: number
  strain_type?: string
  max_quantity?: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isOpen: boolean
}

export interface CartSession {
  id: string
  session_id: string
  customer_id?: string
  email?: string
  items: any[]
  abandoned: boolean
  abandoned_at?: string
  recovered: boolean
  expires_at: string
  created_at: string
  updated_at: string
}

// ─── Order types ─────────────────────────────────────────────────────────────

export interface Order {
  id: string
  order_number: string
  customer_id?: string
  email: string
  phone?: string
  items: any[]
  subtotal: number
  tax_amount: number
  shipping_amount: number
  discount_amount: number
  discount_code?: string
  total: number
  status?: string
  currency?: string
  payment_status: string
  payment_method?: string
  square_order_id?: string
  square_payment_id?: string
  square_checkout_id?: string
  paid_at?: string
  fulfillment_status: string
  pickup_date?: string
  pickup_time?: string
  fulfilled_at?: string
  billing_address?: any
  shipping_address?: any
  notes?: string
  internal_notes?: string
  tags?: string[]
  source: string
  ghl_synced: boolean
  ghl_synced_at?: string
  created_at: string
  updated_at: string
  completed_at?: string
}

// ─── Lab results ─────────────────────────────────────────────────────────────

export interface LabResult {
  id: string
  batch_number: string
  certificate_number?: string
  lab_name: string
  test_date: string
  expiration_date?: string
  thc_percentage?: number
  thca_percentage?: number
  cbd_percentage?: number
  cbda_percentage?: number
  cbg_percentage?: number
  cbn_percentage?: number
  cbc_percentage?: number
  total_cannabinoids?: number
  pesticides_pass: boolean
  heavy_metals_pass: boolean
  microbials_pass: boolean
  mycotoxins_pass: boolean
  residual_solvents_pass: boolean
  pdf_url: string
  qr_code_url?: string
  product_ids?: string[]
  status: string
  notes?: string
  created_at: string
  updated_at: string
}

// ─── Compliance / verification ───────────────────────────────────────────────

export interface RestrictedState {
  state_code: string
  state_name: string
  restriction_type?: string
  restriction_notes?: string
  active: boolean
}

export interface AgeVerificationSession {
  id: string
  session_id: string
  ip_address?: string
  user_agent?: string
  country_code?: string
  state_code?: string
  verification_method?: string
  verification_status: string
  verification_data?: any
  created_at: string
  expires_at: string
}

export interface AgeVerificationData {
  verified: boolean
  method?: string
  timestamp?: string
  session_id?: string
  ip_address?: string
  user_agent?: string
}

export interface UserLocation {
  country_code?: string
  state_code?: string
  region?: string
  city?: string
  ip?: string
  postal?: string
  timezone?: string
}

// ─── Reviews ─────────────────────────────────────────────────────────────────

export interface ProductReview {
  id: string
  product_id: string
  customer_id?: string
  customer_name?: string
  customer_email?: string
  rating: number
  title?: string
  review_text?: string
  verified_purchase: boolean
  helpful_votes: number
  status: string
  created_at: string
  updated_at: string
}

// ─── Newsletter ──────────────────────────────────────────────────────────────

export interface NewsletterSubscription {
  id: string
  email: string
  first_name?: string
  source?: string
  subscribed_at: string
  unsubscribed_at?: string
  status: string
  preferences: any
}

// ─── Admin types ─────────────────────────────────────────────────────────────

export interface AdminUser {
  id: string
  email: string
  first_name?: string
  last_name?: string
  role: string
  permissions: string[]
  active: boolean
  last_login_at?: string
  created_at: string
  updated_at: string
}

export interface AdminActivityLog {
  id: string
  admin_id: string
  action: string
  resource_type?: string
  resource_id?: string
  changes?: any
  ip_address?: string
  user_agent?: string
  created_at: string
}

export interface DashboardMetrics {
  totalRevenue: number
  totalOrders: number
  completedOrders: number
  newCustomers: number
  activeProducts: number
  lowStockProducts: number
  period: string
}

// ─── Filter / search types ───────────────────────────────────────────────────

export interface FilterOptions {
  category?: string
  strain_type?: string
  price_min?: number
  price_max?: number
  thc_min?: number
  thc_max?: number
  cbd_min?: number
  cbd_max?: number
  sort_by?: 'name' | 'price' | 'created_at' | 'featured'
  sort_order?: 'asc' | 'desc'
  search?: string
  featured_only?: boolean
  in_stock_only?: boolean
}
