
import { useState, useEffect } from "react";
import Link from 'next/link'
import Header from '../components/Header.js'

export default function Home() {
  return (   
    <>
    <div className="w-56 mx-auto mt-8 sm:w-80 sm:px-0">    
      <Header />
    </div>    

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
      <section
      className="mt-8 WorkSection WorkSection--fullBleed bg-[url('/space.png')]">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="rounded-md WorkSection-content ">
              <h3>Talks</h3>
              <p>
                {children}
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