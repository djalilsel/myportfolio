import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Me from "@/components/Me"
import Projects from "@/components/Projects"
import Tech from "@/components/Tech"

export default function Home() {
  return (
    <main className="flex flex-col items-center w-fill " >
      <Me />
      <Education />
      <Tech />
      <Projects />
      <Contact />
    </main>
  )
}
