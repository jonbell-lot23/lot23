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
    
    <section
      className="mt-8 bg-blue-50 WorkSection WorkSection--fullBleed">

      <div>
        <h2 className="mt-2 mb-0 text-lg">My Design Trilogy</h2>
        
        <div className="flex space-x-3">
          <div className="w-48"><img src="/book1.png" /></div>
          <div className="w-48"><img src="/book2.png" /></div>
          <div className="w-48"><img src="/book3.png" /></div>
        </div>

        <h2 className="mt-4 mb-0 text-lg">Other books</h2>
        
        <div className="flex space-x-3">
        <div className="w-48"><img src="/bedtime.png" /></div>
        <div className="w-48"><img src="/42and21.png" /></div>
        <div className="w-48"><img src="/plebe.png" /></div>
        </div>

    
      </div>
    </section>

    
      
    )
  }