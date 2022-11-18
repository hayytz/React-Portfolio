
const Boton = (props) => {
    return (
        <a href={props.link} target="_blank">
                <span className={`flex items-center text-[#ffff] 
                font-[500] text-[18px] font-space ${props.border} border-[1px]
                py-[.5rem] px-[1.5rem] rounded-[.5rem] hover:border-[#ffff]
                trans`}>{props.text}
                </span>
        </a>
    )
}

export default Boton