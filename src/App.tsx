import React from "react";
import removerAcentos from "./Components/RemoverAcentos";
import { alfabeto } from "./Components/Alfabeto";
import "./css/App.css";
import "./css/ArtDeco.css";

const App = () => {
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
    <div className="grid h-[100vh] grid-cols-1 grid-rows-3 content-between">
      <div className="row-span-1">
        <h1 className="text-gold poiret-one mt-6 text-center text-4xl shadow-xl">
          A1Z26
        </h1>
        {convertido && (
          <>
            <div className="art-deco limenine mx-auto my-6 p-8 text-6xl text-white shadow-2xl">
              {convertido}
            </div>
          </>
        )}
      </div>
      <div className="row-span-1">
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
      <div className="row-span-1">
        <a href="https://git.bermeo.dev" target="_blank">
          <img
            src="/logo.svg"
            className="fixed inset-x-0 bottom-4 mx-auto h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default App;
