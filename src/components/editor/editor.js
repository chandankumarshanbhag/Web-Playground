import MonacoEditor, { Monaco } from "@monaco-editor/react";
import { Tab, Tabs } from "baseui/tabs-motion";
import React from "react";
import usePlayground from "../../provider/playground_provider";
import { Spinner } from "baseui/spinner";

export default function Editor() {
    const [activeKey, setActiveKey] = React.useState("0");
    const { setHtml, setJavaScript, setCss, html, javaScript, css, } = usePlayground();
    return (
        <div>
            <Tabs
                activeKey={activeKey}
                onChange={({ activeKey }) => {
                    setActiveKey(activeKey);
                }}
                renderAll
                fill

            >
                <Tab title="HTML" overrides={{
                    TabPanel: {
                        style: {
                            padding: "10px 0px"
                        }
                    }
                }}>
                    <MonacoEditor
                        height="80vh"
                        language="html"
                        onChange={(value) => {
                            setHtml(value);
                        }}
                        loading={<Spinner />}
                        value={html}
                    />
                </Tab>
                <Tab title="JavaScript" overrides={{
                    TabPanel: {
                        style: {
                            padding: "10px 0px"
                        }
                    }
                }}>
                    <MonacoEditor
                        height="80vh"
                        language="javascript"
                        value={javaScript}
                        onChange={(value) => {
                            setJavaScript(value);
                        }}
                    />
                </Tab>
                <Tab title="CSS" overrides={{
                    TabPanel: {
                        style: {
                            padding: "10px 0px"
                        }
                    }
                }}>
                    <MonacoEditor
                        height="80vh"
                        language="css"
                        value={css}
                        onChange={(value) => {
                            setCss(value);
                        }}
                    />
                </Tab>
            </Tabs>

        </div>
    );
}