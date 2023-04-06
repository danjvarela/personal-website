import Section from "./Section"
import Work from "./Work"

const works = [
  {
    title: "Tic tac toe",
    img: "/images/tic-tac-toe.png",
    description: "A simple tic tac toe game made using Vanilla JS and SASS.",
    url: "https://danjvarela.github.io/tic-tac-toe/",
    sourceCode: "https://github.com/danjvarela/tic-tac-toe",
    skills: ["Javascript", "SASS"]
  },
  {
    title: "The Grape Bank",
    img: "/images/the-grape-bank.png",
    description: "I made this as a project to the bootcamp I was attending. We were asked to create an app where admins (the users) can manage the bank's clients' financial transactions.",
    url: "https://danjvarela.github.io/tgb",
    sourceCode: "https://github.com/danjvarela/tgb",
    skills: ["React.js", "Chakra UI"]
  },
  {
    title: "React Chess",
    img: "/images/react-chess.png",
    description: "A simple fully functional chess game using React.js and Tailwindcss",
    url: "https://danjvarela.github.io/react-chess",
    sourceCode: "https://github.com/danjvarela/react-chess",
    skills: ["React.js", "Tailwindcss"]
  },
]

export default function Works() {
  return (
    <Section title="works." id="works">
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
        {
          works.map(work => (
            <Work title={work.title} img={work.img} description={work.description} url={work.url} sourceCode={work.sourceCode} skills={work.skills}/>
          ))
        }
      </div>
    </Section>
  )
}
