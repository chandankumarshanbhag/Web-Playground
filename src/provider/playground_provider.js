import React, { createContext, useContext, useEffect, useState } from "react"
import example from "../example";

const PlaygroundContext = createContext({});


export function PlaygroundProvider({ children }) {
    const [exampleSelected, setExampleSelected] = React.useState(null);

    const [html, setHtml] = useState("");
    const [javaScript, setJavaScript] = useState("");
    const [css, setCss] = useState("");
    const [document, setDocument] = useState("");

    function setExample(id) {
        setHtml(example[id].html);
        setCss(example[id].css);
        setJavaScript(example[id].javascript);
    }

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

    return <PlaygroundContext.Provider value={{ html, javaScript, css, setHtml, setJavaScript, setCss, document, setDocument, exampleSelected, setExampleSelected,setExample }}>{children}</PlaygroundContext.Provider>
}

export default function usePlayground() {
    return useContext(PlaygroundContext);
}