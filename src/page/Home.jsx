import Nav from "../components/Nav"
import TollBar from "../components/Toll_bar"
import React, {useState} from "react"

export default function Home() {
  
  const [ul, setUl] = useState(false)
  const [value, setValue] = useState(1)
  

  function SETul() {
    setUl((n) => !n)
  }
  
  return (
    <>
    <Nav />

    <div className="w-full h-auto bg-blue-50 overflow-hidden">


      <div className="w-full flex justify-center items-center py-2">
        <input type="text" name="" id="" placeholder="cari makanan.." className="p-2 border bg-gray-400 rounded-md outline-none "/>
        <i className="fa-solid fa-search p-3 bg-orange-500 rounded-md ml-2"></i>
        <i className="py-2 px-3 font-bold text-white rounded-md bg-gray-500 ml-2">></i>
      </div>

      <div className="w-full h-[80vh] overflow-scroll flex flex-wrap justify-evenly">

        <div
         className="w-48 h-60 bg-gray-300 rounded-md overflow-hidden m-1 p-1">
          <div className="w-full h-2/3 bg-gray-600 rounded-md bg-[url('../../public/img/makanan2.jpg')] bg-cover"></div>
          <h1 className="font-bold text-1xl ml-1">judul makanan</h1>
          <div className="flex justify-start items-start">
            <p className="text-[13px] ml-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-shopping-cart p-3 rounded-md bg-orange-500"></i>
          </div>
        </div>

      </div>

<div className={`${ul ? "translate-x-[0%]" : "translate-x-[100%]"} transform transition w-[100vw] h-[100vh] backdrop-blur absolute top-0 right-0 z-50 flex justify-end`}>
      <div className="w-[70vw] h-[100vh] bg-white border-l-2 border-black">
        <div className="w-full flex justify-end p-3 text-2xl">
          <i 
          onClick={SETul}
           className="fa-solid fa-close"></i>
        </div>
        <div className="w-full h-full border">

          <div className="w-full flex items-center justify-evenly border">
           <div className="w-20 h-20 bg-[url('../../public/img/makanan3.jpg')] bg-cover rounded-md"></div>
           <p className="">Lorem ipsum dolor sit amet.</p>
           <div className="text-2xl font-bold">
            <i onClick={() => setValue((v) => v - 1)} className="p-2 bg-gray-500 rounded-md">-</i>
            <i className="">{value}</i>
            <i onClick={() => setValue((v) => v + 1)} className="p-2 bg-gray-500 rounded-md">+</i>
           </div>
          </div>
          
        </div>
      </div>
</div>


    </div>

    <TollBar SETul={SETul}/>
    </>
  )
}