import { useState, useEffect } from 'react'

//----------example:)----------//
//const { NameScript } = useScript("url", "NameScript")

const useScript = (url, name, id) => {
    const [newScript, setNewScript] = useState({})

    useEffect(() => {
        const script = document.createElement('script')

        script.src = url
        script.id = id
        script.async = true
        script.onload = () => setNewScript({ [name]: window[name] })

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [url])

    return newScript;
}
export default useScript;