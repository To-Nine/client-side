import EditText from '../../elements/EditText'
import Button from '../../elements/EditText/Button'
import './style.css'
export default function Login() {
    return (
        <div className='container-login'>
            <EditText placeholder="Username"/>
            <EditText placeholder="Password"/>
            <Button text="Logar"/>
        </div>
    )
}