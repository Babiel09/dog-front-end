import { InputProps } from "@/src/utils/inputprops";

export default function Input({onClick, type,placeHolder}:InputProps){
    return(
        <input
        className="w-96 px-4 py-2 text-gray-100 bg-blue-500 rounded-md 
                       transition-all duration-300 ease-in-out 
                       focus:ring-2 focus:ring-blue-300 focus:outline-none 
                       hover:bg-blue-600 placeholder-gray-300"
        onClick={onClick}
        type={type}
        placeholder={placeHolder}
        >
        </input>
    )
}