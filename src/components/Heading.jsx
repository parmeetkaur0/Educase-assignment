const Heading = ({ content, className = "" }) => {
  return (
    <h1 className={`text-[28px] font-bold text-primary ${className}`}>{content}</h1>
  )
}

export default Heading;