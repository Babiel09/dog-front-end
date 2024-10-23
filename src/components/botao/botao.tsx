import { BotaoProps } from "@/src/utils/botao";

export default function Botao({onClick,children,type}:BotaoProps){
    return(
        <button  
        className="px-6 py-2 text-white bg-blue-500 rounded-md shadow-md 
        transition-all duration-300 ease-in-out 
        hover:bg-blue-600 hover:shadow-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    )
}