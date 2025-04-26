// app/page.tsx

'use client'
import { useEffect, useState } from 'react'

interface WebSocketData {
  heartRate: number,
  oxygen: number,
  timestamp: string
}

export default function Home() {
  const [data, setData] = useState<WebSocketData[] | null>(null)

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws')
    ws.onmessage = event => {
      console.log(event.data);
      setData(JSON.parse(event.data))
    }
    return () => ws.close()
  }, [])

  return (
    <div>
      <h1>Datos de Telemetría</h1>
      {data && data.length > 0 ? (
        <div>
          <p>❤️ Ritmo: {data[0].heartRate} bpm</p>
          <p>🫁 Oxígeno: {data[0].oxygen} %</p>
          <p>🕒 {data[0].timestamp}</p>
        </div>
      ) : (
        <p>Esperando datos del sensor...</p>
      )}
    </div>
  )
}
