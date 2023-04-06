import { motion } from 'framer-motion'

export interface SectionProps {
  title: string
  children: React.ReactNode
  id: string
}

export default function Section({ children, title, id }: SectionProps) {
  return (
    <section
      className={`w-full max-w-lg sm:max-w-xl md:max-w-3xl min-h-screen flex flex-col items-center px-4 pt-16 prose`}
      id={id}
    >
      <motion.h1
        className="font-black text-5xl md:text-8xl"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      {children}
    </section>
  )
}
