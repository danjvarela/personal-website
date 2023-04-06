import Image from 'next/image'
import Socials from './Socials'

export default function Navbar() {
  return (
    <nav className="w-screen border-gray-300 h-16 flex justify-center fixed top-0 left-0 bg-white/30 backdrop-blur-sm">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-3xl h-full flex items-center justify-between px-4">
        <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        <Socials />
      </div>
    </nav>
  )
}
