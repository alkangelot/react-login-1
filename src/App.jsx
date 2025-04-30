import Form from "./componentes/Form";

function App() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F2F2F2]">
          <Form />
        </div>
        <div className="hidden lg:flex  relative h-full w-1/2 bg-gray-200 items-center justify-center">
          <div className="h-60 w-60 bg-gradient-to-tr  from-violet-500 to-pink-500  rounded-full animate-bounce" />
          <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0" />
        </div>
      </div>
    </>
  );
}

export default App;
