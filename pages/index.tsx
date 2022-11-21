import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { removerAcentos, alfabeto } from "../lib";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  const [convertido, setConvertido] = React.useState(Number);
  const [input, setInput] = React.useState(String);
  const [processo, setProcesso] = React.useState(String);

  React.useEffect(() => {
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
      <Head>
        <title>A1Z26 - O Enigma do Sol Oculto</title>
        <meta
          name="description"
          content="A1Z26 tool to assist 'O Enigma do Sol Oculto' players, convert letters to numbers. Numbering the letters so A=1, Z=26, etc is one of the simplest ways of converting them to numbers."
        />
      </Head>
      <div className="flex h-[100vh] flex-col justify-between">
        <div>
          <h1 className="text-gold poiret-one mt-6 text-center text-5xl shadow-xl">
            A1Z26
          </h1>
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
            {/* <p className="text-center text-xs text-gray-500">&copy;2022</p> */}
          </div>
        </div>
        <div className="flex justify-around">
          <Link href="https://www.bermeo.dev" target="_blank">
            <Image
              src="https://www.bermeo.dev/logo-transparent.svg"
              className="h-16 opacity-10 hover:opacity-100"
              alt="Bermeo Logo"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://github.com/GMBermeo" target="_blank">
            <Image
              src="/logo.svg"
              className="h-32"
              alt="A1Z26 Logo"
              width={128}
              height={128}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/gmbermeo/" target="_blank">
            <Image
              src="/social/linkedin.svg"
              className="h-16 opacity-10 hover:opacity-100"
              alt="Linkedin Logo"
              width={36}
              height={36}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
