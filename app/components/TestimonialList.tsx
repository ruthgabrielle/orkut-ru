'use client'

import type { Testimonial } from '@/lib/supabase'

interface Props {
  testimonials: Testimonial[]
}

function getAvatarColor(seed: string): string {
  const colors = [
    ['#C8A8F8', '#8060D0'],
    ['#A8C8F8', '#4060C0'],
    ['#F8C8A8', '#D06040'],
    ['#A8F8C8', '#40A060'],
    ['#F8A8C8', '#C04080'],
    ['#C8F8A8', '#6090A0'],
    ['#F8F0A8', '#C0A030'],
  ]
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) & 0xffff
  return colors[h % colors.length][0]
}

function getAvatarText(name: string): string {
  return name.slice(0, 2).toUpperCase()
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' })
}

export default function TestimonialList({ testimonials }: Props) {
  if (testimonials.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '11px' }}>
        <div style={{ fontSize: '24px', marginBottom: '6px' }}>💜</div>
        Nenhum depoimento ainda. Seja o primeiro a escrever!
      </div>
    )
  }

  return (
    <div>
      {testimonials.map((t, i) => (
        <div
          key={t.id}
          className={`testimonial-item ${i === 0 ? 'testimonial-new' : ''}`}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {/* Avatar */}
            <div
              className="testimonial-avatar"
              style={{
                background: getAvatarColor(t.avatar_seed || t.name),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#4040A0',
                flexShrink: 0,
              }}
            >
              {getAvatarText(t.name)}
            </div>
            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="testimonial-username">{t.name}</span>
                <span className="testimonial-date">{formatDate(t.created_at)}</span>
              </div>
              <div className="testimonial-text">{t.message}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}