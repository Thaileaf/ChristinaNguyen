import React from "react";
import Link from 'next/link'

type Props = {
  title:string,
  link:string,
};


export default function HeaderButton({title, link}: Props) {
  return(
    <Link href={link}>
      <button className="border-b-2 border-gray py-2 px-4 text-gray-500">
        <h3>
          {title}
        </h3>
      </button>
    </Link>

)
}
