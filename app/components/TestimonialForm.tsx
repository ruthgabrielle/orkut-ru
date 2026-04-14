'use client'

import { useState } from 'react'
import type { Testimonial } from '@/lib/supabase'

interface Props {
  onSubmit: (t: Testimonial) => void
}

export default function TestimonialForm({ onSubmit }: Props) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [open, setOpen] = useState(false)

  async function handleSubmit() {
    if (!name.trim() || !message.trim()) {
      setError('Por favor, preencha seu nome e depoimento.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Erro ao enviar')
      }
      const newT: Testimonial = await res.json()
      onSubmit(newT)
      setName('')
      setMessage('')
      setSuccess(true)
      setOpen(false)
      setTimeout(() => setSuccess(false), 4000)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  if (!open) {
    return (
      <div style={{ padding: '8px', borderBottom: '1px solid #E0DCF0' }}>
        {success && <div className="msg-success" style={{ marginBottom: '6px' }}>✓ Depoimento enviado com sucesso! Obrigada! 💜</div>}
        <button className="btn-orkut" onClick={() => setOpen(true)}>
          ✏️ Escrever depoimento
        </button>
        <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>
          Deixe uma mensagem especial para Ruth!
        </span>
      </div>
    )
  }

  return (
    <div>
      <div className="section-header" style={{ fontSize: '10px', background: 'linear-gradient(to bottom, #9B8FE0, #7060C0)' }}>
        ✏️ Escrever depoimento para Ruth
      </div>
      {error && <div className="msg-error">{error}</div>}
      <div className="form-row">
        <label className="form-label">Seu nome: *</label>
        <input
          type="text"
          className="inset-box"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Digite seu nome..."
          maxLength={50}
          style={{ width: '220px' }}
          disabled={loading}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Depoimento: *</label>
        <textarea
          className="inset-box"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Escreva algo bonito para Ruth no seu aniversário... 🎂"
          rows={4}
          maxLength={500}
          disabled={loading}
          style={{ resize: 'vertical', minHeight: '70px' }}
        />
        <div style={{ textAlign: 'right', fontSize: '9px', color: '#999', marginTop: '2px' }}>
          {message.length}/500 caracteres
        </div>
      </div>
      {loading && (
        <div style={{ padding: '4px 8px' }}>
          <div className="loading-bar"><div className="loading-bar-fill"></div></div>
          <div className="submitting-txt" style={{ marginTop: '3px' }}>Enviando depoimento...</div>
        </div>
      )}
      <div className="form-footer">
        <span style={{ fontSize: '9px', color: '#999', marginRight: 'auto' }}>* campos obrigatórios</span>
        <button className="btn-orkut-gray" onClick={() => { setOpen(false); setError(''); }} disabled={loading}>
          Cancelar
        </button>
        <button className="btn-orkut" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar depoimento'}
        </button>
      </div>
    </div>
  )
}