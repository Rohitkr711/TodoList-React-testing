import InputBox from "./Component/InputBox/InputBox";

function App() {
  return (
    <>
      <div className="flex flex-col justify items-center border-2 h-lvh gap-6">
        <h1 className="my-5 font-bold text-2xl">TODO APP</h1>
        <InputBox />
      </div>
    </>
  );
}
export default App;
