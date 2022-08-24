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
    <div className="grid mt-12 place-items-center">
      <div>
        <h2 className="text-lg">My Design Trilogy</h2>
        
        <div className="flex space-x-3">
          <div className="w-48 h-64 bg-gray-100">book</div>
          <div className="w-48 h-64 bg-gray-100">book</div>
          <div className="w-48 h-64 bg-gray-100">book</div>
        </div>

        <h2 className="mt-12 text-lg">Other books</h2>
        
        <div className="flex space-x-3">
          <div className="w-48 h-64 bg-gray-100">Bedtime stories</div>
          <div className="w-48 h-64 bg-gray-100">Plebe volume one</div>
          <div className="w-48 h-64 bg-gray-100">42 and 21</div>
        </div>

      </div>
    </div>
    )
  }