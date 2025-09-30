export default function TailwindTest() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-hand mb-8">
          Tailwind CSS Test Page
        </h1>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg ring-border">
            <div className="w-20 h-20 bg-leaf rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold text-leaf">Leaf Color</h2>
            <p className="text-gray-600">#7CB342</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg ring-border">
            <div className="w-20 h-20 bg-hand rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold text-hand">Hand Color</h2>
            <p className="text-gray-600">#388E3C</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg ring-border">
            <div className="w-20 h-20 bg-water rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold text-water">Water Color</h2>
            <p className="text-gray-600">#29B6F6</p>
          </div>
        </div>
        
        <button className="mt-8 px-8 py-4 text-white font-bold rounded-lg brand-gradient">
          Test Button with Gradient
        </button>
      </div>
    </div>
  )
}
