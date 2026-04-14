'use client'

import { useState } from 'react'
import type { Testimonial } from '@/lib/supabase'
import TestimonialForm from './TestimonialForm'
import TestimonialList from './TestimonialList'

const FAKE_FRIENDS = [
  { name: 'Maria', color: '#C8A8F8' },
  { name: 'Luã', color: '#A8C8F8' },
  { name: 'Mariana', color: '#F8C8A8' },
  { name: 'João', color: '#A8F8C8' },
  { name: 'Ma', color: '#F8A8C8' },
  { name: 'Oscar', color: '#C8F8F8' },
  { name: 'Miloca', color: '#F8F0A8' },
  { name: 'Lucas', color: '#D8C8F8' },
]

const FAKE_SCRAPS = [
  { from: 'Maria', msg: 'Feliz aniversário linda!! ✨', time: 'há 2 min' },
  { from: 'Lucas', msg: 'Muitas felicidades pra você!! 🎉', time: 'há 5 min' },
  { from: 'Luã', msg: 'Parabéns!! Que venham muitos mais!', time: 'há 12 min' },
]

interface Props {
  initialTestimonials: Testimonial[]
}

export default function OrkutPage({ initialTestimonials }: Props) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)
  const [activeTab, setActiveTab] = useState<'depoimentos' | 'recados'>('depoimentos')

  function handleNewTestimonial(t: Testimonial) {
    setTestimonials(prev => [t, ...prev])
  }

  const now = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '16px' }}>
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-logo">orkut</div>
        <div className="top-bar-links">
          <a href="#">início</a>
          <a href="#">amigos</a>
          <a href="#">comunidades</a>
          <a href="#">recados</a>
          <a href="#">vídeos</a>
          <span style={{ color: '#B0A8FF' }}>|</span>
          <a href="#">configurações</a>
          <a href="#">sair</a>
        </div>
      </div>

      <div className="main-wrapper">
        {/* Birthday banner */}
        <div className="birthday-banner">
          🎂 &nbsp; Hoje é o aniversário de <strong>Ruth</strong>! Deixe um depoimento especial! &nbsp; 🎂
        </div>

        <div className="content-layout">
          {/* ===== SIDEBAR ===== */}
          <div className="sidebar">
            {/* Profile panel */}
            <div className="panel">
              {/* Profile photo */}
              <div className="profile-photo-wrap">
                <div className="profile-photo" style={{ imageRendering: 'pixelated' }}>
                  {/* SVG birthday cake icon as profile photo */}
                  <svg viewBox="0 0 80 80" width="80" height="80" style={{ display: 'block' }}>
                    <rect width="80" height="80" fill="#9880E0"/>
                    <rect x="20" y="42" width="40" height="22" rx="2" fill="#F8E8FF" stroke="#C0A8F0" strokeWidth="1"/>
                    <rect x="25" y="48" width="30" height="10" rx="1" fill="#E8D8FF"/>
                    <rect x="22" y="52" width="36" height="6" rx="1" fill="#D8C8FF" opacity="0.5"/>
                    <rect x="15" y="56" width="50" height="10" rx="2" fill="#EDD8FF" stroke="#C0A8F0" strokeWidth="1"/>
                    <rect x="17" y="60" width="46" height="4" rx="1" fill="#E0C8FF"/>
                    {[28, 36, 44, 52].map((x, i) => (
                      <g key={i}>
                        <rect x={x} y="38" width="3" height="6" fill="#FFD700"/>
                        <ellipse cx={x+1.5} cy="37" rx="2" ry="3" fill="#FF9900" opacity="0.9"/>
                        <ellipse cx={x+1.5} cy="36" rx="1" ry="1.5" fill="#FFFF00" opacity="0.8"/>
                      </g>
                    ))}
                    <text x="40" y="32" textAnchor="middle" fill="white" fontSize="10" fontFamily="Verdana" fontWeight="bold">Ruth</text>
                    <text x="40" y="25" textAnchor="middle" fill="#FFD700" fontSize="14">♥</text>
                  </svg>
                </div>
                <div className="profile-name">Ruth</div>
                <div className="profile-karma">
                  <span className="online-dot" style={{ marginRight: '3px' }}></span>
                  online agora
                </div>
              </div>

              {/* Status */}
              <div className="status-bar">
                🎂 está se sentindo feliz e amada!
              </div>

              {/* Info table */}
              <div style={{ padding: '6px 8px' }}>
                <table className="info-table">
                  <tbody>
                    <tr>
                      <td className="info-label">idade:</td>
                      <td className="info-value">sem resposta 😄</td>
                    </tr>
                    <tr>
                      <td className="info-label">localização:</td>
                      <td className="info-value">Brasil</td>
                    </tr>
                    <tr>
                      <td className="info-label">relacionamento:</td>
                      <td className="info-value">❤️ apaixonada</td>
                    </tr>
                    <tr>
                      <td className="info-label">interesses:</td>
                      <td className="info-value">música, viagens</td>
                    </tr>
                    <tr>
                      <td className="info-label">humor:</td>
                      <td className="info-value">💜 muito feliz</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Karma bar */}
              <div style={{ padding: '4px 8px 6px', borderTop: '1px solid #E0DCF0' }}>
                <div style={{ fontSize: '9px', color: '#888', marginBottom: '2px', fontWeight: 'bold' }}>karma:</div>
                <div className="loading-bar">
                  <div className="loading-bar-fill" style={{ width: '88%', animation: 'none' }}></div>
                </div>
                <div style={{ fontSize: '9px', color: '#666', marginTop: '1px' }}>confiável ★★★★★</div>
              </div>

              {/* Stats */}
              <div style={{ padding: '5px 8px', borderTop: '1px solid #E0DCF0', background: '#F8F4FF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#6A5ACD', fontSize: '14px' }}>{testimonials.length}</div>
                    <div style={{ color: '#888' }}>depoimentos</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#6A5ACD', fontSize: '14px' }}>8</div>
                    <div style={{ color: '#888' }}>amigos</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#6A5ACD', fontSize: '14px' }}>3</div>
                    <div style={{ color: '#888' }}>recados</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Friends panel */}
            <div className="panel">
              <div className="section-header">amigos ({FAKE_FRIENDS.length})</div>
              <div className="friends-grid">
                {FAKE_FRIENDS.map((f) => (
                  <div key={f.name} style={{ textAlign: 'center' }}>
                    <div
                      className="friend-avatar"
                      style={{
                        background: f.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: '#4040A0',
                        margin: '0 auto 2px',
                      }}
                    >
                      {f.name.slice(0, 2)}
                    </div>
                    <div className="friend-name">{f.name}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '3px 8px 5px', textAlign: 'center' }}>
                <a href="#" style={{ fontSize: '9px' }}>ver todos os amigos</a>
              </div>
            </div>

            {/* Footer clock */}
            <div style={{ textAlign: 'center', fontSize: '9px', color: '#9080B8', marginTop: '4px' }}>
              último acesso: hoje às {now}
            </div>
          </div>

          {/* ===== MAIN CONTENT ===== */}
          <div className="main-content">
            {/* Tabs */}
            <div style={{
              display: 'flex',
              gap: '2px',
              marginBottom: '6px',
              borderBottom: '2px solid #6A5ACD',
            }}>
              {(['depoimentos', 'recados'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '4px 12px',
                    fontSize: '11px',
                    fontFamily: 'Verdana, Arial, sans-serif',
                    cursor: 'pointer',
                    border: '1px solid #B0A8D0',
                    borderBottom: 'none',
                    borderRadius: '3px 3px 0 0',
                    fontWeight: activeTab === tab ? 'bold' : 'normal',
                    background: activeTab === tab
                      ? 'linear-gradient(to bottom, #8878D8, #5A4ABE)'
                      : 'linear-gradient(to bottom, #E8E4F8, #D0CCE8)',
                    color: activeTab === tab ? 'white' : '#4B3BA8',
                  }}
                >
                  {tab === 'depoimentos' ? `depoimentos (${testimonials.length})` : `recados (${FAKE_SCRAPS.length})`}
                </button>
              ))}
            </div>

            {activeTab === 'depoimentos' && (
              <div className="panel">
                <div className="section-header">💜 depoimentos de ruth</div>
                <div className="testimonial-count">
                  Você tem <strong>{testimonials.length}</strong> depoimento{testimonials.length !== 1 ? 's' : ''} 🎂
                </div>
                <TestimonialForm onSubmit={handleNewTestimonial} />
                <TestimonialList testimonials={testimonials} />
              </div>
            )}

            {activeTab === 'recados' && (
              <div className="panel">
                <div className="section-header">📬 recados (scraps)</div>
                <div className="testimonial-count">
                  Você tem <strong>{FAKE_SCRAPS.length}</strong> recados novos
                </div>
                {FAKE_SCRAPS.map((s, i) => (
                  <div key={i} className="scrap-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span className="testimonial-username">{s.from}</span>
                      <span style={{ fontSize: '9px', color: '#999' }}>{s.time}</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#333' }}>{s.msg}</div>
                  </div>
                ))}
                <div style={{ padding: '6px 8px', borderTop: '1px solid #E0DCF0' }}>
                  <button className="btn-orkut">📝 Escrever recado</button>
                </div>
              </div>
            )}

            {/* Birthday message panel */}
            <div className="panel" style={{ marginTop: '6px' }}>
              <div className="section-header">🎉 mensagem de aniversário</div>
              <div style={{ padding: '10px 12px', background: 'linear-gradient(135deg, #F8F0FF, #F0EAFF)', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>🎂 🎉 🎈</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#4B3BA8', marginBottom: '4px' }}>
                  Parabéns, Ru!!! 🎉
                </div>
                <div style={{ fontSize: '11px', color: '#666', lineHeight: '1.6' }}>
                  Deixe um depoimento para fazer o dia dela ainda mais inesquecível! 💜
                </div>
                <div style={{ marginTop: '8px', fontSize: '20px' }}>
                  {['💜', '✨', '🌟', '💜', '🎁', '💜', '✨'].join(' ')}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="page-footer">
          <span className="blink">●</span>
          &nbsp; orkut birthday edition &nbsp;•&nbsp; © 2005–{new Date().getFullYear()} &nbsp;•&nbsp;
          <a href="#" style={{ color: '#9080B8' }}>privacidade</a> &nbsp;•&nbsp;
          <a href="#" style={{ color: '#9080B8' }}>ajuda</a> &nbsp;•&nbsp;
          <a href="#" style={{ color: '#9080B8' }}>termos de uso</a>
          &nbsp; <span className="blink">●</span>
        </div>
      </div>
    </div>
  )
}