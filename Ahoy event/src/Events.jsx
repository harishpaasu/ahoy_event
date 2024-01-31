import React from 'react'

const Events = () => {
 
 
    return (
    <div>
<body className="p-10 " >
  <section className=" rounded-2xl  p-5">
    <div className="container  mx-auto">
      <div className="flex">
        <a href="app.jsx" className="text-red-400 text-lg font-semibold font-['Poppins'] m-2 ">Ahoy </a>
        <div className="ml-auto" ><ul className="  flex  py-2 ">
       <button className="lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></button>

          <li> <a href="" className="text-black text-base hidden lg:block px-5  font-normal font-['Poppins'] ">Events </a> </li>
          <li> <a href="" className="text-black text-base hidden lg:block px-5  font-normal font-['Poppins']">community </a></li>
          <li> <a href="" className="text-black text-base hidden lg:block px-5  font-normal font-['Poppins']">profile </a></li>
        </ul> </div>
        
        <a href="" className=" ml-auto w-[119px]  bg-red-400 rounded-[20px] justify-center items-center inline-flex text-white text-base font-normal font-['Poppins']">connect</a>
        
      </div>
      <div className="lg:hidden mt-2 ml-1" >
        <ul ><li> <a href="" className="text-black text-base   px-2  font-normal font-['Poppins'] ">Events </a> </li>
          <li> <a href="" className="text-black text-base   px-2  font-normal font-['Poppins']">community </a></li>
          <li> <a href="" className="text-black text-base   px-2  font-normal font-['Poppins']">profile </a></li>
          </ul></div>
    </div>

  </section>
  <section className="flex mt-5 ml-3">
    <div  className="text-black text-[40px] font-semibold font-['Poppins']">Events</div>
    <a href="" className=" ml-auto w-[153px] h-10 px-[25px] py-2 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex
  text-white text-base font-normal font-['Poppins']">Create Event</a>

  
  </section>
  <div className="lg:flex mt-10 p-2">
    <div className="w-1/2 ml-5 ">
    <img className="w-[495px] h-[200px] rounded-tl-[15px] rounded-tr-[15px]" src="./assets/starkcon.jpg" /> 

    <div className="w-[496px] h-[200px] bg-white rounded-bl-[15px] rounded-br-[15px] border border-black p-5">
    <div className="text-black text-[26px] font-semibold font-['Poppins']">StarkCon IIT Madras</div>
    <div className="text-red-400 text-base font-normal font-['Poppins']">IITM Research Park</div>
    <div className="w-[330px] text-black text-base font-normal font-['Poppins']">The future of Web3, The StarkWare & ZKX Community building in Web3.</div>
    
    <div className="flex"> <div className="w-[30px] h-[30px] bg-red-400 rounded-full border border-black" />
    <a href="" className=" ml-auto  text-black text-base font-normal font-['Poppins'] underline ">Mangae Event</a></div>
    </div>
    </div >
   

    <div className="w-1/2 ml-5 ">
    <img className="w-[495px] h-[200px] rounded-tl-[15px] rounded-tr-[15px]" src="./assets/starkcon.jpg" /> 

    <div className="w-[496px] h-[200px] bg-white rounded-bl-[15px] rounded-br-[15px] border border-black p-5">
    <div className="text-black text-[26px] font-semibold font-['Poppins']">StarkCon IIT Madras</div>
    <div className="text-red-400 text-base font-normal font-['Poppins']">IITM Research Park</div>
    <div className="w-[330px] text-black text-base font-normal font-['Poppins']">The future of Web3, The StarkWare & ZKX Community building in Web3.</div>
    
    <div className="flex"> <div className="w-[30px] h-[30px] bg-red-400 rounded-full border border-black" />
    <a href="" className=" ml-auto  text-black text-base font-normal font-['Poppins'] underline ">Mangae Event</a></div>
    </div>
    </div >
    


    </div>
  
    
    
</body>
</div>
  )
}

export default Events