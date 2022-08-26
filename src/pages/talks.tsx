import { useState, useEffect } from "react";
import Link from 'next/link'
import Header from '../components/Header.js'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

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

  const talks = [
    {
      "id": "goodnews2020",
      "title": "And Now ... The Good News",      
      "description": "Blah blah blah",
      "url": "http://youtube.com",      
      "location": "Wellington, New Zealand",
      "year": "2020"
    },
    {
      "id": "twitter2019",
      "title": "Disinformation at Twitter: An Inside Story",      
      "description": "Blah blah blah",
      "url": "http://youtube.com",      
      "location": "Seattle, USA",
      "year": "2019"
    },
    {
      "id": "relevant2011",
      "title": "Make It Relevant",      
      "description": "Blah blah blah",
      "url": "http://youtube.com",      
      "location": "Seattle, USA",
      "year": "2011"
    },
    {
      "id": "designwhileshipping2015",
      "title": "Design While Shipping",      
      "description": "Blah blah blah",
      "url": "http://youtube.com",      
      "location": "Seattle, USA",
      "year": "2015"
    },
    {
      "id": "twitter2017",
      "title": "Designing with Abuse in Mind",
      "description": "Blah blah blah",
      "url": "http://youtube.com",      
      "location": "Moscow, Russia",
      "year": "2017"
    }      
  ]
  

  const children = talks.map(talk => 
    <div>
       <Talk
        id={talk.id}  
        title={talk.title}  
        description={talk.description}  
        url={talk.url}  
        location={talk.location}  
        year={talk.year}
        />
    </div>
    ); 
    return (
    <section className="flex justify-center w-screen pt-8 mx-auto mt-8 bg-blue-50 py-96">
      
      <div className="justify-center w-1/2 p-2"> 
      <div className="p-2">     

          <div className="flex">
            <div className="font-bold grow">UXNZ <span className="font-light text-gray-500">Wellington</span></div>
            <div className="items-end font-light font-medium text-gray-500">2020</div>
          </div>

          <div className="mb-0">              
                <img src="/goodnews.png" className="w-full rounded-md" />
          </div>
          
          
          <p className="pt-2 font-light">
            Designers are taught to figure out what the
            data says, try something, then iterate. 
            It turns out this works really well, even at scale!
          </p>
      </div>
      <div className=""> 
          <div className="grid mt-4 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">              
                
                <div>
                <div className="flex">
                  <div className="font-bold grow">IXDA <span className="font-light text-gray-500">Seattle</span></div>
                  <div className="items-end font-light font-medium text-gray-500">2019</div>
                </div>
                <img src="/abuse.png" className="w-full rounded-md" />
                <p className="pt-2 font-light">
                  Tough lessons learned leading the abuse design team at Twitter.
                </p>
                </div>

                <div>
                <div className="flex">
                  <div className="font-bold grow">SxSW <span className="font-light text-gray-500">Austin</span></div>
                  <div className="items-end font-light font-medium text-gray-500">2013</div>
                </div>
                <img src="/greatdesign.png" className="w-full rounded-md" />
                <p className="pt-2 font-light">The best design doesn't always win.
                Here's what to do about it.
                </p>
                </div>
          </div>
        </div>
      </div>
    </section>
    ); 
  }


export function Talk({id, title, description, url, location, year}) { 

  return (
      <div className="my-4"><span className="text-lg font-bold">{title}</span> <br />{location}</div>
  )
}