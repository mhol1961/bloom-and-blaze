import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/contexts/AuthContext'
import { AgeVerificationProvider, useAgeVerification } from '@/contexts/AgeVerificationContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CartSidebar } from '@/components/CartSidebar'
import AgeGate from '@/components/AgeGate'
import { HomePage } from '@/pages/HomePage'
import { ProductsPage } from '@/pages/ProductsPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { AccountPage } from '@/pages/AccountPage'
import { AboutPage } from '@/pages/AboutPage'
import { LabResultsPage } from '@/pages/LabResultsPage'
import FAQsPage from '@/pages/FAQsPage'
import BlogPage from '@/pages/BlogPage'
import BlogPostPage from '@/pages/BlogPostPage'
import { ContactPage } from '@/pages/ContactPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function AppContent() {
  const { isVerified, loading } = useAgeVerification()

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-sage-200 border-t-sage-600 rounded-full animate-spin mb-4"></div>
          <p className="text-stone-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/lab-results" element={<LabResultsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <CartSidebar />

      {/* Age Verification Gate */}
      <AgeGate />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#f9f9f8',
            color: '#1c1917',
            border: '1px solid #e7e5e4',
          },
          success: {
            iconTheme: {
              primary: '#638c63',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <AgeVerificationProvider>
            <div className="App">
              <AppContent />
            </div>
          </AgeVerificationProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  )
}

export default App
