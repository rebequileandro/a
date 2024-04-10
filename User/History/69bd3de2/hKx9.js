import { useState, useEffect } from 'react'
//example:  
//const { NameScript } = useScript("url", "NameScript")
export default function useScript(url, name) {
    const [newScript, setNewScript] = useState({})

    useEffect(() => {
        const script = document.createElement('script')

        script.src = url
        script.async = true
        script.onload = () => setNewScript({ [name]: window[name] })

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [url])

    return newScript;
}