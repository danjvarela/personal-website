export interface SectionProps {
  title: String
  children: React.ReactNode
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section className='w-full max-w-3xl h-full flex flex-col items-center border-2 px-4 prose'>
      <h1 className='font-black text-8xl'>{title}</h1>
      {children}
    </section>
  )
}
