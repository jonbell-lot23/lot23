import io from "socket.io-client";
import { useState, useEffect } from "react";
import Header from '../components/Header.js'

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {

  return (    
    <div className="w-56 mx-auto mt-8 sm:w-80 sm:px-0">    
      <Header />
      <Body />
    </div>
    
  );
}

export function Body() {
  return (
    <div className="grid mt-12 place-items-center">
      <div>
        <img src="/hi.png" />
      </div>
    </div>
    )
  }