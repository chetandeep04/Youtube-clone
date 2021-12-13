import React from 'react';
import './ChannelRow.css';
import {Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function ChannelRow({
    image,
    channel,
    subs,
    noOfVideos,
    description,
    verified
}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo"
            alt={channel} src={image}>
             </Avatar>
             <div className="channelRow_text">
                 <h4>
                    {channel} {verified && <CheckCircleIcon/>} 
                 </h4>
                 <p>{subs} subscribers . {noOfVideos} videos</p>
                 <p>{description}</p>
             </div>
        </div>
    )
}

export default ChannelRow;
