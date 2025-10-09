export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #f1f8e9, #e8f5e9)",
      padding: "2rem",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      {/* JoinEcoGrow Logo Section */}
      <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
        <div style={{position: "relative"}}>
          <svg width="250" height="250" viewBox="0 0 250 250">
            {/* Circular border */}
            <circle cx="125" cy="125" r="120" stroke="#9CCC65" strokeWidth="4" fill="white"/>
            
            {/* Nurturing hand emoji */}
            <text x="70" y="140" fontSize="60" fill="#388E3C">🤚</text>
            
            {/* Growing plant emoji */}
            <text x="110" y="120" fontSize="50" fill="#7CB342">🌱</text>
            
            {/* Earth globe emoji */}
            <text x="90" y="180" fontSize="40">🌍</text>
          </svg>
          
          {/* Water droplet */}
          <div style={{position: "absolute", bottom: "60px", right: "60px"}}>
            <span style={{fontSize: "30px", color: "#29B6F6"}}>💧</span>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h1 style={{
        textAlign: "center",
        fontSize: "3rem",
        marginTop: "2rem",
        color: "#388E3C"
      }}>
        Join<span style={{color: "#388E3C"}}>Eco</span>
        <span style={{color: "#7CB342"}}>Grow</span>
      </h1>
      
      <p style={{
        textAlign: "center",
        fontSize: "1.25rem",
        color: "#689F38",
        marginTop: "1rem"
      }}>
        Where Gaming Meets Sustainability
      </p>
      
      {/* Navigation Links */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "3rem",
        flexWrap: "wrap"
      }}>
        <a href="/dashboard" style={{
          padding: "1rem 2rem",
          background: "#388E3C",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}>Dashboard</a>
        
        <a href="/features" style={{
          padding: "1rem 2rem",
          background: "#7CB342",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}>Features</a>
        
        <a href="/games" style={{
          padding: "1rem 2rem",
          background: "#29B6F6",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}>Games</a>
        
        <a href="/community" style={{
          padding: "1rem 2rem",
          background: "#689F38",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}>Community</a>
      </div>
      
      {/* Status */}
      <div style={{textAlign: "center", marginTop: "3rem"}}>
        <p style={{color: "#388E3C", fontSize: "1.2rem"}}>
          ✅ 925+ Features Ready
        </p>
      </div>
    </main>
  )
}