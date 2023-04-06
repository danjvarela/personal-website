import {FiGithub, FiLink, FiLinkedin} from 'react-icons/fi'
import SocialLink from './SocialLink'

export default function Socials() {
  return (
    <div className="flex gap-3 items-center">
      <SocialLink icon={<FiGithub className="text-lg" />} href="https://github.com/danjvarela"/>
      <SocialLink icon={<FiLinkedin className="text-lg" />} href="https://www.linkedin.com/in/danmar-varela-8097a9242"/>
    </div>
  )
}
