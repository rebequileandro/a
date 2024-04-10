import { useState, useEffect } from 'react'

//----------example:)----------//
//const { NameScript } = useScript("url", "NameScript")

const useScript = (url, name) => {
    const [newScript, setNewScript] = useState({})

    useEffect(() => {
        const element = document.getElementById(name)
        let script;
        // if (!element) {
        script = document.createElement('script')
        script.id = name
        script.src = url
        script.async = true
        script.onload = () => setNewScript({ [name]: window[name] })

        document.body.appendChild(script)
        // }
        return () => {
            document.body.removeChild(script)
        }
    }, [url])

    return newScript;
}
export default useScript;