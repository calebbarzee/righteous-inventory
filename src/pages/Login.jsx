import { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import './Login.css';

function App() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    });

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className='app'>
            <div className='authenticate'>
                <h3> Login </h3>
                <input
                    type='email'
                    placeholder='Email...'
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    type='password'
                    placeholder='Password...'
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <br />
                <button onClick={login}> Login </button>
            </div>

            <h4> User currently Logged In: {user?.email}</h4>

            <button onClick={logout}> Sign Out </button>
        </div>
    );
}

export default App;
