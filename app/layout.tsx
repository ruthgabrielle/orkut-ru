import type { Metadata } from 'next'
import './globals.css'
 
export const metadata: Metadata = {
  title: 'Perfil de Ruth - Orkut',
  description: 'Deixe um depoimento para deixar meu dia mais especial! 🎂',
}
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
 