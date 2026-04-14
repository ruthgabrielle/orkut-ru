'use client'

import { useEffect, useState } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateCountdown = () => {
      // Data do aniversário: 19/04/2026
      const targetDate = new Date('2026-04-19T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2px',
    }}>
      <div style={{
        background: 'linear-gradient(to bottom, #9B8FE0, #7060C0)',
        border: '1px solid #5A4ABE',
        color: 'white',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '2px',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
      }}>
        {String(value).padStart(2, '0')}
      </div>
      <div style={{
        fontSize: '9px',
        color: '#666',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '45px',
      }}>
        {label}
      </div>
    </div>
  )

  return (
    <div style={{
      padding: '8px',
      background: 'linear-gradient(to bottom, #F8F4FF, #F0EEF8)',
      border: '1px solid #B0A8D0',
      borderRadius: '2px',
      marginBottom: '8px',
    }}>
      <div style={{
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#6A5ACD',
        marginBottom: '8px',
        textAlign: 'center',
        textShadow: '1px 1px 0 rgba(255,255,255,0.5)',
      }}>
        Faltam:
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
      }}>
        <CountdownBox value={timeLeft.days} label="dias" />
        <CountdownBox value={timeLeft.hours} label="horas" />
        <CountdownBox value={timeLeft.minutes} label="minutos" />
        <CountdownBox value={timeLeft.seconds} label="segundos" />
      </div>
    </div>
  )
}
