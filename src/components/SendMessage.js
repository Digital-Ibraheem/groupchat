import React, { useState } from 'react'
import { Input, Button } from '@material-ui/core'
import { db, auth } from '../firebase'
import firebase from 'firebase'

function SendMessage ({ scroll }) {
  // import the scroll passed down to us from Chat
  const [msg, setMsg] = useState('')
  // set state to msg

  async function sendMessage (e) {
    e.preventDefault()
    // preventDefault stops the browser from refreshing
    const { uid, photoURL } = auth.currentUser
    // access the current users id and profile pic
    await db.collection('messages').add({
      // access the database, and the collection called messages inside of it and add the following as an object:
      text: msg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    // the createdAt field is given to us by firebase in the date format that they supports
    setMsg('')
    // empty the input when we send the message
    scroll.current.scrollIntoView({ behavior: 'smooth' })
    // scroll down to that empty div, with a smooth scroll
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        {/* when the form is submitted, run the sendMessage function */}
        <div className='sendMsg'>
          <Input style={{ width: '78%', fontSize: '20px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type='text' value={msg} onChange={e => setMsg(e.target.value)} />
          {/* the value and onchange create what is called a controlled component, which updates the msg state with the text in the input on every keypress */}
          <Button disabled={msg === ''} style={{ width: '18%', fontSize: '20px', fontWeight: '550', margin: '4px 5% -8px 5%', maxWidth: '200px' }} type='submit'>Send</Button>
          {/* I set this to a type of submit so i can send the message by pressing the enter key */}
        </div>
      </form>
    </div>
  )
}

export default SendMessage
