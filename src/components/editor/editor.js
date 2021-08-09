import MonacoEditor from "@monaco-editor/react";
import { Tab, Tabs } from "baseui/tabs-motion";
import React from "react";
import usePlayground from "../../provider/playground_provider";

export default function Editor() {
    const [activeKey, setActiveKey] = React.useState("0");
    const { setHtml, setJavaScript, setCss, } = usePlayground();
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
                        defaultValue="<!-- Write HTML code here -->"
                        onChange={(value) => {
                            setHtml(value);
                        }}
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
                        defaultValue="// some comment"
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
                        onChange={(value) => {
                            setCss(value);
                        }}
                    />
                </Tab>
            </Tabs>

        </div>
    );
}