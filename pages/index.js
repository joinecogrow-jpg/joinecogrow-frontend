export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#10b981', fontSize: '48px', textAlign: 'center' }}>
        🌱 JoinEcoGrow Platform
      </h1>
      <p style={{ fontSize: '24px', textAlign: 'center', color: '#666' }}>
        Grow Together, Grow Sustainable
      </p>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2>Platform Features: 750+</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ padding: '20px', background: '#f0fdf4', borderRadius: '10px' }}>
            <h3>🔨 DIY Eco-Growing</h3>
            <p>88 Features</p>
          </div>
          <div style={{ padding: '20px', background: '#eff6ff', borderRadius: '10px' }}>
            <h3>🌳 Tree Planting</h3>
            <p>91 Features</p>
          </div>
          <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '10px' }}>
            <h3>🎮 Gaming</h3>
            <p>55 Features</p>
          </div>
        </div>
        <p style={{ marginTop: '30px', color: '#999' }}>
          Backend API: https://joinecogrow-backend-pfybw.ondigitalocean.app
        </p>
      </div>
    </div>
  )
}
