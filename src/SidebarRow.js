import React from 'react'

import "./SidebarRow.css"

function SidebarRow({Icon, title}) {
    return (
        <div className="sidebarRow">
            <Icon />
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
