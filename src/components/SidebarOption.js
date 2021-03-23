import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../firebase';
import './SidebarOption.css';

function SidebarOption({Icon, title, id, addChannelOption}) {
    const history = useHistory();


    // to get the room id and go to the room
    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`);
        }
        else{
            history.push('title');
        }
    };

    //adds new room to the database
    const addChannel = () => {
        const channelName = prompt('Pleaseenter new channel name');

        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {/* Conditional rendering;this says if an icon is passed in as a prop render it if not dont. */}
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption
