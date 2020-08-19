import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="yt logo"
                />
            </div>
            <div className="header__input">
            <input type="text" placeholder="Search" />
            <SearchIcon className="header__inputButton"/>
            </div>

            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
                src="https://avatars2.githubusercontent.com/u/44566235?s=60&u=0e51fdf444185482e211f6913bf5a60c489a562f&v=4"
                alt="Ragin Qualium"/>
            </div>
        </div>
    )
}

export default Header
