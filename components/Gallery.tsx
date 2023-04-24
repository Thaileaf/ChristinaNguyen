import React from "react";
import { Image } from 'antd';

type Props = {};


export default function Gallery({}: Props) {

  const filePaths = [
    "1.png", "2.png", "3.png", "4.jpg", "5.jpg", "6.png", "7.png",
    "8.png",
    "9.jpg",
    "10.jpg",
  ];

    return(
        <div className={" flex flex-wrap items-center justify-center mx-auto space-x-12 space-y-20"}>
            {/*<Image.PreviewGroup>*/}
                {filePaths.map(file => <Image key={file} style={{ objectFit: 'contain' }} width={200} height={200} src={"/"+file}/>)}

            {/*</Image.PreviewGroup>*/}

        </div>
    )
}