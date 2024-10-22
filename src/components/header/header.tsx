"use client"

import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { PiDogBold } from "react-icons/pi";
import {useRouter} from "next/navigation";


export default function Header() {
    const rota = useRouter()
    return(
        <header className="bg-white shadow-md py-4 fixed z-50 w-full">
            <nav className="max-w-6xl mx-auto flex justify-between items-center px-8">
                <div className="hover:text-blue-500 transition-colors cursor-pointer">        
                    <h1 className="text-4xl font-bold text-blue-500"  onClick={()=>rota.push('/')}>Dog Hub <PiDogBold size={44}  onClick={()=>rota.push('/')}/></h1>
                    </div>
                <div className="font-bold text-blue-500">
                    <div>
                        <ul className="flex space-x-6 text-gray-600">
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">
                            <FaGithub size={20} onClick={()=>rota.push('#')}/>
                            </li>
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">
                            <FaDiscord size={20} onClick={()=>rota.push('#')}/>
                            </li>
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">
                            <FaWhatsapp  size={20} onClick={()=>rota.push('#')}/> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}