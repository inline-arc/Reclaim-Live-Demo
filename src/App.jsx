
import './App.css'
import QRCodeDisplay from './components/qr-code'
import VerificationPlatform from './components/providers'
import { Analytics } from "@vercel/analytics/react"

function App() {
  

  return (
    <>
    <Analytics/>
      <VerificationPlatform />
    </>
  )
}

export default App
