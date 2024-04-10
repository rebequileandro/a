'use client'
import React, { useState } from 'react'
import Image from "next/image";

const ImageComponent = ({ imgProps }) => {
    const [load, setLoad] = useState(false)
    return (
        <div style={{ width: imgProps.width, height: imgProps.height, position: 'relative', overflow: "hidden", background: "#000" }}>
            <Image style={{
                // opacity: load ? 0 : 1, 
                position: 'absolute', width: "100%", height: "100%", top: 0, left: 0,
            }} src={imgProps.src} quality={80} width={30} height={30} />
            <Image style={{ opacity: load ? 1 : 0 }} {...imgProps} onLoad={() => setLoad(true)} />
        </div>
    )
}

export default ImageComponent