import { useState } from "react";

const Calculator = () => {
  const [displayText, setDisplayText] = useState("");
  const [result, setResult] = useState("")

  const calc = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(displayText));
  }

  return (
    <div className="mx-auto w-56 rounded-3xl border border-gray-200 shadow-md px-3 py-10 bg-gray-100 mt-10">
      <div className="bg-white p-1">
        <section className="text-sm font-semibold text-right font-nunito px-1 h-7 flex items-center justify-end">
          {displayText}
        </section>
        <section className="text-3xl font-semibold text-right font-nunito px-1 h-12 flex items-center justify-end">
          {result}
        </section>
        <section className="grid grid-rows-5 pt-3">
          <div className="h-12 p-1 grid grid-cols-4 gap-2 font-roboto">
            <div className="flex justify-center"><button id="C" onClick={(e) => {setDisplayText(""); setResult(0)}} className="shadow focus:shadow-none w-full h-full bg-yellow-200 rounded-md border-yellow-300 text-yellow-600">C</button></div>
            <div className="flex justify-center"><button id="Del" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-yellow-200 rounded-md border-yellow-300 text-yellow-600">Del</button></div>
            <div className="flex justify-center"><button id="%" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-yellow-200 rounded-md border-yellow-300 text-yellow-600">%</button></div>
            <div className="flex justify-center"><button id="/" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-yellow-200 rounded-md border-yellow-300 text-yellow-600">/</button></div>
          </div>
          <div className="p-1 grid grid-cols-4 gap-2 font-roboto">
            <div className="flex justify-center"><button id="7" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">7</button></div>
            <div className="flex justify-center"><button id="8" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">8</button></div>
            <div className="flex justify-center"><button id="9" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">9</button></div>
            <div className="flex justify-center"><button id="*" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-yellow-200 rounded-md border-yellow-300 text-yellow-600">*</button></div>
          </div>
          <div className="p-1 grid grid-cols-4 gap-2 font-roboto">
            <div className="flex justify-center"><button id="4" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">4</button></div>
            <div className="flex justify-center"><button id="5" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">5</button></div>
            <div className="flex justify-center"><button id="6" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">6</button></div>
            <div className="flex justify-center"><button id="+" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-yellow-200 rounded-md border-yellow-300 text-yellow-600">+</button></div>
          </div>
          <div className="p-1 grid grid-cols-4 gap-2 font-roboto">
            <div className="flex justify-center"><button id="1" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">1</button></div>
            <div className="flex justify-center"><button id="2" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">2</button></div>
            <div className="flex justify-center"><button id="3" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">3</button></div>
            <div className="flex justify-center"><button id="-" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-yellow-200 rounded-md border-yellow-300 text-yellow-600">-</button></div>
          </div>
          <div className="p-1 grid grid-cols-4 gap-2 font-roboto">
            <div className="flex justify-center col-span-2"><button id="0" onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">0</button></div>
            <div className="flex justify-center"><button id="." onClick={(e) => setDisplayText(prev => prev + e.target.id)} className="shadow focus:shadow-none w-full h-full bg-gray-200 font-semibold rounded-md border-gray-300 text-black">.</button></div>
            <div className="flex justify-center"><button id="=" onClick={() => calc()} className="shadow focus:shadow-none w-full h-full bg-yellow-400 rounded-md border-yellow-500 text-yellow-600">=</button></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Calculator;