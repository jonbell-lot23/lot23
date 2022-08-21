import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from 'next/link'

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {

  return (    
    <div className="w-56 mx-auto mt-8 sm:w-80 sm:px-0">    
      <Header />
      <Footer />
    </div>
    
  );
}

export function Header() {
  return (
    <div className="flex flex-wrap space-x-3">
      <Link href="/talks"><a><img src="/talks.png" className="header" /></a></Link>
      <Link href="/writing"><a><img src="/writing.png" className="header" onMouseOver={e => e.currentTarget.src = "writing_highlight.png"} onMouseOut={e => e.currentTarget.src = "writing.png"}/></a></Link>
      <Link href="/projects"><a><img src="/projects_highlight.png" className="header" onMouseOver={e => e.currentTarget.src = "projects_highlight.png"} onMouseOut={e => e.currentTarget.src = "projects.png"}/></a></Link>
      <Link href="/work"><a><img src="/work.png" className="header" onMouseOver={e => e.currentTarget.src = "work_highlight.png"} onMouseOut={e => e.currentTarget.src = "work.png"}/></a></Link>
    </div>
  )
}



export function Footer() {
  return (
    <div className="grid mt-12 place-items-center">
      <div>
        <img src="/hi.png" />
      </div>
    </div>
    )
  }