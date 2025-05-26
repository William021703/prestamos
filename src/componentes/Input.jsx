export function Input({ funcion, value, min, max, step }) {
  return (
    <div className=" flex w-full px-4 my-2 h-8 justify-center items-center bg-green-400">
      <input
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={funcion}
        className="w-full active:caret-amber-500"
        type="range"
      />
    </div>
  );
}
