import React, { useState, useRef, useEffect } from 'react'
// import React and hooks
import { auth, db } from '../firebase'
import SignOut from './SignOut'
import SendMessage from './SendMessage'

function Chat() {
    const [messages, setMessages] = useState([])
    // state is like a variable, but has no scope
    const scroll = useRef()
    // use ref allows us to reference a certain component
    useEffect(() => {
        // useEffect runs once the page is loaded
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            // onSnapshot runs every time the messages collection is changed
            // access the messages collection in the database. Order the messages by date. If there are thousands of messags, only bring back the most recent 50
            setMessages(snapshot.docs.map((doc) => doc.data()))
            // set the messages state to the mapped out version of each doc inside the messages collection
        })
    })

    return (
        <div>
            <SignOut />
            {/* show the signout component */}
            <div className="msgs">
                {messages.map(({ text, uid, photoURL, id }) => (
                    // map out all the messages, with the respective profile pic and text
                    <div key={id}>
                        <div className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            {/* if the user logged is the one who sent the message, use a 'sent' class, otherwise use a 'received' class for the message */}
                            <img src={photoURL} alt="" />
                            {/* set source of image to the profile pic */}
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            {/* pass in scroll to the sendmessage component so we can scroll down whenver we send a message */}
            <div ref={scroll}></div>
            {/* this is the empty div we are scrolling down to */}
        </div>
    )
}

export default Chat
