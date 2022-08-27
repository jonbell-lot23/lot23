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
    <div className="grid w-1/3 grid-cols-2 mx-auto mt-12 gap-x-4 gap-y-12 ">



      <p className="p-0 pt-2 sm:p-8 sm:pt-4 text-md">
      <h3 className="mb-0 text-xl">Design Play</h3> 
      A different kind of design conference.
      </p>

      <p className="p-0 pt-2 sm:p-8 sm:pt-4 text-md">
      <h3 className="mb-0 text-xl">The Long Talk</h3> 
      An email game for making friends.
      </p>


      <p className="p-0 pt-2 sm:p-8 sm:pt-4 text-md">
      <h3 className="mb-0 text-xl">UX Launchpad</h3> 
      A design bootcamp I founded in 2012
      </p>

      <p className="p-0 pt-2 sm:p-8 sm:pt-4 text-md">
      <h3 className="mb-0 text-xl">Art Bot</h3> 
      One image every hour for a year.
      </p>


      <p className="p-0 pt-2 sm:p-8 sm:pt-4 text-md">
      <h3 className="mb-0 text-xl">Enthusiastic Panther</h3> 
      A made-up band
      </p>

      <p className="p-0 pt-2 sm:p-8 sm:pt-4 text-md">
      <h3 className="mb-0 text-xl">He Wrote Go</h3> 
      A quarterly writing concern
      </p>

    </div>
    )
  }