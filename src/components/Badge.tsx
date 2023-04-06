export interface BadgeProps {
  children: React.ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{children}</span>
  )
}
