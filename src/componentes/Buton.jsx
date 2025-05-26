export function Buton({ funcion, name }) {
  return (
    <button
      className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center border border-indigo-600
       hover:bg-blue-700 active:bg-stone-50 active:text-black shadow-md text-3xl transition-all duration-500 linear"
      onClick={funcion}
    >
      {name}
    </button>
  );
}
