"use client";

import Botao from "@/src/components/botao/botao";
import { useEffect, useState } from "react";

export default function Formulario() {
    const [titulo, setTitulo] = useState<string>("")
    const [question, setQuestion] = useState<string>("")

    
    return(
        <form action="post" className="max-w-4xl mx-auto py-10 px-4">
        <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <section className="space-y-6">
        <div className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-500">Want to send to us a question?</h2>
        <br />
        <input 
        className="w-96 px-4 py-2 text-gray-100 bg-blue-500 rounded-md 
        transition-all duration-300 ease-in-out 
        focus:ring-2 focus:ring-blue-300 focus:outline-none 
        hover:bg-blue-600 placeholder-gray-300"
        type="text"
        placeholder="Digite a pergunta"
        value={question}
        onChange={(evento)=>setQuestion(evento.target.value)}
        />
        <br />
        <br />
        <input 
        className="w-96 px-4 py-2 text-gray-100 bg-blue-500 rounded-md 
        transition-all duration-300 ease-in-out 
        focus:ring-2 focus:ring-blue-300 focus:outline-none 
        hover:bg-blue-600 placeholder-gray-300"
        type="text"
        placeholder="Digite a pergunta"
        value={titulo}
        onChange={(evento)=>setTitulo(evento.target.value)}
        />
        <br />
        <br />
        <Botao
        type={'submit'}
        >
            Enviar
        </Botao>
        </div>
        </section>
        </div>
        </form>
    )
}