import { useState } from 'react'
import {loginDto} from '../../model/loginDto'
import { useNavigate } from "react-router-dom";
import './style.css'

export default function Login() {
    const navigate = useNavigate()

    const login:loginDto = {
        username: '',
        password: ''
    }

    const [loginState, setLogin] = useState(login);

    const validateUser = () => {
        if (loginState.username !== '' && loginState.password !== '') {
            navigate('/home')
        }
    }

    const usermameHandle = (e: any) => {
        setLogin(loginState.username = e.target.value);
    }

    const passwordHandle = (e: any) => {
        setLogin(loginState.password = e.target.value);
    }



    return (
        <div className='container-login'>
             <input placeholder="Username" className='container-input' onChange={usermameHandle}></input>
             <input placeholder="Password" className='container-input' onChange={passwordHandle}></input>
             <button  className="button"  type={"button"} onClick={validateUser}>Logar</button>
        </div>
    )
}