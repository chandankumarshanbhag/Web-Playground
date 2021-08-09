import React, { createContext, useContext, useEffect, useState } from "react"

const PlaygroundContext = createContext({});


export function PlaygroundProvider({ children }) {
    const [html, setHtml] = useState("");
    const [javaScript, setJavaScript] = useState("");
    const [css, setCss] = useState("");
    const [document, setDocument] = useState("");

    useEffect(() => {
        setDocument(`
            ${html}
            <style>
            ${css}
            </style>
            <script>
            ${javaScript}
            </script>
        `);
    }, [html, css, javaScript])

    return <PlaygroundContext.Provider value={{ html, javaScript, css, setHtml, setJavaScript, setCss, document, setDocument }}>{children}</PlaygroundContext.Provider>
}

export default function usePlayground() {
    return useContext(PlaygroundContext);
}