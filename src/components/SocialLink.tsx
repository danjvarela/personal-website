export interface SocialLinkProps {
  icon: JSX.Element
  href: string
}

export default function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:bg-gray-400/30 p-2 rounded-full"
    >
      {icon}
    </a>
  )
}
