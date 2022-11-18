
const Separador = (props) => {
    return (
        <div className="flex flex-col justify-center items-center
      mb-[1rem]">
            <span className={`w-[1px] h-[100px] bg-gradient-to-b ${props.firstcolor} ${props.secondcolor}`}></span>
            <span className={`w-[40px] h-[40px] rounded-full bg-gradient-to-r ${props.firstcolor} ${props.secondcolor}
        text-[#fff] text-center text-[1.7rem]`}>{props.numero}</span>
        </div>
    )
}

export default Separador