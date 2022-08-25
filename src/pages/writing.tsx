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
        <Image src="/talks.png" layout="fill" />
        <Image src="/talks_highlight.png" layout="fill" />

        <Image src="/writing.png" layout="fill" />
        <Image src="/writing_highlight.png" layout="fill" />

        <Image src="/work.png" layout="fill" />
        <Image src="/work_highlight.png" layout="fill" />

        <Image src="/projects.png" layout="fill" />
        <Image src="/projects_highlight.png" layout="fill" />
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


