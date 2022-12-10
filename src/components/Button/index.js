
function Button ({label,onClick,className}){
    return(
        <button onClick={onClick} className={className}>
          {label}
        </button>
    )
}

export default Button;