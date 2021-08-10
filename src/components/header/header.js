import { useStyletron } from "baseui";
import {
    AppNavBar,
    setItemActive
} from "baseui/app-nav-bar";
import {
    ChevronDown,
    Delete, Grab,
    Upload
} from "baseui/icon";
import { Select } from "baseui/select";
import * as React from "react";
import example from "../../example";
import usePlayground from "../../provider/playground_provider";

export default function Header() {
    const { exampleSelected, setExampleSelected, setExample } = usePlayground()
    const [css] = useStyletron();
    const [mainItems, setMainItems] = React.useState([
        { icon: Upload, label: "Main A" },
        {
            active: true,
            icon: ChevronDown,
            label: "Main B",
            navExitIcon: Delete,
            children: [
                { icon: Upload, label: "Secondary A" },
                { icon: Upload, label: "Secondary B" }
            ]
        }
    ]);
    return (
        <AppNavBar
            style={{
                padding: 0
            }}
            title={<span style={{ padding: 0 }}><img src="logo.svg" width="30px" height="30px" />{" Web Playground"}</span>}
            onMainItemSelect={item => {
                setMainItems(prev => setItemActive(prev, item));
            }}
            mainItems={[
                {
                    label: "option",
                    children: <Select
                        options={example.map((x, i) => ({ label: x.name, id: i }))}
                        value={exampleSelected}
                        onChange={({ value }) => {
                            console.log(value)
                            setExampleSelected(value);
                            setExample(value[0].id);
                        }}
                        multi={false}
                        clearable={false}
                        placeholder="Select example"
                        overrides={{
                            Root: {
                                style: ({ $theme }) => ({
                                    minWidth: '220px'
                                }),
                            }
                        }}
                    />
                }
            ]}
            mapItemToNode={item => (
                <div>
                    {item.children}
                </div>
            )}

            username="Guest"
            usernameSubtitle=""
            userItems={[
                { icon: Grab, label: "Logout" }
            ]}
            overrides={{

                Root: {
                    style: ({ $theme }) => ({
                        padding: "0px",
                        marginBottom: "2px"
                    })
                }
            }}
        />
    );
}