"use client";
import { FormEvent, useState } from "react";
import Image from 'next/image'
import PIMP from '../../../assets/funny dog.gif'
import Botao from "../botao/botao";

export default function SocialForm() {
  const [mensagem, setMensagem] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const handleSendPost = (event: FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleSendPost}>
      <div className="text-center">
        <h2 className="text-3xl font-bold mt-4 text-gray-100">
          Enjoy with us!
        </h2>
      </div>
      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <section className="space-y-6 text-center">
          <h2 className="text-xl font-semibold text-blue-500">
            Wanna tell us about <strong>your Dog</strong>?
          </h2>
          <input
            className="w-96 px-4 py-2 text-gray-100 bg-blue-500 rounded-md 
        transition-all duration-300 ease-in-out 
        focus:ring-2 focus:ring-blue-300 focus:outline-none 
        hover:bg-blue-600 placeholder-gray-300"
            type="text"
            placeholder="Tell us"
            value={mensagem}
            onChange={(evento) => setMensagem(evento.target.value)}
          />
          <br />
          <h2 className="text-xl font-semibold text-blue-500">
            Wanna share one of <strong>yours Dog</strong> pictures?
          </h2>
          <input
            className="w-96 px-4 py-2 text-gray-100 bg-blue-500 rounded-md cursor-pointer
               transition-all duration-300 ease-in-out 
               focus:ring-2 focus:ring-blue-300 focus:outline-none 
               hover:bg-blue-600 placeholder-gray-300 file:mr-4 file:py-2 file:px-4 
               file:rounded-l-md file:border-0 file:text-white file:bg-blue-700 
               file:hover:bg-blue-800"
            type="file"
            placeholder="Wanna share a pic?"
            value={imagem}
            onChange={(evento) => setImagem(evento.target.value)}
          />
          <br />
          <div>
            <Botao type={"submit"}>Enviar</Botao>
          </div>
        </section>
        <br />
        <br />
        <br />
        <div className="text-center">
          <div className="mt-10 bg-gray-300 shadow-md rounded-lg p-6">
            <div className="space-y-6 text-center">
                <h2 className="text-xl font-semibold text-blue-500">Aqui vai ficar o nome do usuário</h2>
              <div className="bg-gray-300 p-4 rounded-lg">
                <div>

                <Image
                src={PIMP}
                alt="P.I.M.P"
                width={400}
                 className="rounded-3xl border-4 border-blue-500 shadow-lg"
                />
                </div>
                <div className="ml-80">

                <p className="text-gray-600 mt-2">Aqui vai ficar a legenda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
