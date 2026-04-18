'use client'

import { useState } from 'react'

const MSN_NICK_STYLES = [
  (n: string) => `·:*¨༺ ${n} ༻¨*:·`,
  (n: string) => `xXx ${n} xXx`,
  (n: string) => `★彡 ${n} 彡★`,
  (n: string) => `ஐ≈ ${n} ≈ஐ`,
  (n: string) => `•°o.O ${n} O.o°•`,
  (n: string) => `-=[ ${n} ]=-`,
  (n: string) => `†${n}†`,
  (n: string) => `♪♫ ${n} ♫♪`,
  (n: string) => `${n} ~*~`,
  (n: string) => `[ ${n} ]`,
]

const RUTH_NICKS = [
  '·:*¨ Ruth ¨*:· 🎂',
  'RuThCiNhA xXx bDay',
  '★ Ruth ★ tô de aniversário!!',
  '~*~Ruth~*~ ZZinha 💜',
  'RuthiinhaRestart 🎉',
  'RuTh .·´¯`·. 🎂🎂🎂',
]

const MSN_SONGS = [
  '♫ Parabéns pra você... ♫',
  '♫ É hoje é hoje... ♫',
  '♫ Aniversariante do dia 🎂 ♫',
  '♫ Happy Birthday to youuu ♫',
  '♫ que seja eterno enquanto dure ♫',
  '♫ não vou parar de comemorar ♫',
]

const MSN_STATUSES = [
  '🟢 Online',
  '🟡 Ausente',
  '🔴 Ocupada',
  '🎂 Comemorando!',
]

const RUTH_RESPONSES_1 = [
  (n: string) => `AAAAA ${n}!! meu deuuus que saudade!!!!! (L)(L)(L)`,
  (n: string) => `aiiii ${n}!! to chorando aqui socorro :'(`,
  (n: string) => `GENTE ${n}!! nao acreditoooo!! que surpresaaa :D`,
  (n: string) => `${n}!! vc me fez chorar hein!!! (L) que lindoooo`,
  (n: string) => `ai ${n} para vc ta me matando de amor aqui kkkk (L)`,
  (n: string) => `SOCORRO ${n}!! to com o coração quentinho agora 💜💜`,
  (n: string) => `${n}!!!!! nao tava esperando isso nao kkkk to passando mal (L)`,
  (n: string) => `meu deus ${n} vc apareceu hoje de todos os dias?? to derretendo aqui :'D`,
  (n: string) => `AAAAAAA ${n} para com issoooo to tremendo de emoção aqui kkkk`,
  (n: string) => `${n} juro q fui pegar o celular normal e agora to com lagrima no olho kkkkk (L)`,
  (n: string) => `ai ${n}!! vc lembrou de mimm?? to morrendo de amor aqui 💜💜💜`,
  (n: string) => `MENTIRA ${n} vc e real?? que pessoa incrivel do senhor kkkkkk (L)(L)`,
]

const RUTH_RESPONSES_2 = [
  () => `nossa eu tô de aniversário e vc ainda me faz chorar kkkkkk :'(`,
  () => `olha hoje ta sendo o melhor dia da minha vida por causa de vc!! :D`,
  () => `nao tem ninguem como vc no mundo inteiro sabia?? (L)(L)`,
  () => `to aqui passando mal de tanto amor!!`,
  () => `vc e as melhores lembranças da minha vida ne?? 8-) com certeza`,
  () => `meu deus do ceu que recado lindo!! guardei no favoritos hahaha`,
  () => `kkkkkk to rindo e chorando ao msm tempo isso e seu culpa saiba`,
  () => `juro q hoje ja e o melhor aniversario que eu tive na vida toda kkkkk`,
  () => `nossa vc me conhece mto bem ne?? da pra ver kkkk (L)(L)`,
  () => `ai minha vida faz sentido quando aparece gente como vc 💜 sério`,
  () => `kkkkkk to aqui igual doida sorrindo pra tela do pc por sua culpa`,
  () => `to salvando esse recado pra mostrar pra minha mae kkkkk q orgulho`,
  () => `vc faz parte das melhores historias da minha vida sabia?? (L)`,
  () => `hahaha to com vergonha de tanta coisa boa que vc falou kkkk mas obg 💜`,
]

const USER_RESPONSES = [
  (n: string) => `kkkkkk ${n} para vc ta me deixando sem graça aqui!! :P`,
  (n: string) => `aaaaa ${n} vc merece TUDO de melhor!! muita saude e felicidade!!`,
  (n: string) => `${n} to serio(a) hein!! vc e incrivel!! :D :D`,
  (n: string) => `kkkkk fica assim nao ${n}!! mas e verdade!! vc e especial dms (K)`,
  (n: string) => `${n} nao chora senao eu choro tbm kkkk mas e verdade!! te amo mto!!`,
  (n: string) => `hahaha ${n} vc e o maximo!! celebra mto hoje tá?? (F)(F)`,
  (n: string) => `${n} to falando serio hein!! vc merece o mundo inteiro!! (L)`,
  (n: string) => `kkkkkk ${n} olha o que vc me faz!! to aqui igual palhaço sorrindo`,
  (n: string) => `NAO ${n} para!! agora eu que to chorando aqui kkkkk (K)(K)`,
  (n: string) => `${n} vc e uma das pessoas mais especiais que eu ja conheci!! verdade!!`,
  (n: string) => `hahaha ${n} fica feliz hoje tá?? vc merece DEMAIS!! :D :D :D`,
  (n: string) => `${n} to com saudade agora por sua culpa kkkkkk (L) vdd!!`,
  (n: string) => `kkkkk ${n} voce e insuportavel de tao perfeita sabia?? (K)`,
  (n: string) => `${n} juro to com o coração quentinho aqui!! obg por existir!! 💜`,
  (n: string) => `KKKKKK ${n} agora eu que fui me emocionar!! para com isso!! (L)(L)`,
  (n: string) => `${n} vc ilumina qualquer lugar que entra!! isso nao e elogio e fato!! :D`,
]

const RUTH_RESPONSES_3 = [
  (n: string) => `obg ${n}!! vc e mt especial pra mim!! (L)(L)(L) saudade dms!!`,
  (n: string) => `amooo vc ${n}!! que bom ter vc na minha vida!! (L) vdd!!`,
  (n: string) => `${n} vc me fez o dia mais feliz!! obg por lembrar de mim 💜💜`,
  (n: string) => `kkkkkk ${n} agr to sorrindo igual doida aqui!! obg bb (L)(K)`,
  (n: string) => `${n} mto obg mesmo!! vc e um anjo!! (L) saudade ENORME!!`,
  (n: string) => `aaaaa ${n}!! hoje e o melhor aniversario por causa de vc!! obg 💜`,
  (n: string) => `${n} guarda esse dia na memoria tá?? eu nunca vou esquecer!! (L)(L)`,
  (n: string) => `kkkkkk ${n} to daqui a pouco ligando pra vc de tanto amor que to sentindo`,
  (n: string) => `${n} q bom q vc existe!! o mundo e melhor com vc nele!! (L) verdade!!`,
  (n: string) => `aaaaa ${n} vc me deixou sem palavras!! so consigo mandar (L)(L)(L)(L)`,
  (n: string) => `${n} juro q vou lembrar disso todo ano no meu aniversario!! obg 💜💜`,
  (n: string) => `KKKKKK ${n} vc e insuportavel de gente boa!! te amo dms!! (K)(L)`,
]

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Seed aleatória baseada no nome pra sempre dar o mesmo resultado pro mesmo usuário
function seededPick<T>(arr: T[], seed: string, offset: number): T {
  let h = offset * 31
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) & 0xffff
  return arr[h % arr.length]
}

function formatMSNTime(): string {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

interface Message {
  sender: 'user' | 'ruth'
  text: string
  time: string
}

function generateConversation(userName: string, userMessage: string): Message[] {
  const now = formatMSNTime()
  const seed = userName + userMessage

  return [
    { sender: 'user', text: userMessage, time: now },
    { sender: 'ruth', text: seededPick(RUTH_RESPONSES_1, seed, 1)(userName), time: now },
    { sender: 'user', text: seededPick(USER_RESPONSES, seed, 2)(userName), time: now },
    { sender: 'ruth', text: seededPick(RUTH_RESPONSES_2, seed, 3)(), time: now },
    { sender: 'user', text: seededPick(USER_RESPONSES, seed, 4)(userName), time: now },
    { sender: 'ruth', text: seededPick(RUTH_RESPONSES_3, seed, 5)(userName), time: now },
  ]
}

export default function MSNGenerator() {
  const [open, setOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [conversation, setConversation] = useState<Message[]>([])
  const [generated, setGenerated] = useState(false)
  const [ruthNick] = useState(() => randomPick(RUTH_NICKS))
  const [ruthStatus] = useState(() => randomPick(MSN_STATUSES))
  const [ruthSong] = useState(() => randomPick(MSN_SONGS))
  const [userNickStyle] = useState(() => randomPick(MSN_NICK_STYLES))

  function handleGenerate() {
    if (!userName.trim() || !message.trim()) return
    setLoading(true)
    // Simula um loading dramático de "conectando ao MSN" kkkk
    setTimeout(() => {
      const msgs = generateConversation(userName.trim(), message.trim())
      setConversation(msgs)
      setGenerated(true)
      setLoading(false)
    }, 1800)
  }

  function handleReset() {
    setGenerated(false)
    setConversation([])
    setUserName('')
    setMessage('')
  }

  if (!open) {
    return (
      <div style={{ padding: '10px', textAlign: 'center', borderTop: '1px dashed #C8C0E8' }}>
        <div style={{ fontSize: '16px', marginBottom: '4px' }}>💬</div>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#4B3BA8', marginBottom: '6px' }}>
          Gerador de Print de MSN
        </div>
        <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px' }}>
          Transforme sua mensagem numa conversa de MSN <br />
        </div>
        <button
          className="btn-orkut"
          style={{ background: 'linear-gradient(to bottom, #4488CC, #2266AA)' }}
          onClick={() => setOpen(true)}
        >
          💬 Criar print de MSN!
        </button>
      </div>
    )
  }

  return (
    <div style={{ borderTop: '1px dashed #C8C0E8' }}>
      <div style={{
        background: 'linear-gradient(to bottom, #1A5CA8, #0A3C80)',
        color: 'white', padding: '4px 8px', fontSize: '11px', fontWeight: 'bold',
        display: 'flex', alignItems: 'center', gap: '6px',
      }}>
        <span style={{ fontSize: '14px' }}>💬</span>
        Gerador de Print de MSN Messenger
        <span style={{ marginLeft: 'auto', fontSize: '9px', opacity: 0.7 }}>Windows Live Messenger 8.5</span>
      </div>

      {!generated ? (
        <div style={{ padding: '8px' }}>
          <div style={{ fontSize: '10px', color: '#555', marginBottom: '8px', fontStyle: 'italic' }}>
            Digite seu nome e uma mensagem para Ruth. Vamos gerar uma conversa estilo MSN 2010! 🎉
          </div>
          <div style={{ marginBottom: '6px' }}>
            <label className="form-label">Seu nome no MSN: (seja criativo, vamos voltar para 2010)</label>
            <input
              type="text"
              className="inset-box"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              placeholder="ex: Mariana, João, Carol..."
              style={{ width: '220px' }}
              maxLength={30}
              disabled={loading}
            />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label className="form-label">Sua mensagem para Ruth:</label>
            <textarea
              className="inset-box"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="ex: Feliz aniversário!! Te amo muito!!"
              rows={3}
              maxLength={200}
              disabled={loading}
              style={{ resize: 'vertical' }}
            />
          </div>
          {loading && (
            <div style={{ marginBottom: '8px' }}>
              <div className="loading-bar"><div className="loading-bar-fill"></div></div>
              <div style={{ fontSize: '9px', color: '#888', marginTop: '2px', fontStyle: 'italic' }}>
                conectando aos servidores do MSN... por favor aguarde... ⏳
              </div>
            </div>
          )}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={handleGenerate}
              disabled={loading || !userName.trim() || !message.trim()}
              style={{
                background: loading ? '#aaa' : 'linear-gradient(to bottom, #4488CC, #2266AA)',
                color: 'white', border: '1px solid #1A4A88',
                padding: '3px 10px', fontSize: '11px',
                fontFamily: 'Verdana', fontWeight: 'bold',
                cursor: loading ? 'wait' : 'pointer', borderRadius: '2px',
              }}
            >
              {loading ? '⏳ Conectando...' : '💬 Gerar conversa!'}
            </button>
            <button className="btn-orkut-gray" onClick={() => setOpen(false)} disabled={loading}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div style={{ padding: '8px' }}>
          {/* MSN Window */}
          <div style={{
            border: '2px solid #1A5CA8', borderRadius: '3px', overflow: 'hidden',
            fontFamily: 'Verdana, Arial, sans-serif', fontSize: '11px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.3)', maxWidth: '460px', margin: '0 auto',
          }}>
            {/* Title bar */}
            <div style={{
              background: 'linear-gradient(to bottom, #4A90D9, #1A5CA8)',
              padding: '3px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ color: 'white', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '14px' }}>💬</span>
                {userNickStyle(userName)} — Conversa
              </div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {['_', '□', '✕'].map(btn => (
                  <div key={btn} style={{
                    width: '16px', height: '14px',
                    background: 'linear-gradient(to bottom, #8ABCE8, #5A8CC0)',
                    border: '1px solid #3A6A9A',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '9px', color: 'white', cursor: 'default', borderRadius: '1px',
                  }}>{btn}</div>
                ))}
              </div>
            </div>

            {/* Contact bar */}
            <div style={{
              background: 'linear-gradient(to bottom, #E8F0FF, #D0DCF8)',
              padding: '5px 8px', borderBottom: '1px solid #B0C0E0',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, #9880E0, #6050B0)',
                border: '1px solid #7060C0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', flexShrink: 0,
              }}>🎂</div>
              <div>
                <div style={{ fontWeight: 'bold', color: '#003399', fontSize: '11px' }}>{ruthNick}</div>
                <div style={{ fontSize: '9px', color: '#557799' }}>{ruthSong}</div>
                <div style={{ fontSize: '9px', color: '#557799' }}>{ruthStatus}</div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ background: 'white', padding: '8px', minHeight: '200px', borderBottom: '1px solid #B0C0E0' }}>
              <div style={{ textAlign: 'center', fontSize: '9px', color: '#888', marginBottom: '8px', fontStyle: 'italic' }}>
                Conversa iniciada às {formatMSNTime()} — {new Date().toLocaleDateString('pt-BR')}
              </div>
              {conversation.map((msg, i) => (
                <div key={i} style={{ marginBottom: '6px' }}>
                  <span style={{ fontWeight: 'bold', color: msg.sender === 'ruth' ? '#7B0099' : '#003399', fontSize: '11px' }}>
                    {msg.sender === 'ruth' ? ruthNick : userNickStyle(userName)}
                  </span>
                  <span style={{ fontSize: '9px', color: '#999', marginLeft: '4px' }}>({msg.time})</span>
                  <span style={{ color: '#111', fontSize: '11px' }}>: {msg.text}</span>
                </div>
              ))}
              <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic', marginTop: '8px' }}>
                {ruthNick} está digitando...
              </div>
            </div>

            {/* Emoji bar */}
            <div style={{ background: '#F0F4FF', padding: '4px 6px', borderBottom: '1px solid #B0C0E0' }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '3px' }}>
                {['😊', '😄', '😘', '😍', '🎂', '💜', '❤️'].map(e => (
                  <span key={e} style={{ cursor: 'default', opacity: 0.6, fontSize: '14px' }}>{e}</span>
                ))}
                {['(L)', '(K)'].map(e => (
                  <span key={e} style={{ cursor: 'default', opacity: 0.6, fontSize: '10px' }}>{e}</span>
                ))}
              </div>
              <div style={{
                background: 'white', border: '1px solid #B0C0E0',
                padding: '4px', fontSize: '11px', color: '#aaa', fontStyle: 'italic', minHeight: '30px',
              }}>
                Digite uma mensagem...
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{
              background: 'linear-gradient(to bottom, #D8E4FF, #C0D0F0)',
              padding: '4px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div style={{ fontSize: '9px', color: '#446699' }}>🔒 Conversa não arquivada</div>
              <button style={{
                background: 'linear-gradient(to bottom, #4488CC, #2266AA)',
                color: 'white', border: '1px solid #1A4A88',
                padding: '2px 10px', fontSize: '10px',
                fontFamily: 'Verdana', cursor: 'default', borderRadius: '2px',
              }}>Enviar</button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4px', fontSize: '9px', color: '#888' }}>
            <em>Windows Live Messenger 8.5 • {new Date().toLocaleDateString('pt-BR')}</em>
          </div>

          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
            <button
              style={{
                background: 'linear-gradient(to bottom, #4488CC, #2266AA)',
                color: 'white', border: '1px solid #1A4A88',
                padding: '3px 10px', fontSize: '11px',
                fontFamily: 'Verdana', fontWeight: 'bold', cursor: 'pointer', borderRadius: '2px',
              }}
              onClick={() => alert('Tire o print com seu celular, fiquei c preguiça de trabalhar aqui kkkk')}
            >
              📸 Salvar print
            </button>
            <button className="btn-orkut" onClick={handleReset}>🔄 Gerar outro</button>
            <button className="btn-orkut-gray" onClick={() => setOpen(false)}>Fechar</button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '4px', fontSize: '9px', color: '#aaa' }}>
            * powered by cabecinha da Ruth 💜
          </div>
        </div>
      )}
    </div>
  )
}