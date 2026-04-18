'use client'

import { useState } from 'react'

const QUESTIONS = [
  {
    id: 1,
    text: 'O que você faria num domingo perfeito com a Ruth?',
    options: [
      { label: 'Assistir série até as 3h da manhã 📺', value: 'a' },
      { label: 'Comer muito e não fazer nada 🍕', value: 'b' },
      { label: 'Passear e tirar 500 fotos 📸', value: 'c' },
      { label: 'Ouvir música e falar besteira 🎵', value: 'd' },
    ],
  },
  {
    id: 2,
    text: 'Como você descreveria a Ruth em uma palavra?',
    options: [
      { label: 'Incrível ✨', value: 'a' },
      { label: 'Maravilhosa 💜', value: 'b' },
      { label: 'Perfeita 🌟', value: 'c' },
      { label: 'Insubstituível 🎂', value: 'd' },
    ],
  },
  {
    id: 3,
    text: 'Se a Ruth fosse um animal, qual seria?',
    options: [
      { label: 'Gatinha elegante 🐱', value: 'a' },
      { label: 'Borboleta colorida 🦋', value: 'b' },
      { label: 'Boto-cor-de-rosa 🐬', value: 'c' },
      { label: 'Leoa 🦁', value: 'd' },
    ],
  },
]


const COMPATIBILITY_RESULTS: Record<string, { pct: number; msg: string; extra: string }> = {
  aaa: { pct: 99, msg: 'Vocês são ALMAS GÊMEAS segundo o Orkut!', extra: 'Os astros confirmam: essa amizade foi escrita nas estrelas ✨' },
  aab: { pct: 97, msg: 'Compatibilidade ALTÍSSIMA detectada!', extra: 'O algoritmo do Orkut nunca erra. Nunca mesmo.' },
  aac: { pct: 98, msg: 'Conexão cósmica identificada!', extra: 'Você e Ruth foram feitos pro mesmo grupo do MSN 💜' },
  aad: { pct: 96, msg: 'Dupla imbatível formada!', extra: 'Se fossem comunidades, seriam: "Eu amo a Ruth" (admin: você)' },
  aba: { pct: 100, msg: '100%!! COMPATIBILIDADE MÁXIMA!!', extra: 'O sistema travou de tanto amor. Obrigado por existir na vida dela 🎂' },
  abb: { pct: 97, msg: 'Amizade aprovada pelo Orkut!', extra: 'Karma +50 só de conhecer você ✨' },
  abc: { pct: 98, msg: 'Vocês se completam perfeitamente!', extra: 'Como pão de queijo e café da manhã de domingo 🧀' },
  abd: { pct: 95, msg: 'Grande compatibilidade encontrada!', extra: 'Nível de amizade: "aparece aqui em casa qualquer hora" 💜' },
  aca: { pct: 99, msg: 'Conexão rara e especial detectada!', extra: 'Só 1% das pessoas no mundo tem essa compatibilidade. Você é esse 1% 🌟' },
  acb: { pct: 96, msg: 'Amizade de qualidade superior!', extra: 'Essa amizade seria uma comunidade com 10.000 membros fácil' },
  acc: { pct: 98, msg: 'Parceria lendária confirmada!', extra: 'O orkut registrou esse match nos servidores de Mountain View 🎉' },
  acd: { pct: 97, msg: 'Vocês foram feitos pra se encontrar!', extra: 'Provavelmente se seguiriam no Fotolog também 📸' },
  ada: { pct: 100, msg: '100%!! O ORKUT EXPLODIU DE AMOR!!', extra: 'Literalmente ninguém nunca tirou 100% antes. Você é especial 💥' },
  adb: { pct: 96, msg: 'Compatibilidade fora da curva!', extra: 'Se fossem músicas do MSN, seriam a mesma 🎵' },
  adc: { pct: 98, msg: 'Grande dupla formada!', extra: 'O Orkut recomendaria vocês como amigos mútuos instantaneamente' },
  add: { pct: 97, msg: 'Amizade que dura pra sempre!', extra: 'Como scrap no mural: permanente e especial 💜' },
  default: { pct: 98, msg: 'Compatibilidade extraordinária!', extra: 'Ruth tem muita sorte de ter você na vida dela 🎂✨' },
}

function getResult(answers: string[]) {
  const key = answers.join('')
  return COMPATIBILITY_RESULTS[key] || COMPATIBILITY_RESULTS['default']
}

export default function CompatibilityQuiz() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0) // 0 = not started, 1-3 = questions, 4 = result
  const [answers, setAnswers] = useState<string[]>([])
  const [userName, setUserName] = useState('')
  const [nameEntered, setNameEntered] = useState(false)
  const [animating, setAnimating] = useState(false)

  function handleAnswer(value: string) {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
      if (step < 3) {
        setStep(step + 1)
      } else {
        setStep(4)
      }
    }, 400)
  }

  function reset() {
    setStep(0)
    setAnswers([])
    setNameEntered(false)
    setUserName('')
    setAnimating(false)
  }

  const result = step === 4 ? getResult(answers) : null
  const currentQuestion = step >= 1 && step <= 3 ? QUESTIONS[step - 1] : null

  if (!open) {
    return (
      <div style={{ padding: '10px', textAlign: 'center', borderTop: '1px dashed #C8C0E8' }}>
        <div style={{ fontSize: '16px', marginBottom: '4px' }}>💘</div>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#4B3BA8', marginBottom: '6px' }}>
          Teste de Compatibilidade com Ruth
        </div>
        <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px' }}>
          Descubra o quanto vocês combinam! (resultado 100% científico 🔬)
        </div>
        <button className="btn-orkut" onClick={() => setOpen(true)}>
          💘 Fazer o teste!
        </button>
      </div>
    )
  }

  return (
    <div style={{ borderTop: '1px dashed #C8C0E8' }}>
      <div style={{
        background: 'linear-gradient(to bottom, #9B8FE0, #7060C0)',
        color: 'white',
        padding: '4px 8px',
        fontSize: '11px',
        fontWeight: 'bold',
        textShadow: '0 1px 1px rgba(0,0,0,0.4)',
      }}>
        💘 Teste de Compatibilidade com Ruth
      </div>

      {/* Progress bar */}
      {step >= 1 && step <= 3 && (
        <div style={{ padding: '6px 8px 0', background: '#F8F4FF' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#888', marginBottom: '3px' }}>
            <span>pergunta {step} de 3</span>
            <span>{Math.round((step / 3) * 100)}% concluído</span>
          </div>
          <div className="loading-bar">
            <div className="loading-bar-fill" style={{
              width: `${(step / 3) * 100}%`,
              animation: 'none',
              transition: 'width 0.4s ease',
            }}></div>
          </div>
        </div>
      )}

      {/* Step 0: enter name */}
      {step === 0 && (
        <div style={{ padding: '10px 8px' }}>
          {!nameEntered ? (
            <>
              <div style={{ fontSize: '11px', color: '#333', marginBottom: '8px' }}>
                Antes de começar, qual é o seu nome?
              </div>
              <input
                type="text"
                className="inset-box"
                placeholder="Digite seu nome..."
                value={userName}
                onChange={e => setUserName(e.target.value)}
                style={{ width: '200px', marginRight: '6px' }}
                onKeyDown={e => { if (e.key === 'Enter' && userName.trim()) setNameEntered(true) }}
                maxLength={30}
              />
              <button
                className="btn-orkut"
                onClick={() => { if (userName.trim()) setNameEntered(true) }}
                disabled={!userName.trim()}
                style={{ marginLeft: '4px' }}
              >
                Começar →
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#4B3BA8', marginBottom: '6px' }}>
                Olá, <span style={{ color: '#6A5ACD' }}>{userName}</span>! 👋
              </div>
              <div style={{ fontSize: '10px', color: '#666', marginBottom: '10px' }}>
                3 perguntas vão revelar o quanto você e Ruth combinam.<br/>
                <em style={{ fontSize: '9px' }}>(spoiler: muito 😄)</em>
              </div>
              <button className="btn-orkut" onClick={() => setStep(1)}>
                💘 Iniciar teste!
              </button>
              <span style={{ margin: '0 6px', color: '#ccc' }}>|</span>
              <button className="btn-orkut-gray" onClick={reset}>Cancelar</button>
            </div>
          )}
        </div>
      )}

      {/* Steps 1-3: questions */}
      {currentQuestion && (
        <div style={{ padding: '10px 8px', opacity: animating ? 0.3 : 1, transition: 'opacity 0.3s' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
            background: '#F0EAFF',
            padding: '6px 8px',
            border: '1px solid #D0C8F0',
            borderRadius: '2px',
          }}>
            {currentQuestion.text}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {currentQuestion.options.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                disabled={animating}
                style={{
                  background: 'linear-gradient(to bottom, #FAFAFF, #EEEAFF)',
                  border: '1px solid #C0B8E0',
                  borderRadius: '2px',
                  padding: '5px 10px',
                  textAlign: 'left',
                  fontSize: '11px',
                  cursor: 'pointer',
                  fontFamily: 'Verdana, Arial, sans-serif',
                  color: '#333',
                  transition: 'background 0.15s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(to bottom, #E8E4F8, #D8D0F8)')}
                onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(to bottom, #FAFAFF, #EEEAFF)')}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: result */}
      {step === 4 && result && (
        <div style={{ padding: '10px 8px', textAlign: 'center', background: 'linear-gradient(135deg, #F8F0FF, #F0EAFF)' }}>
          {/* Fake loading */}
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '10px', color: '#888', marginBottom: '4px', fontStyle: 'italic' }}>
              analisando compatibilidade com os servidores do orkut...
            </div>
            <div className="loading-bar" style={{ margin: '0 auto', maxWidth: '200px' }}>
              <div className="loading-bar-fill" style={{ width: '100%', animation: 'none' }}></div>
            </div>
          </div>

          {/* Result */}
          <div style={{
            border: '2px solid #6A5ACD',
            borderRadius: '3px',
            padding: '12px',
            background: 'white',
            marginBottom: '8px',
          }}>
            {/* Big percentage */}
            <div style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: result.pct === 100 ? '#CC0066' : '#6A5ACD',
              lineHeight: 1,
              marginBottom: '4px',
              animation: result.pct === 100 ? 'pulse 0.8s infinite' : 'none',
              textShadow: result.pct === 100 ? '0 0 20px rgba(204,0,102,0.4)' : 'none',
            }}>
              {result.pct}%
            </div>

            <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#4B3BA8', marginBottom: '6px' }}>
              {result.msg}
            </div>

            <div style={{
              fontSize: '10px',
              color: '#555',
              fontStyle: 'italic',
              background: '#F8F4FF',
              padding: '5px 8px',
              border: '1px solid #D8D0F0',
              marginBottom: '8px',
            }}>
              {result.extra}
            </div>

            {/* Heart bar */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '6px' }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} style={{
                  fontSize: '14px',
                  opacity: i < Math.round(result.pct / 10) ? 1 : 0.15,
                  color: '#CC0066',
                }}>♥</span>
              ))}
            </div>

            <div style={{ fontSize: '10px', color: '#888' }}>
              <strong>{userName}</strong> + <strong>Ruth</strong> = 💜 para sempre
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
            <button className="btn-orkut" onClick={reset}>
              🔄 Fazer de novo
            </button>
            <button className="btn-orkut-gray" onClick={() => setOpen(false)}>
              Fechar
            </button>
          </div>
          <div style={{ marginTop: '6px', fontSize: '9px', color: '#aaa', fontStyle: 'italic' }}>
            * teste baseado em algoritmos avançados de compatibilidade do orkut™ 2005
          </div>
        </div>
      )}
    </div>
  )
}