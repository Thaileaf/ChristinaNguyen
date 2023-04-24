import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../components/Header";
import Gallery from "../components/Gallery";
const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header/>
      <div className={"p-5 flex items-center justify-between max-w-7xl my-auto mx-auto z-20 border-t-4 border-grey"}>

        <Gallery/>
      </div>
    </main>
  )
}
