export default function DashboardPage() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(to bottom,#f1f8e9,#e8f5e9)",padding:"2rem"}}>
      <div style={{textAlign:"center",marginBottom:"3rem"}}>
        <h1 style={{fontSize:"3rem",color:"#388E3C"}}>Dashboard</h1>
        <p style={{fontSize:"1.2rem",color:"#689F38"}}>Your Eco Impact Center</p>
      </div>
      
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"2rem",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"3px solid #9CCC65",textAlign:"center"}}>
          <div style={{fontSize:"3rem",marginBottom:"0.5rem"}}>🌳</div>
          <div style={{fontSize:"2rem",color:"#388E3C",fontWeight:"bold"}}>12,847</div>
          <div style={{color:"#689F38"}}>Trees Planted</div>
        </div>
        
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"3px solid #9CCC65",textAlign:"center"}}>
          <div style={{fontSize:"3rem",marginBottom:"0.5rem"}}>💧</div>
          <div style={{fontSize:"2rem",color:"#29B6F6",fontWeight:"bold"}}>3,291</div>
          <div style={{color:"#689F38"}}>Liters Saved</div>
        </div>
        
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"3px solid #9CCC65",textAlign:"center"}}>
          <div style={{fontSize:"3rem",marginBottom:"0.5rem"}}>🌍</div>
          <div style={{fontSize:"2rem",color:"#7CB342",fontWeight:"bold"}}>847K</div>
          <div style={{color:"#689F38"}}>Eco Points</div>
        </div>
      </div>
      
      <div style={{textAlign:"center",marginTop:"3rem"}}>
        <a href="/" style={{display:"inline-block",padding:"1rem 2rem",background:"#388E3C",color:"white",borderRadius:"8px",textDecoration:"none",fontSize:"1.1rem"}}>
          ← Back to Home
        </a>
      </div>
    </main>
  )
}