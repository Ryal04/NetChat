import React from 'react'
import { Button, Divider, Menu, Sidebar } from 'semantic-ui-react'

export const ColorPanel = () => {
    return (
        <Sidebar 
        as = {Menu}
        icon = "labeled"
        inveted
        vertical
        visible
        width = "very thin">

        <Divider/>
        <Button icon = "add" side = "small" color = "blue"/>
        
        </Sidebar>
    )
}

export default ColorPanel
