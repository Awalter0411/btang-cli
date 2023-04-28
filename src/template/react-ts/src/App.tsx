import { useCountStore } from "./store/count";

function App() {
  const [count, increment] = useCountStore((state) => [
    state.count,
    state.increment,
  ]);
  return (
    <div className="flex justify-center flex-col items-center mt-4">
      <h1 className="text-3xl font-bold underline">react-ts-starter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment} className="bg-slate-500 w-10 h-10">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
