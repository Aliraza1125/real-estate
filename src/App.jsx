import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="items-stretch bg-black h-[50%]  justify-around">
      <h1 className=" text-3xl font-bold underline">Hello world!</h1>
      <h2 className=" text-3xl font-bold underline">Hello world2</h2>
      <h2 className=" text-3xl font-bold underline">Hello world2</h2>
      <h2 className=" text-3xl font-bold underline">Hello world2</h2>
      <h2 className=" text-3xl font-bold underline">Hello world2</h2>
      <h2 className=" text-3xl font-bold underline">Hello world2</h2>
      
      
    </div>
     
    </>
  );
}

export default App;
