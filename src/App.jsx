import { useState } from "react"
import Card from "./Card"

export default function App() {
  const [istrue, setistrue] = useState(true)

  const set = () => {
    setistrue(!istrue)
  }
  console.log(istrue)
  return (
        <div className="">
            <div className=" text-center font-serif  my-3 p-4">
                 <h2 className="  text-xl py-2  
                 sm:text-xl
                 md:text-2xl
                 lg:text-[22px] 
                 xl:text-[26px] ">
                 Plans & Pricing</h2>

                 <h1 className=" py-2 font-serif font-bold  text-[16px] 
                 sm:text-xl 
                 md:text-2xl 
                 lg:text-[26px] 
                 xl:text-3xl ">
                   Choose the Right Plan for Your Success!</h1>

        <h5 className=" hidden py-2 
        sm:text-[10px] sm:block
        md:text-[12px] md:block
        lg:text-[14px] lg:block
        xl:text-[16px] xl:block "> 
          Unlock Your Dream Job with AI-Powered Preparation – Tailored for Every Aspirant. <br /> Explore Our Plans & Start Your Journey Today!"</h5>
        <div  >

          <span className="mt-6 font-serif mr-4 text-[14px] lg:text-[16px] xl:text-[18px]">₹ INR</span>

          <label  htmlFor="check" className=" bg-blue-600  cursor-pointer relative px-7 top-0 pr-5 py-1 w-26 lg:h-7 rounded-full mt-8">
            <input onClick={set} type="checkbox" id="check" className="sr-only peer" />
            <span className=" w-[40%] h-[66%] bg-white absolute rounded-full left-1 top-1 px-1 peer-checked:bg-white
              peer-checked:left-6 " ></span>
          </label>

          <span className="mt-6 font-serif ml-4 text-[14px] lg:text-[16px] xl:text-[18px]">$ USD</span>
        </div>
      </div>

      <Card val={istrue}/> 
    </div>
  )
}