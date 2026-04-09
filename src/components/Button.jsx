const commonStyle = "rounded-md w-full text-center h-[46px] mb-[10px] font-medium";
const primaryStyle = "bg-blue text-white cursor-pointer";
const secondaryStyle = "bg-purple text-primary cursor-pointer";
const disabledStyle = "bg-light-gray text-white cursor-not-allowed";

const Button = ({ name, type, category, disabled, className="" }) =>  {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`${disabled ? disabledStyle : category === "primary" ? primaryStyle : secondaryStyle} ${commonStyle} ${className}`}
        >
            {name}
        </button>
    )
}

export default Button;