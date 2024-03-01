const Button = ({
    text = "",
    color = "",
    className = "",
    onSubmit 
}) => {
    return(
        <button className={`bg-${color} text-white rounded-md h-[38px] w-[200px] ${className}` } onSubmit={onSubmit} type="submit">{text}</button>
    );
}

export default Button;