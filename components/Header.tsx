import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import HeaderButton from "./HeaderButton";
import Link from "next/link"

type Props = {};
const headerButtons = [
  {title:"About", link:"/about"},
  {title:"Projects", link:"/projects"},
  // {title:"Contact", link:"/contact"},
]

export default function Header({}: Props) {
    return(
        <header className={"sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"}>
            <div className={"flex flex-row items-center"}>
                <button>
                  <Link href={"/"}>
                    <HomeOutlined style={{ fontSize: '50px', color:"grey"}}/>
                  </Link>
                </button>
            </div>
            <div className={"flex flex-row items-center justify-between space-x-20"}>
                {headerButtons.map(({title, link}) => <HeaderButton title={title} link={link}/>)}
            </div>



        </header>
    )
}