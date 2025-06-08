export const Navbar = () => {
  return (
    <header className="text-white fixed top-0 left-0 right-0 z-20 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-5 mx-auto sm:px-10">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Adithya B R</a>

          <button className="cursor-pointer">
            <img src={"assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}