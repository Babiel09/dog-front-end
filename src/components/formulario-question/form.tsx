"use client";

import Botao from "@/src/components/botao/botao";
import { FormEvent, useEffect, useState } from "react";
import { http } from "../http/http";
import { QuestionProps } from "@/src/utils/questions";

export default function Formulario() {
    const [questionQuestion, setQuestion] = useState<string>("")
    const [titleQuestiom, setTitle] = useState<string>("")


    const handleEnviarForm = (evento:FormEvent<HTMLFormElement>) =>{
        http.post<QuestionProps>('/question',{
            title: titleQuestiom,
            question: questionQuestion
        })
        .then(()=>{
            alert("Question is sending")
        })
        .catch((erro)=>{
            alert(`Ocorreu um erro:${erro}` )
        })
        window.location.reload()
    }

    return(
        <form className="max-w-4xl mx-auto py-10 px-4" onSubmit={handleEnviarForm}> 
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
        placeholder="Digite o Titulo"
        value={titleQuestiom}
        onChange={(evento)=>setTitle(evento.target.value)} 
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
        value={questionQuestion}
        onChange={(evento)=>setQuestion(evento.target.value)}
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