import { useEffect, useState } from "react";
import { Titulo } from "./componentes/Titulo.jsx";
import { Input } from "./componentes/Input.jsx";
import { Buton } from "./componentes/Buton.jsx";

function App() {
  const [cantidad, setCantidad] = useState(30000);
  const [meses, setMeses] = useState("6 Meses");
  const [total, setTotal] = useState(0);
  const [mensualidad, setMensualidad] = useState(0);

  function pagoMensual(meses, cantidad) {
    let total = 0;

    if (meses == "6 Meses") {
      total = Math.floor(cantidad * 1.29);
    } else if (meses == "12 Meses") {
      total = Math.floor(cantidad * 1.21);
    } else if (meses == "24 Meses") {
      total = Math.floor(cantidad * 1.15);
    }

    return total;
  }

  useEffect(() => {
    const pagoDeMes = pagoMensual(meses, cantidad);
    setTotal(pagoDeMes);
  }, [cantidad, meses]);
  useEffect(() => {
    setMensualidad(Math.floor(total / parseInt(meses)));
  }, [total]);

  function HandleMeses(valor) {
    setMeses(valor);
  }

  const min = 0;
  const max = 30000;
  const step = 100;
  function seleccionarCantidad(monto) {
    setCantidad(Number(monto));
  }

  function HandleMenos() {
    if (cantidad <= step) {
      alert("Limite excedido");
      return;
    }
    setCantidad(cantidad - step);
  }
  function HandleMas() {
    if (cantidad == max) {
      alert("Limite excedido");
      return;
    }
    setCantidad(cantidad + step);
  }

  return (
    <div
      className="bg-stone-100 flex w-full h-screen items-center justify-center text font-serif 
    "
    >
      <div
        className="bg-stone-100 flex flex-col w-96 h-96 items-center rounded-lg outline-0
         shadow-lg shadow-stone-500/50
      hover:rounded-lg hover:border-4 hover:border-bg-cyan-500 transition-all duration-500 ease-in-out"
      >
        <Titulo />

        <div className="flex justify-between w-full m-2 min-h-14 items-center p-2.5">
          <Buton
            name={"-"}
            funcion={() => {
              HandleMenos();
            }}
          />
          <Buton
            name={"+"}
            funcion={() => {
              HandleMas();
            }}
          />
        </div>

        <Input
          value={cantidad}
          min={min}
          max={max}
          step={step}
          funcion={(e) => {
            seleccionarCantidad(e.target.value);
          }}
        />

        <h1 className="text-4xl my-2 hover:rounded-xl hover:border-1 hover:bg-sky-100 transition-all duration-500 ease-in">
          $ {cantidad}
        </h1>
        <h1 className="">
          Elige un <span className="">Plazo</span> a pagar!
        </h1>

        <select
          name="dropDown"
          className="text-lg bg-stone-300 w-2xs text px-2"
          onChange={(e) => {
            HandleMeses(e.target.value);
          }}
        >
          <option value="6 Meses">6 Meses </option>
          <option value="12 Meses">12 Meses </option>
          <option value="24 Meses">24 Meses </option>
        </select>

        <div className=" flex flex-col text-lg justify-center items-center">
          <h1 className="text-lg">Resumen de pago</h1>
          <h1>{meses} </h1>
          <h1 className="text-lg"> Pago mensual: {mensualidad} </h1>
          <h1> Pago Total: {total} </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
