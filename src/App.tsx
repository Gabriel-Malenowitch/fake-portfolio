import { ReactNode } from "react"
import { Header } from "./components/page/header"
import { Body } from "./components/page/body"
import { useRandomBackground } from "./hooks/use-random-background"

export function App() {

  return (
    <Background>
      <Header />
      <Body />
    </Background>
  )
}

interface BackgroundProps { children: ReactNode }

const Background = ({ children }: BackgroundProps) => {
  const background = useRandomBackground({ time: 500})

  return (
    <div style={{backgroundColor: background, height: '100vh', padding: 16}}>
      {children}
    </div>
  )
}