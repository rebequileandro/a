export const videoType = (src) => {
    let srcArr = src.split(".")
    console.log(`video/${srcArr[
        srcArr.length - 1
    ]
        }`)
    return `video/${srcArr[
        srcArr.length - 1
    ]
        }`
}