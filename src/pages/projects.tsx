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
    <div className="grid w-1/3 grid-cols-2 mx-auto mt-12 gap-x-4 gap-y-12 ">
      <div className="w-48 h-48 p-3 bg-gray-100 col">
        Design Play
      </div>
      <div className="w-48 h-48 p-3 bg-gray-100 col">
        The Long Talk
      </div>
      <div className="w-48 h-48 p-3 bg-gray-100 col">
        UX Launchpad
      </div>
      <div className="w-48 h-48 p-3 bg-gray-100 col">
        Art Bot
      </div>
      <div className="w-48 h-48 p-3 bg-gray-100 col">
        Enthusiastic Panther
      </div>
      <div className="w-48 h-48 p-3 bg-gray-100 col">
        He Wrote Go
      </div>
    </div>
    )
  }