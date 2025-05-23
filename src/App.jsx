import { useEffect, useState } from "react";
import { Titulo } from "./componentes/Titulo.jsx";
import { Input } from "./componentes/Input.jsx";
import { Buton } from "./componentes/Buton.jsx";

import "./App.css";

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
    setMensualidad(Math.floor(total / parseInt(meses)));
  }, [cantidad, meses]);

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
    <div className="container">
      <Titulo />
      <div className="btn">
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
      <h1 className="cantidad">$ {cantidad} </h1>
      <h1>
        Elige un <span className="plazo">Plazo</span> a pagar!
      </h1>

      <div>
        <select
          name="dropDown"
          className="dropDown"
          onChange={(e) => {
            HandleMeses(e.target.value);
          }}
        >
          <option value="6 Meses">6 Meses </option>
          <option value="12 Meses">12 Meses </option>
          <option value="24 Meses">24 Meses </option>
        </select>
      </div>
      <div className="resumen">
        <h1>Resumen de pago</h1>
        <h1>{meses} </h1>
        <h1> Pago mensual: {mensualidad} </h1>
        <h1> Pago Total: {total} </h1>
      </div>
    </div>
  );
}

export default App;
