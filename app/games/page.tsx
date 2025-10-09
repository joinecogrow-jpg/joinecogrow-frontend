export default function GamesPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f1f8e9, #e8f5e9)',
      padding: '2rem'
    }}>
      <h1 style={{color: '#388E3C', fontSize: '3rem'}}>
        Games
      </h1>
      <p style={{color: '#7CB342', fontSize: '1.5rem'}}>
        Welcome to JoinEcoGrow Games
      </p>
      <a href='/' style={{
        display: 'inline-block',
        marginTop: '2rem',
        padding: '0.75rem 1.5rem',
        background: '#29B6F6',
        color: 'white',
        borderRadius: '6px',
        textDecoration: 'none'
      }}>
        ← Back to Home
      </a>
    </div>
  )
}