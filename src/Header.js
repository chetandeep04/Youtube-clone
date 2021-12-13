import React,{useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
function Header() {
    const [inputSearch,setInputSearch]=useState('');
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon></MenuIcon>
            <Link to="/">
            <img className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" 
            alt=""/>
            </Link>
            </div>
            <div className="header_input">
            <input onChange={e=> setInputSearch(e.target.value)}
            value={inputSearch} placeholder="Search" type="text"></input>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header_inputButton"></SearchIcon>
            </Link>
            </div>
            <div className="header_icons">
            <VideoCallIcon className="header_icon"></VideoCallIcon>
            <AppsIcon className="header_icon"></AppsIcon>
			<NotificationsIcon className="header_icon"></NotificationsIcon>
			<Avatar 
			alt="Remy Sharp"
			src="https;//avatars2.githubusercontent.com/u/24712956?s=400&u=
			bb71527e605ae1b748fc2d4157a842e57e42ad44&v=4"/>
        </div></div>
    )
}

export default Header;
