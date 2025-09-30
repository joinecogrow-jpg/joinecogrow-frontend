export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-hand">JoinEcoGrow Test</h1>
      <p className="mt-2 text-textg">Brand colors from your logo PNG</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="p-4 rounded-lg bg-leaf text-white">Leaf #7CB342</div>
        <div className="p-4 rounded-lg bg-water text-white">Water #29B6F6</div>
        <div className="p-4 rounded-lg bg-earth text-white">Earth #6D4C41</div>
      </div>
      <button className="mt-6 px-6 py-3 text-white rounded-lg brand-gradient">Gradient Button</button>
    </div>
  )
}
