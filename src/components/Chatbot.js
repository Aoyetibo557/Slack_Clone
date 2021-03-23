import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { useStateValue } from '../StateProvider';
import ChatInput from './ChatInput';



function Chatbot() {
    const [{user}, dispatch] = useStateValue();
    const steps = [
        {
            id: '1',
            message: `Hello ${user?.displayName}. I am a Slacky, how can i help you this fine day...`,
            trigger: '2',

        },
        {
            id: '2',
            options: [
                {value: 1, label: 'Create new channel', trigger:'3'},
                {value: 2, label: 'Delete Message', trigger:'4'},
                {value: 3, label: 'Create Private Chatroom', trigger:'5'},
     
            ]
        },
        {
            id:'3',
            message: 'Click on the add channel button to the left and type in new channel name into prompt and press enter.',
            trigger: '2',
            end:true,
        }, 
        {
            id: '4',
            message: 'Sorry at this moomnet messages cannot be deleted, that will be implemented in future development.',
            trigger: '2',
        },
        {
            id: '5',
            message: 'Sorry that feature is yet to be available in this build.',
            trigger: 2,
        },
        {
            id: '6',
            message: 'Bye',
            end: true,
        }
    ]
   
    return (
        <div>
            <ChatBot 
                headerTitle="Speech Recognition"
                recognitionEnable={true}
                steps={steps} 
            />
        </div>
    )
}

export default Chatbot
