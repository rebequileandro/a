'use client'
import React, { useState } from 'react'
import Image from "next/image";

const ImageComponent = ({ imgProps }) => {
    const [load, setLoad] = useState(false)
    return (
        <div style={{ width: imgProps.width, height: imgProps.height, position: 'relative', overflow: "hidden", background: "#000" }}>
            <Image style={{ position: 'absolute', width: "100%", height: "100%", top: 0, left: 0, filter: "blur(30px)" }} src={imgProps.src} quality={100} width={10} height={10} />
            <Image style={{ opacity: load ? 1 : 0, zIndex: 2 }} {...imgProps} onLoad={() => setLoad(true)} />
        </div>
    )
}

export default ImageComponent