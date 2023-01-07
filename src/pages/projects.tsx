import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header.js";
import Head from "next/head";

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
      <div className="justify-center w-full p-2 sm:w-1/2">
        <div>
          <div className="flex justify-center">
            <div className="w-full mx-2 my-8">
              <div className="py-2 pl-0 text-xl font-medium sm:pl-2 sm:text-md">
                Notable projects
              </div>
              <div className="mx-2 border-b-[1px] border-gray-300"> </div>
            </div>
          </div>
        </div>

        <p className="p-0 pt-2 sm:pl-4 pl-3 sm:pt-4 text-md">
          <h4 className="mb-0 text-sm sm:text-lg">Design Play</h4>A different
          kind of design conference.
        </p>

        <p className="p-0 pt-2 sm:pl-4 pl-3 sm:pt-4 text-md">
          <h4 className="mb-0 text-sm sm:text-lg">The Long Talk</h4>
          An email game for making friends.
        </p>

        <p className="p-0 pt-2 sm:pl-4 pl-3 sm:pt-4 text-md">
          <h4 className="mb-0 text-sm sm:text-lg">UX Launchpad</h4>A design
          bootcamp I founded in 2012
        </p>

        <p className="p-0 pt-2 sm:pl-4 pl-3 sm:pt-4 text-md">
          <h4 className="mb-0 text-sm sm:text-lg">Art Bot</h4>
          One image every hour for a year.
        </p>

        <p className="p-0 pt-2 sm:pl-4 pl-3 sm:pt-4 text-md">
          <h4 className="mb-0 text-sm sm:text-lg">Enthusiastic Panther</h4>A
          made-up band
        </p>

        <p className="p-0 pt-2 sm:pl-4 pl-3 sm:pt-4 text-md">
          <h4 className="mb-0 text-sm sm:text-lg">He Wrote Go</h4>A quarterly
          writing concern
        </p>
      </div>
    </section>
  );
}
