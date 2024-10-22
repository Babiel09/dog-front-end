import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { PiDogBold } from "react-icons/pi";


export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="hover:text-blue-500 transition-colors cursor-pointer">        
                    <h1 className="text-4xl font-bold text-blue-500">Dog Hub <PiDogBold size={44}/></h1>
                    </div>
                <div className="font-bold text-blue-500">
                    <div>
                        <ul className="flex space-x-6 text-gray-600">
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">
                            <FaGithub size={20}/>
                            </li>
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">
                            <FaDiscord size={20}/>
                            </li>
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">
                            <FaWhatsapp  size={20}/> 
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </footer>
  );
}
