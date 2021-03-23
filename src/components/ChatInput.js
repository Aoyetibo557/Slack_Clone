import React, {useState } from 'react';
import './ChatInput.css';
import db from '../firebase'
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import { FaRegSmileWink } from 'react-icons/fa'
import { VscBold, VscListOrdered, VscListUnordered } from 'react-icons/vsc'
import { BsTypeItalic, BsTypeStrikethrough, BsCodeSlash, BsBlockquoteLeft } from 'react-icons/bs'
import { FiLink } from 'react-icons/fi';
import { BiCodeCurly } from 'react-icons/bi';


function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState();
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault()

        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
              message: input,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              user: user.displayName,
              userImage: user.photoURL,
            })
        }

        setInput("")
    }
    return (
        <div className="chatInput">
            <form className="chatInput__form">
                <input className="chatInput__input" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button className="chatInput__btn" type="submit" onClick={sendMessage}>Send</button>
                
                <div className="icons__div">
                    <FaRegSmileWink className="icons" title="Emojis" />
                    <VscBold className="icons" title="Bold Font" />
                    <BsTypeItalic className="icons" title="Italics" />
                    <BsTypeStrikethrough className="icons" title="Strikethrough" />
                    <BsCodeSlash className="icons" title="Code" />
                    <FiLink className="icons" title="Link" />  
                    <VscListOrdered className="icons" title="Orderes List" />
                    <VscListUnordered className="icons" title="Unordered List" />
                    <BsBlockquoteLeft className="icons" titl="Block Quote" />
                    <BiCodeCurly className="icons" title="Code Block" />
                </div>
            </form>
        </div>
    )
}

export default ChatInput
