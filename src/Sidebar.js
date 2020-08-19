import React from 'react'
import SidebarRow from './SidebarRow';
import IconHome from "@material-ui/icons/Home" 
import IconWhatshot from "@material-ui/icons/Whatshot"  
import IconSubscriptions from "@material-ui/icons/Subscriptions"  
import IconVideoLibrary from "@material-ui/icons/VideoLibrarySharp"  
import IconHistory from "@material-ui/icons/HistorySharp" 
import IconOndemandVideoOutlined from "@material-ui/icons/OndemandVideoOutlined" 
import IconWatchLaterOutlined from "@material-ui/icons/WatchLaterOutlined" 
import IconThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined" 
import IconExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined" 
import IconCropFree from "@material-ui/icons/CropFree"  


import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Ragin sidebar</h2>
            {/* note that object as property has to be capitalized */}
            <SidebarRow Icon={IconHome} title="Home" /> 
            <SidebarRow Icon={IconWhatshot} title="Trending"/>
            <SidebarRow Icon={IconSubscriptions} title="Subscription"/>
            <SidebarRow Icon={IconVideoLibrary} title="Library"/>
            <SidebarRow Icon={IconHistory} title="History"/>
            <SidebarRow Icon={IconOndemandVideoOutlined} title="Your videos"/>
            <SidebarRow Icon={IconWatchLaterOutlined} title="Watch later"/>
            <SidebarRow Icon={IconThumbUpAltOutlined} title="Liked videos"/>
            <SidebarRow Icon={IconExpandMoreOutlined} title="Show me more"/>
        </div>
    )
}

export default Sidebar
