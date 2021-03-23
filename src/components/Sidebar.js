import React, {useState, useEffect} from 'react'
import './Sidebar.css';
import { FiEdit } from 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go';
import SidebarOption from './SidebarOption';
import {BsBookmark} from 'react-icons/bs';
import { Add, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import {IoIosApps, IoIosBrowsers } from 'react-icons/io';
import db from '../firebase'
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';


function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();


    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ))

    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div title="User Info" className="sidebar__info">
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <GoPrimitiveDot title="Online" className="sidebar__doticon" />
                    {user?.email}
                    </h3>
                </div>
                <FiEdit className="sidebar__editicon" />
            </div>
            <div>
                <SidebarOption Icon={InsertComment} title="Threads" />
                <SidebarOption Icon={Inbox} title="Mentions & reactions" />
                <SidebarOption Icon={BsBookmark} title="Saved itmes" />
                <SidebarOption Icon={IoIosBrowsers} title="Channel browser" />
                <SidebarOption Icon={PeopleAlt} title="People & user groups" />
                <SidebarOption Icon={IoIosApps} title="Apps" />
                <SidebarOption Icon={FileCopy} title="File browser" />
                <SidebarOption Icon={ExpandLess} title="Show less" />
                
                <hr />
                <SidebarOption Icon={ExpandMore} title="Channels" />
                <hr />
                {channels.map(channel => (
                    <SidebarOption 
                        title={channel.name}
                        id={channel.id}
                    />
                ))}


                <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

            </div>


        </div>
    )
}

export default Sidebar
