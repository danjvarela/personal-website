export interface WorkLinkProps {
  url: string
  color: string
  children: React.ReactNode
}

export default function WorkLink({ url, color, children }: WorkLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      className={`inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-${color}-700 rounded-lg hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300`}
    >
      {children}
    </a>
  )
}
