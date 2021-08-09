import React from 'react'
import usePlayground from '../../provider/playground_provider'

export default function Preview() {
    const { document } = usePlayground();
    return (
        <iframe allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write" scrolling="auto" allowtransparency="true" allowpaymentrequest="true" allowfullscreen="true" class="result-iframe " loading="lazy" spellcheck="false" allowFullScreen sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" title="web" srcDoc={document} frameBorder="0" style={{ width: "100%", height: "100%", resize: "horizontal" }}></iframe>
    )
}
