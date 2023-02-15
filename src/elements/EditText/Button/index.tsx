export default function Button(props: any) {
    const buttonText: string = props.text
    return(
        <button  className="button"  type={"button"} >{buttonText}</button>
    )
}