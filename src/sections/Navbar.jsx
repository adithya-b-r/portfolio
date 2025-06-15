import { useState } from "react"

import { navLinks } from "../constants"

const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="text-neutral-400 hover:text-white max-sm:hover:bg-[#3A3A49] max-sm:w-full max-sm:rounded-md max-sm:px-5 py-2 ">
          <a href={href}
            className="text-lg md:text-base hover:text-white transition-colors"
            onClick={() => { }}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); //To handle bugs.
  }

  return (
    <header className="text-white fixed top-0 left-0 right-0 z-20 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-5 mx-auto sm:px-10">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Adithya B R</a>

          <button onClick={toggleMenu} className="cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`absolute left-0 right-0 bg-[#0E0E10] backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  )
}