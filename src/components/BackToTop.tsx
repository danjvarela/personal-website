import { FiChevronUp } from 'react-icons/fi'

export default function BackToTop() {
  return (
    <a
      href="#title"
      className="fixed bottom-10 right-10 inline-flex items-center p-3  text-lg md:text-xl font-bold text-center text-white bg-gray-700 rounded-full hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 no-underline"
    >
      <FiChevronUp />
    </a>
  )
}
