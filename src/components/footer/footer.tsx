"use client"

import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { PiDogBold } from "react-icons/pi";
import {useRouter} from "next/navigation";
import Link from 'next/link'

export default function Footer() {
  const rota = useRouter()
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="hover:text-blue-500 transition-colors cursor-pointer">        
                    <h1 className="text-4xl font-bold text-blue-500">Dog Hub <PiDogBold size={44} onClick={()=>rota.push('#')}/></h1>
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
                    <br />
                    <div>
                      <Link href='/questions' target="blanck">See our users questions</Link>
                    </div>
                </div>
        </div>
    </footer>
  );
}
