import { Inter } from 'next/font/google'
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { Image } from "antd"
import React from "react";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <main>
      <Header/>
      <div className={"p-5 flex items-center justify-between max-w-7xl my-auto mx-auto z-20 border-t-4 border-grey"}>
        <div className={"flex items-start justify-evenly space-x-6"}>
          <div>
            <Image style={{ objectFit: 'cover' }} width={500} height={500} src={"/ChristinaNguyen/6.png"} preview={false}/>
          </div>
          <div className={"flex flex-col justify-between space-y-12"}>
            <Image width={225} height={225} src={"/ChristinaNguyen/1.png"} preview={false}/>
            <Image style={{ objectFit: 'cover' }} width={225} height={225} src={"/ChristinaNguyen/7.png"} preview={false}/>

          </div>
        </div>
        <div className={"flex items-center justify-center h-96"}>
          <h2 className={"text-6xl"}>Welcome!</h2>
        </div>

      </div>

    </main>
  )
}
