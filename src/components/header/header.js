import {
    AppNavBar,
    setItemActive,

} from "baseui/app-nav-bar";
import {
    ChevronDown,
    Delete, Grab,
    Upload
} from "baseui/icon";
import * as React from "react";

export default function Header() {
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