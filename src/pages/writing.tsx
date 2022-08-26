import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Header from '../components/Header.js'
import Head from 'next/head'

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {

  return (   
    <>
    <Head>
    <div className="hidden">
        <img src="/talks.png" />
        <img src="/talks_highlight.png" />

        <img src="/writing.png" />
        <img src="/writing_highlight.png" />

        <img src="/work.png" />
        <img src="/work_highlight.png" />

        <img src="/projects.png" />
        <img src="/projects_highlight.png" />
      </div>
    </Head>
    <Header />
    <Body />
    </> 
  );
}



export function Body() {
  return (
    

    <section className="flex justify-center w-screen pt-8 mx-auto mt-8 bg-blue-50 py-96">

      <div className="justify-center w-1/2">                
        <div className="grid mt-4 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">              
              
              <div>
                <img src="/book1.png" className="w-full rounded-md" />
                <div className="pt-2">Book one of a design trilogy. Focused on product design.</div>
              </div> 

              <div>
                <img src="/book2.png" className="w-full rounded-md" />
                <div className="pt-2">Book two was about listening well and leading teams.</div>
              </div> 

              <div>
                <img src="/book3.png" className="w-full rounded-md" />
                <div className="pt-2">Book three is about strategy and long-term thinking.</div>
              </div>
        </div>   
<br />
        <div className="grid mt-8 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">              
              
              <div>
                <img src="/bedtime.png" className="w-full rounded-md" />
                <div className="pt-2">Bedtime Stories is a book I wrote for my three kids ❤️</div>
              </div>  
              <div>
                <img src="/42and21.png" className="w-full rounded-md" />
                <div className="pt-2">42 & 21 is full of life advice for my eldest son.</div>
              </div>
              <div>
                <img src="/plebe.png" className="w-full rounded-md" />
                <div className="pt-2">Book three is about strategy and long-term thinking.</div>
              </div>  
        </div>   

      </div>

    </section>
  
    )
  }


