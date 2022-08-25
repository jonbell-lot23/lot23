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
      <section className="flex justify-center w-screen h-screen pt-8 mx-auto mt-8 bg-blue-50">

      <div className="justify-center w-1/2">        
        <div className="p-2 mb-6">              
              <img src="/goodnews.png" className="w-full rounded-md" />
        </div>
        <div className="grid mt-4 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">              
              <img src="/abuse.png" className="w-full rounded-md" />
              <img src="/greatdesign.png" className="w-full rounded-md" />
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