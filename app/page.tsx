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
            <div className={s.converted}>{convertido}</div>
          </>
        )}

        <div className={s.container}>
          <form>
            <label htmlFor="text">Text</label>
            <input
              id="text"
              placeholder="Text to be converted"
              onChange={({ target }) => setInput(target.value)}
              maxLength={27}
            />
          </form>
          <div className={s.processing}>{processo}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
