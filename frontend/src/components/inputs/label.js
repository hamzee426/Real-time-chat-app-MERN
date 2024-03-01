
const Input = ({
    placeholder="",
    className="",
    value = "",
    type="",
    onChange,
}) => {
    return(
        <>
        <input className={`border rounded-md h-[44px] w-[250px] mt-[14px] text-sm pl-2 focus:border-primary outline-none focus:border-2 ${className}`} type={type} placeholder={`${placeholder}`} value={value} onChange={onChange} required={true}/>
        </>
    );
}


export {Input};