import { Inter } from 'next/font/google'
import {Image} from "antd"
import Header from "../components/Header";
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header/>

      <h1 className={"p-5 text-4xl text-gray-500"}>About me</h1>
      <div className={"p-5 flex items-center justify-between max-w-7xl my-auto mx-auto border-t-4 border-grey"}>
        <div>
          <p>
            Hello! My name is Christina Nguyen and I'm a Graphic Design student currently pursuing my degree at San Jose University. As a beginner in the field, I'm eager to explore the world of visual communication and its power to shape perceptions, tell stories, and inspire change. My educational journey has so far introduced me to a range of design concepts, software tools, and techniques. I thrive on challenges and am committed to learning new skills and staying updated with industry trends.
            <br/><br/><br/>
            Outside of the classroom, I love experimenting with personal design projects, attending design workshops, and exploring the arts in various forms. I'm excited to continue developing my unique design style and look forward to collaborating with others to create meaningful and visually captivating work.
          </p>
        </div>
        <div>
          <Image height={800} width={550} src={"/9.jpg"} preview={false}/>
        </div>

      </div>
    </main>
  )
}
