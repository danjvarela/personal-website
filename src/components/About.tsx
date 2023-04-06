import Section from "./Section"
import Image from "next/image"

const skills = ["React.js", "Javascript", "HTML", "CSS", "Ruby on Rails", "Ruby", "Tailwindcss", "Git", "Lua", "Adobe Illustrator"]

export default function About() {
  return (
    <Section title="about." id="about">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="w-full flex flex-col">
          <span className="font-bold text-2xl md:text-5xl">Danmar Varela</span>
          <span className="text-base md:text-xl">Frontend Developer</span>
        </div>
        <Image src="/images/me.jpeg" alt="danmar in a coffee shop" width={500} height={500} className="m-0 w-20 h-20 md:w-40 md:h-40 rounded-full"/>
      </div>
      <p className="w-full">Danmar a frontend developer with over a year of experience in React JS and JavaScript.</p>
      <p className="w-full">With a keen eye for detail and a passion for clean, elegant code, Danmar is committed to delivering high-quality work that meets the unique needs of each client. His skillset includes proficiency in HTML, CSS, and JavaScript, as well as experience working with various web development tools and frameworks.</p>
      <p className="w-full">Danmar has a deep understanding of the latest web design trends and is constantly learning and staying up-to-date with emerging technologies. He thrives in collaborative environments and enjoys working with others to solve complex problems and create innovative solutions.</p>
      <h2 className="w-full text-left mt-0">Skills</h2>
      <div className="w-full flex flex-wrap gap-1">
        {
          skills.map(skill => (
            <div className="p-2 text-xs text-gray-500 border border-gray-400 rounded-full" key={skill}>{skill}</div>
          ))
        } 
      </div>
    </Section>
  )
}
