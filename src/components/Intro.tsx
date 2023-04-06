import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="w-full max-w-lg sm:max-w-xl md:max-w-3xl min-h-screen flex flex-col items-center px-4 pt-16 prose" id="title">
      <motion.div
        className="flex flex-col mt-32 mb-4"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="font-medium text-xl md:text-3xl text-center">
          Hi, my name is
        </span>
        <span className="font-black text-6xl md:text-8xl text-center m-0 mb-2">
          Danmar Varela
        </span>
        <span className="font-bold text-xl md:text-3xl text-center">
          I am a Frontend developer and I build stuff for the web
        </span>
      </motion.div>

      <div className="grid grid-cols-2 divide-x-2">
        <motion.div 
          className="p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="#about" className="inline-flex items-center px-3 py-2 text-lg md:text-xl font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 no-underline">
            About me
          </a>
        </motion.div>
        
        <motion.div
          className="p-4"
          initial={{ opacity: 0, x: 100, }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="#works" className="inline-flex items-center px-3 py-2 text-lg md:text-xl font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 no-underline">
            My works
          </a>
        </motion.div>
      </div>
    </section>
  )
}
