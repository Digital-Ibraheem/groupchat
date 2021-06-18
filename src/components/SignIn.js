import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'
// import button from the material ui library, which gives a nice default style

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        // set a variable to a new instance of the google auth provider(window which allows you to sign in with google)
        auth.signInWithPopup(provider)
        // sign in with a popup window
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            {/* I have to use inline styling here since material-ui does not allow class names */}
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
            {/* when button is clicked, run signInWithGoogle */}
        </div>
    )
}

export default SignIn
