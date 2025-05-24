export function Input({ funcion, value, min, max, step }) {
  return (
    <div>
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
