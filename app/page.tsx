"use client";
import { useState, useEffect } from "react";
import { NextPage } from "next";
import { removerAcentos, alfabeto } from "../lib";
import s from "../styles/Page.module.scss";

const Home: NextPage = () => {
  const [convertido, setConvertido] = useState(Number);
  const [input, setInput] = useState(String);
  const [processo, setProcesso] = useState(String);

  useEffect(() => {
    let preConvertido = 0;
    let preProcesso = "";
    setProcesso("");
    console.log(input);
    for (let i = 0; i < input.length; i++) {
      const letra = removerAcentos(input.substring(i, i + 1).toLowerCase());
      if (alfabeto.includes(letra)) {
        preConvertido += alfabeto.indexOf(letra);
        setConvertido((resultado) => resultado);
        preProcesso += ` + ${alfabeto.indexOf(letra)}`;
      }
    }
    setProcesso(preProcesso);
    setConvertido(preConvertido);
  }, [input]);

  return (
    <>
      <div>
        <h1 className={s.title}>A1Z26</h1>
        {convertido > 0 && (
          <>
            <div className="art-deco limenine mx-auto my-6 p-8 text-6xl text-white shadow-2xl">
              {convertido}
            </div>
          </>
        )}

        <div className="poiret-one mx-auto mb-auto w-full max-w-xs">
          <form className="art-deco mb-4 rounded-lg bg-black px-12 pt-4 pb-8">
            <label className="block text-4xl text-white" htmlFor="texto">
              Texto
            </label>
            <input
              className="input-box w-full appearance-none border py-2 px-3 leading-tight"
              id="texto"
              placeholder="Texto a ser convertido"
              onChange={({ target }) => setInput(target.value)}
              maxLength={27}
            />
            <div className="limenine mt-6 text-white">{processo}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
