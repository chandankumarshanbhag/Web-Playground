import { Caption1, H6, HeadingSmall } from 'baseui/typography';
import React from 'react';

export default function Footer() {
    return (
        <div style={{ borderTop: "1px solid #eee", height: "180px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <H6 margin="1rem">Powered By</H6>
            <div style={{ flex: 1, width: "240px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <img style={{ margin: "10px", width: "80px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
                </div>
                <div>
                    <img width="100px" src="https://baseweb.design/_next/static/images/base-web-f39e140bdbc82a2c567be26d26ef61d5.svg" />
                </div>
            </div>
            <div>
                <Caption1>Developed by ChandanKumar</Caption1>
            </div>
        </div>
    )
}