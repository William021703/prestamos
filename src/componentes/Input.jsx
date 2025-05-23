import "./Input.css";
export function Input({ funcion, value, min, max, step }) {
  return (
    <div className="container">
      <input
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={funcion}
        className="input"
        type="range"
      />
      ;
    </div>
  );
}
