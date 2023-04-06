import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowRight, FiGithub } from 'react-icons/fi'
import Badge from './Badge'

export interface WorkProps {
  title: string
  img: string
  description: string
  url: string
  sourceCode: string
  skills: string[]
}

export default function Work({
  title,
  img,
  description,
  url,
  sourceCode,
  skills,
}: WorkProps) {
  return (
    <motion.div
      className="w-full bg-white border border-gray-200 rounded-lg shadow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <a href={url}>
        <Image
          className="rounded-t-lg w-full m-0"
          src={img}
          alt={title}
          width={1000}
          height={500}
        />
      </a>
      <div className="p-5">
        <a href={url} className="no-underline">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <div className="w-full flex flex-wrap">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="flex gap-4">
          <a
            href={url}
            target="_blank"
            className="inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Check this out
            <FiArrowRight />
          </a>
          <a
            href={sourceCode}
            target="_blank"
            className="inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            View Source
            <FiGithub />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
