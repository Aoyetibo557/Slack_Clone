import React,{ useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router';
import './Chat.css';
import { BsStar } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import db from '../firebase'
import Message from './Message';
import ChatInput from './ChatInput';



function Chat() {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([])

    const chatRef = useRef(null);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    },[roomId])

    // using the room id to get the room details
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }

        // getting the room messages
        db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot((snapshot) => (
            setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        ))
    },[roomId])

    console.log(roomDetails);
    console.log("Messages:", roomMessages)


    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft" >
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <BsStar className="star__icon" />
                    </h4>
                </div>

                <div className="chat__headerRight">
                   
                     <p>
                         <AiOutlineInfoCircle className="details__icon" /> Details
                     </p>
                </div>
            </div>

            <div className="chat__messages">
               
                {roomMessages.map(({message, timestamp, user, userImage}) => (
                    <Message 
                        message={message}
                        user={user}
                        userImage={userImage}
                        timestamp={timestamp}
                    />
                ))}
            </div>

             {/* this empty div to to move the scren up when a new message is entered */}
            {/* <p ref={chatRef} className="chatBottom"></p> */}

            <div>
                <ChatInput chatRef={chatRef} channelName = {roomDetails?.name} channelId={roomId} />
            </div>
        </div>
    )
}

export default Chat
