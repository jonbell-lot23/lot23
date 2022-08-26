import io from "socket.io-client";
import { useState, useEffect } from "react";
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

        <img src="/goodnews.png" />
        <img src="/abuse.png" />
        <img src="/greatdesign.png" />

        <img src="/book1.png" />
        <img src="/book2.png" />
        <img src="/book3.png" />
        <img src="/bedtime.png" />
        <img src="/42and21.png" />
        <img src="/plebe.png" />          
      </div>
      </Head>
      <div className="w-56 mx-auto mt-8 sm:w-80 sm:px-0">  
        <Header />
        <Body />
      </div>
    </> 
  );
}

export function Body() {
  return (
    <div className="grid mt-48 place-items-center">
      <div className="text-center">
      <p className="font-semibold">Hello! I'm Jon Bell.</p>
              <p>
                I'm a product designer that loves to write, code, draw, teach,
                lead teams, and learn new things.
              </p>

              <p>
                My email is 
                 <a href="mailto:jb@lot23.com" className="pl-1">jb@lot23.com</a>. <br />Thanks for
                stopping by!
              </p>
      </div>
    </div>
    )
  }