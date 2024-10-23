"use client";
import { useEffect, useState } from "react";
import { QuestionProps } from "../utils/questions";
import { http } from "./http/http";
import Formulario from "./formulario-question/form";



export default function QuestionMain() {
  const [perguntas, setPergunta] = useState<QuestionProps[]>([]);
  useEffect(() => {
    http
      .get<QuestionProps[]>("/question")
      .then((resposta) => {
        setPergunta(resposta.data);
      })
      .catch((erro) => {
        alert(erro);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-400">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-4 text-gray-100 transform">
            Questions
          </h1>
        </div>
        <div className="mt-10 bg-white shadow-md rounded-lg p-6">
          {perguntas.map(({ title, question }, index, key) => (
            <div key={index}>
              <section className="space-y-6">
                <div className="bg-gray-200 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-blue-500">
                    {title}
                  </h2>
                  <p className="text-gray-700 mt-2">{question}</p>
                </div>
              </section>
              <br />
            </div>
          ))}
          <div>
          </div>
        </div>
      </div>
        <Formulario/>
    </div>
  );
}
