export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f1f8e9, #e8f5e9)',
      padding: '2rem'
    }}>
      <h1 style={{color: '#388E3C', fontSize: '3rem'}}>Home</h1>
      <p style={{color: '#7CB342'}}>Welcome to Home</p>
      <a href='/' style={{color: '#29B6F6'}}>← Back to Home</a>
    </div>
  )
}