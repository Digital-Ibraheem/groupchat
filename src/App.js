import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth'
// importing a hook from a library that lets me check if user is logged in
import Chat from './components/Chat';
import SignIn from './components/SignIn';
// imports componenets to seperate them into their own files, makes the code look cleaner
import { auth } from './firebase';
// importing auth variable from firebase.js

function App() {
  const [user] = useAuthState(auth)
  // check if user is logged in or

  return (
    <>
      {user ? <Chat /> : <SignIn />}
      {/* if user is logged in, show chat, other wise show sign in */}
    </>
  );
}

export default App;
