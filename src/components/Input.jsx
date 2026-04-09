const style = "border border-light-gray rounded-md w-full h-[40px] px-[15px] focus:outline-none";

const Input = ({ label, type, placeholder, required, onChange }) =>  {
  return (
    <div className="relative mt-6">
      <label htmlFor={label} className="text-blue text-[13px] absolute -top-2.5 left-2.25 bg-body pl-1 pr-2">
        {label}
        {required && <span className="text-warning">*</span>}
      </label>
      <input
        type={type}
        onChange={onChange}
        id={label}
        placeholder={placeholder}
        className={style}
        required={required}
      />
    </div>
  )
}

export default Input;