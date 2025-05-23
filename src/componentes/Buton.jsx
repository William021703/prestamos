import "./buton.css";
export function Buton({ funcion, name }) {
  return (
    <button onClick={funcion} className="buton">
      {name}
    </button>
  );
}
