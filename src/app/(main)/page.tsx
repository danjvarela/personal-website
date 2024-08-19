import { Link } from "@/components/ui/link"
import { H3, P } from "@/components/ui/typography"
import { CardLink } from "@/components/card-link"

export default function Home() {
  return (
    <main className="px-2 pb-8">
      <h1 className="hidden">Home</h1>
      <h2 className="hidden" />
      <H3>&#128075; Hello there! I'm Dan</H3>
      <div className="relative"></div>
      <P>
        I'm a frontend developer with a knack for learning and building stuff
        for the web. I currently work as a frontend developer in a company based
        in the Philippines where I collaborate with a team of developers to
        create gaming websites.
      </P>

      <P>
        Aside from my current job, I also do freelance work. Below are some of
        the projects I've built:
      </P>

      <CardLink
        title="therapeaseph.com"
        href="https://therapeaseph.com"
        description="A website for TherapEasePH, a company that provides therapy services."
      />

      <CardLink
        title="aejgonzales.com"
        href="https://aejgonzales.com"
        description="A personal website for a client."
      />

      <P>
        <Link href="/works">View more of my works...</Link>
      </P>

      <P>
        When I'm not coding, I spend most of my time{" "}
        <Link href="https">reading books</Link>
      </P>
    </main>
  )
}
