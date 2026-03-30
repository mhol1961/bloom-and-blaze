// Re-export everything from the shared package
export { supabase, getCurrentUser } from '@budlife/shared'
export type {
  Product,
  Customer,
  CartSession,
  Order,
  LabResult,
  RestrictedState,
  ProductReview,
  AgeVerificationSession,
} from '@budlife/shared'
