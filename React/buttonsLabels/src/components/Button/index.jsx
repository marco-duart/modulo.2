const Button = ({label}) => {
    return (
        <div>
            <label htmlFor="btn"></label>
            <button name="btn" onClick={() => alert(label)}>{label}</button>
        </div>
    )
}

export default Button