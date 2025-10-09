export default function FeaturesPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #f1f8e9, #e8f5e9)",
      padding: "2rem"
    }}>
      <div style={{textAlign: "center", marginTop: "2rem"}}>
        {/* Logo Section */}
        <div style={{marginBottom: "3rem"}}>
          <h1 style={{fontSize: "3rem", fontWeight: "bold"}}>
            <span style={{color: "#388E3C"}}>Join</span>
            <span style={{color: "#388E3C"}}>Eco</span>
            <span style={{color: "#7CB342"}}>Grow</span>
          </h1>
        </div>
        
        <h2 style={{color: "#388E3C", fontSize: "2.5rem", marginBottom: "3rem"}}>
          925+ Revolutionary Features
        </h2>
        
        {/* Feature Categories Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {/* Tree Planting */}
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            border: "3px solid #9CCC65",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <div style={{fontSize: "3rem", marginBottom: "1rem"}}>🌳</div>
            <h3 style={{color: "#388E3C", fontSize: "1.5rem"}}>Tree Planting</h3>
            <p style={{color: "#689F38"}}>91 Features</p>
            <p style={{color: "#666", marginTop: "1rem"}}>
              Plant real trees through gaming, track growth, earn NFTs
            </p>
          </div>
          
          {/* DIY Eco */}
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            border: "3px solid #9CCC65",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <div style={{fontSize: "3rem", marginBottom: "1rem"}}>🌱</div>
            <h3 style={{color: "#388E3C", fontSize: "1.5rem"}}>DIY Eco-Growing</h3>
            <p style={{color: "#689F38"}}>88 Features</p>
            <p style={{color: "#666", marginTop: "1rem"}}>
              Hydroponics, vertical gardens, composting guides
            </p>
          </div>
          
          {/* Community */}
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            border: "3px solid #9CCC65",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <div style={{fontSize: "3rem", marginBottom: "1rem"}}>👥</div>
            <h3 style={{color: "#388E3C", fontSize: "1.5rem"}}>Community</h3>
            <p style={{color: "#689F38"}}>87 Features</p>
            <p style={{color: "#666", marginTop: "1rem"}}>
              Forums, mentorship, regional groups, live events
            </p>
          </div>
          
          {/* Gaming */}
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            border: "3px solid #9CCC65",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <div style={{fontSize: "3rem", marginBottom: "1rem"}}>🎮</div>
            <h3 style={{color: "#388E3C", fontSize: "1.5rem"}}>Gaming Center</h3>
            <p style={{color: "#689F38"}}>55 Features</p>
            <p style={{color: "#666", marginTop: "1rem"}}>
              Battle royale, mini-games, tournaments
            </p>
          </div>
          
          {/* AI Assistant */}
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            border: "3px solid #9CCC65",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <div style={{fontSize: "3rem", marginBottom: "1rem"}}>🤖</div>
            <h3 style={{color: "#388E3C", fontSize: "1.5rem"}}>AI Assistant</h3>
            <p style={{color: "#689F38"}}>68 Features</p>
            <p style={{color: "#666", marginTop: "1rem"}}>
              57 languages, personalized tips, voice commands
            </p>
          </div>
          
          {/* Education */}
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            border: "3px solid #9CCC65",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <div style={{fontSize: "3rem", marginBottom: "1rem"}}>📚</div>
            <h3 style={{color: "#388E3C", fontSize: "1.5rem"}}>Education</h3>
            <p style={{color: "#689F38"}}>52 Features</p>
            <p style={{color: "#666", marginTop: "1rem"}}>
              Courses, videos, quizzes, certificates
            </p>
          </div>
        </div>
        
        {/* Back Button */}
        <div style={{marginTop: "3rem"}}>
          <a href="/" style={{
            display: "inline-block",
            padding: "1rem 3rem",
            background: "linear-gradient(135deg, #388E3C, #7CB342)",
            color: "white",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            boxShadow: "0 5px 20px rgba(56,142,60,0.3)"
          }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}