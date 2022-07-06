import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [convertido, setConvertido] = React.useState(String);
  const [input, setInput] = React.useState(String);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (null !== inputRef.current) {
      setConvertido(inputRef.current.value);
    }
  }, [input]);

  React.useEffect(() => {
    const inputElement = inputRef.current as HTMLInputElement;
  }, []);

  return (
    <>
      <h1>{convertido}</h1>
      <h1>{input}</h1>
      <div className="mx-auto mb-auto w-full max-w-xs">
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Texto
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              ref={inputRef}
              placeholder="Texto a ser convertido"
              onChange={({ target }) => setInput(target.value)}
            />
          </div>
        </form>
        {/* <p className="text-center text-xs text-gray-500">&copy;2022</p> */}
      </div>
    </>
  );
};

export default App;
