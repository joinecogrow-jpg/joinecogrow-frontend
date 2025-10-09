import LogoNav from "./LogoNav"

export default function MainNavigation() {
  const navItems = [
    { name: "Dashboard", href: "/dashboard", color: "#388E3C" },
    { name: "Features", href: "/features", color: "#7CB342" },
    { name: "Games", href: "/games", color: "#29B6F6" },
    { name: "Community", href: "/community", color: "#689F38" },
    { name: "Admin", href: "/admin", color: "#388E3C" }
  ]
  
  return (
    <nav className="w-full bg-white shadow-lg px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <LogoNav />
        <div className="flex gap-6">
          {navItems.map(item => (
            <a 
              key={item.name}
              href={item.href}
              className="font-medium hover:scale-105 transition-transform"
              style={{color: item.color}}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
