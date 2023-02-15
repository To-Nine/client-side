import './style.css'
export default function EditText(props: any) {
    const placeholder: string = props.placeholder
    return (
        <input placeholder={placeholder} className='container-input'></input>
    )
}