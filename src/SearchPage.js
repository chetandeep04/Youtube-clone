import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
               <TuneOutlinedIcon></TuneOutlinedIcon>
               <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj"
            channel="Clever Programmer"
            verified
            subs="660K"
            noOfVideos={382}
            description="you can find awesome programming"
            /> 
            <hr/>
            <VideoRow
            views="1.4M"
            subs="638K"
            description="videoo training ...............heyy"
            timestamp="59 secounds ago"
            channel="Clever Programmer"
            title="youtube clone using react js"
            image=""
            />

<VideoRow
            views="8,905 views"
            subs="638K"
            description="I coded for 100 days without coffee and here's what happened! "
            timestamp="Premiered on 26 Nov 2021"
            channel="Clever Programmer"
            title="100 Days of Coding with No Caffeine"
            image=""
            />

<VideoRow
            views="2,229,939 views"
            subs="638K"
            description="Here is the best free javascript programming course on the planet."
            timestamp="Premiered on 5 Nov 2019"
            channel="Clever Programmer"
            title="JavaScript Tutorial for Beginners - Full Course "
            image=""
            />

<VideoRow
            views="1.4M"
            subs="638K"
            description="videoo training ...............heyy"
            timestamp="59 secounds ago"
            channel="Clever Programmer"
            title="youtube clone using react js"
            image=""
            />

<VideoRow
            views="1.4M"
            subs="638K"
            description="videoo training ...............heyy"
            timestamp="59 secounds ago"
            channel="Clever Programmer"
            title="youtube clone using react js"
            image=""
            />

<VideoRow
            views="1.4M"
            subs="638K"
            description="videoo training ...............heyy"
            timestamp="59 secounds ago"
            channel="Clever Programmer"
            title="youtube clone using react js"
            image=""
            />
            </div>

    )
}

export default SearchPage;

