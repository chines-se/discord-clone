import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpIcon from '@material-ui/icons/Help';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import './ChatHeader.css';


function ChatHeader() {
    return (
        <div className = "chatHeader">
           

            <div className="chatHeader__left">
                <h3>
                 <span className="chatHeader__hash">#</span>
                 Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon/>
                <EditLocationIcon/>
                <PeopleAltRoundedIcon/>

                <div className="chatHeader__search">
                    <input placeholder= "Search" />
                    <SearchRoundedIcon/>
                </div>

                <SendRoundedIcon />
                <HelpIcon/>

            </div>
        </div>
    )
}

export default ChatHeader
