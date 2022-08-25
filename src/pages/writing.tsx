import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Header from '../components/Header.js'

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {

  return (   
    <div>
    <div className="w-56 mx-auto mt-8 sm:w-80 sm:px-0">    
      <Header />
    </div>
    

    <Body />
    </div> 
  );
}



export function Body() {
  return (
    

    <section className="flex justify-center w-screen pt-8 mx-auto mt-8 bg-blue-50 py-96">

      <div className="justify-center w-1/2">                
        <div className="grid mt-4 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">              
              <img src="/book1.png" className="w-full rounded-md" />
              <img src="/book2.png" className="w-full rounded-md" />
              <img src="/book3.png" className="w-full rounded-md" />
        </div>   
<br />
        <div className="grid mt-8 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">              
              <img src="/bedtime.png" className="w-full rounded-md" />
              <img src="/42and21.png" className="w-full rounded-md" />
              <img src="/plebe.png" className="w-full rounded-md" />
        </div>   

      </div>

    </section>
  
    )
  }


