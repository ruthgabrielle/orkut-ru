import { supabase } from '@/lib/supabase'
import type { Testimonial } from '@/lib/supabase'
import OrkutPage from './components/OrkutPage'

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) return []
    return data || []
  } catch {
    return []
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page() {
  const testimonials = await getTestimonials()
  return <OrkutPage initialTestimonials={testimonials} />
}
