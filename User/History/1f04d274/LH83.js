export const videoType = (src) => {
    let srcArr = src.split(".")
    return `video/${srcArr[
        srcArr.length - 1
    ]
        }`
}