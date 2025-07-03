import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>📈 자비스 앱</h1>
      <p>AI 기반 주식 매매 도우미</p>
      <ul>
        <li>✅ 종목 감시 17개</li>
        <li>✅ 충동 매매 방지</li>
        <li>✅ 관망 자동 판정</li>
        <li>✅ 블라인드 기반 증권 뉴스 반영</li>
      </ul>
      <p style={{ color: 'gray' }}>🚧 기능 추가 준비 중...</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
