import { motion } from "framer-motion"

export default function Title() {
  return (
    <section className="w-full max-w-3xl h-screen flex flex-col items-center px-4 pt-16 prose">
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="flex flex-col mt-32">
          <span className="font-medium text-xl md:text-3xl text-center">
            Hi, my name is
          </span>
          <span className="font-black text-6xl md:text-8xl text-center m-0 mb-2">
            Danmar Varela
          </span>
          <span className="font-bold text-xl md:text-3xl text-center">
            I am a Frontend developer and I build stuff for the web
          </span>
        </div>
      </motion.div>
    </section>
  )
}
