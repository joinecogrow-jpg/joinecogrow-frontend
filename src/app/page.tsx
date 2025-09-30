export default function Home() {
  return (
    <main style={{padding: 24}}>
      <h1 style={{color:'#388E3C', fontWeight: 800, fontSize: 32}}>JoinEcoGrow</h1>
      <p style={{color:'#689F38'}}>Local app router is working.</p>
      <ul style={{marginTop:16}}>
        <li><a href='/features/trees'>/features/trees</a></li>
        <li><a href='/features/diy'>/features/diy</a></li>
        <li><a href='/features/community'>/features/community</a></li>
      </ul>
    </main>
  )
}
