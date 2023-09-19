import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [sidemMenuOpen, setSidemMenuOpen] = useState(false)

  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
    },
    {
      name: 'Menu',
    },
    {
      name: 'Reservation',
      url: '/reserve',
    },
    {
      name: 'Order Online',
    },
    {
      name: 'Login',
    },
  ]

  return (
    <>
      <header>
        <nav className="">
          <div className="lg-nav hidden xl:grid grid-cols-3 px-24 my-12">
            <div className="col-span-1">
              <img
                className="w-72 lg:pl-4"
                src="/assets/Logos/Logo.png"
                alt=""
              />
            </div>
            <div className="col-span-2 w-full flex items-center justify-end">
              <ul className="flex list-none h-full">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center rounded-lg px-4 mx-3 h-full font-semibold hover:scale-105"
                    >
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sidebar-toggler flex justify-between items-center xl:hidden top-0 right-0 mx-8 my-4">
            <div>
              <img className="w-60" src="/assets/Logos/logo.png" alt=""/>
            </div>
            <div>
              {sidemMenuOpen ? (
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faClose}
                  size="3x"
                  onClick={() => setSidemMenuOpen(!sidemMenuOpen)}
                />
              ) : (
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faBars}
                  size="3x"
                  onClick={() => setSidemMenuOpen(!sidemMenuOpen)}
                />
              )}
            </div>
          </div>

          <div
            className={`sidebar xl:hidden fixed top-0 left-0 flex-col w-80 h-screen bg-[#fff] text-black border-r-2 border-[#333] ${
              sidemMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-500`}
          >
            <ul className="flex-grow">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="p-4 transition ease-in-out duration-300 hover:bg-[#F4CE14] cursor-pointer"
                >
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
