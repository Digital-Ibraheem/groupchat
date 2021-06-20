import React from 'react'
import { Button } from '@material-ui/core'
import { auth } from '../firebase'

function SignOut () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10' }}>
      {/* I have to use inline styles since material-ui disables using classes on its components */}
      <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} className='logout' onClick={() => auth.signOut()}>Sign Out</Button>
      {/* Auth signOut is a function given to us by firebase which signs the user out the same way they signed in(in this case using google) */}
    </div>
  )
}

export default SignOut
