import React from 'react'
import './Login.css'
import whatsappLogo from '../../assets/img/whatsapp-logo.png'
import { Button } from '@material-ui/core'
import { auth, signWithGoogle } from '../../utils/firebase'
import { setUser } from '../../provider/authReducer'
import { useContext } from 'react'
import { StateContext } from '../../provider/StateProvider'

function Login() {
    const [state, dispatch] = useContext(StateContext)

    const signIn = _=>{
        auth.signInWithPopup(signWithGoogle).then(result=>{
            console.log(result.user)
            dispatch(setUser(result.user))
        }).catch(e=>console.log(e))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img className="login__whatsapp-logo" src={whatsappLogo} alt="Whatsapp Logo" />
                <h1>Sign in to whatsapp</h1>
                <Button onClick={signIn}>Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login
