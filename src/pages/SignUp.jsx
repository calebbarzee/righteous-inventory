import { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import './SignUp.css';

function App() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className='app'>
            <div className='authenticate'>
                <h3> Register User </h3>
                <input
                    placeholder='Email...'
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    placeholder='Password...'
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <br />

                <button onClick={register}> Create User</button>
            </div>
        </div>
    );
}
