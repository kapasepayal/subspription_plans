import data from '../Info.json'

function Card( {val}) {
    console.log(val)
    return (
       
         <div className='  grid mx-0 xs:mx-28 sm:ml-10 sm-mx-10 sm:grid-cols-2 md:grid-cols-2 md:ml-20 md:mx-20  lg:grid-cols-3 xl:grid-cols-4     '>
        {/* //  <div className='  grid  sm:static sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 text-center    '> */}
            
            {
                data.map((plans, index) => (
                    <div  key={index} className=" w-64 ml-8  mb-2 p-3  border-2  rounded-lg   hover:border-blue-600 shadow-md transition-transform transform hover:scale-105
                                         md:ml-10 sm:p-4 md:12  sm:mb-4 md:mr-10 md:mb-5 xl:w-[18rem] lg:p-5 lg:mb-5">


                        <div  className="text-[18px] pb-2 font-serif text-2xl font-bold text-center 
                        sm:text-[18px] sm:pb-3
                        md:text-[20px] md:pb-4
                        lg:text-[22px] lg:pb-4
                        xl:text-[24px] xl:pb-5">

                            <h1>{plans.name}</h1>
                            <h1> <span className='font-sans'>{val==true ? plans.price1: plans.price2}</span> <span className="text-[13px] from-neutral-100 ">/year</span></h1>

                        </div>

                        <div className='text-center'>

                            <ul className=" mt-2 ml-8 mb-8   font-serif text-[15px] h-32  text-left  
                             sm:text-[14px] sm:h-40 sm:mb-2
                             md:text-[16px] md:h-44 md:mb-4
                             lg:text-[17px] lg:h-52 lg:mb-2
                             xl:text-[17px] xl:h-64 xl:text-center">
                                {
                                    plans.features.map((feature, i) => (
                                        <li key={i} className='flex '>
                                             <span className="w-3 h-3 flex items-center justify-center bg-blue-500
                                              text-white rounded-full text-[8px] font-bold mr-2 mt-2"> ✔ </span>
                                             <span className='text-left'>{feature}</span>
                                            </li>
                                    ))
                                }
                            </ul>

                            <button className="m-3 px-4 py-2 w-28 bg-blue-700 text-white rounded-lg hover:bg-black
                                                sm:w-32 md:w-36 md:mx-4 lg:w-48 lx:pb-5">
                                Explore
                            </button>
                        </div>
                    </div>
                ))
            }
        <div>
  </div>
</div>

    )
}

export default Card;