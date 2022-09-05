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
    <Header />
    <Body />
    </> 
  );
}



export function Body() {
  return (
    

    <section className="flex justify-center w-screen pt-8 mx-auto mt-8 bg-blue-50 py-96">
    
    
    
    <div className="justify-center p-2 mx-6 sm:w-full md:w-10/12 lg:w-9/12 xl:w-3/4 2xl:w-1/2"> 
               

    <div>
      <div className="flex justify-center">
        <div className="w-4/5 sm:w-full">
          <div className="py-0 pl-0 my-0 font-medium text-md sm:pl-2 sm:text-md"></div>
        </div>  
      </div>
    </div>

    
    <div>
      <div className="flex justify-center">
        <div className="w-full mx-2 mb-8">
          <div className="py-2 pl-0 text-xl font-medium sm:pl-2 sm:text-md">Design teams I've led</div>
          <div className="sm:mx-2 mx-0 border-b-[1px] border-gray-300"> </div>
        </div>  
      </div>
    </div>

        <div className="grid mt-4 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-2 sm:m-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">                                    
              <div className="flex justify-center">
                <div className="w-full mx-2">
                  <div className="flex">
                    <div className="font-medium grow">Replay.io</div>    
                    <div className="items-end font-normal text-gray-500">2020</div>                
                  </div>
                  <img src="/replay.png" className="rounded-md" />
                  <div className="pt-2 text-sm sm:text-md">I'm the founding designer at Replay where we're making a time travelling debugger.</div>
                </div> 
              </div>

              <div className="flex justify-center">
              <div className="w-full mx-2">
                  <div className="flex">
                    <div className="font-medium grow">Twitter</div>
                    <div className="items-end font-normal text-gray-500">2014</div>
                  </div>
                  <img src="/twitter.png" className="rounded-md" />
                  <div className="pt-2 text-sm sm:text-md">I led the design team tasked with battling abuse rampant on Twitter's platform.</div>
                </div> 
              </div>

              <div className="flex justify-center">
                <div className="w-full mx-2">
                  <div className="flex">
                    <div className="font-medium truncate grow">Microsoft Office</div>
                    <div className="items-end font-normal text-gray-500">2013</div>
                  </div>
                  <img src="/office.png" className="rounded-md" />
                  <div className="pt-2 text-sm sm:text-md">The team I led designed the first "univeral" version of Office for mobile + desktop.</div>
                </div> 
              </div>

              <div className="flex justify-center">
                  <div className="w-full mx-2">
                  <div className="flex">
                    <div className="font-medium truncate grow">Windows Phone</div>
                    <div className="items-end font-normal text-gray-500">2011</div>
                  </div>
                  <img src="/microsoft.png" className="rounded-md" />
                  <div className="pt-2 text-sm sm:text-md">I led the apps team on Windows Phone through three major versions.</div>
                </div> 
              </div>

        </div>   


    <div>
      <div className="flex justify-center">
        <div className="w-full mx-2 my-8">
          <div className="py-2 pl-0 text-xl font-medium sm:pl-2 sm:text-md">Selected work</div>
          <div className="mx-0 border-b-[1px] border-gray-300"> </div>
        </div>  
      </div>
    </div>



    <div className="w-full mb-8 sm:mb-48">                                          
        <div className="w-full px-2">
          
          <video preload="auto" className="" autoPlay loop muted>
                  <source src="https://help.twitter.com/content/dam/help-twitter/en/guides/a-safer-twitter/demo-notification-1280x720.mp4" type="video/mp4" width="900" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
          <p className="p-0 pt-2 sm:pt-4 text-md">
          <h3 className="mb-3 text-sm sm:text-md">Safety Center</h3>   
              We knew from the data that most abuse happened in people’s
              notifications, so we felt strongly that we’d need to provide as
              many filtering options as possible to return control to them. This
              was one of those features that most people don’t need, but the
              people who do need it consider it essential.
            </p>
        </div>           
  </div>




  <div className="flex-none mb-8 sm:mb-48 sm:flex">                              
        <div className="flex items-center w-full px-2 py-4 sm:px-8">
          <div>
        <h3 className="text-xl">Hide Replies</h3>
            <p>
            In a 2016 brainstorm, my PM asked me why people couldn’t hide 
          replies to their own Tweets as a way to reduce harassment and abuse. 
          Almost 4 years later, the feature finally shipped. 
          This feature was my baby, and I worked on the design and advocacy 
          of it for more than a year. It was a joy to work on a feature that was 
          so difficult, a perfect storm of technical, policy, UX, and ethical issues.
            </p>
            </div>
        </div>   
        <div className="w-full">       
        
        <img src="assets/hidereplies.png" alt="Default" />
       
        </div>    
  </div>   
  
  
  <div className="flex-none mb-8 sm:mb-48 sm:flex">                      
        <div className="w-full">       
        <div className="WorkSection-phone">
            <div className="WorkSection-phone-video">
            <video preload="auto" autoPlay loop muted>
                  <source src="assets/ghostTweet_v3.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
            <div className="WorkSection-phone-bezel">!</div>
          </div>
       
        </div>
        <div className="flex items-center w-full px-2 py-4 sm:px-8">
          <div>
        <h3 className="text-xl">Tweet Submission Flow</h3>
            <p>
              Posting a tweet is deceptively complex! What happens it takes a
              long time because of spotty bandwidth? What if something goes
              wrong? What should happen if someone is in airplane mode? The old
              system was causing all sorts of problems, so I was asked to
              redesign it.
            </p>
            </div>
        </div>       
  </div>   
  
  
  <div className="flex-none mb-8 sm:mb-48 sm:flex">                  
        
        <div className="flex items-center w-full px-2 py-4 sm:px-8 sm:w-2/5">
          <div>
        <h3 className="text-xl">Windows Phone Email</h3>
              <p>
                We ask a lot out of our email apps. We want them to be easy to use
                and uncluttered, but at the same time have the same power we
                expect from our desktops and laptops. I led the design of three
                versions of Mail for Windows Phone, working to strike this careful
                balance.
              </p>
            </div>
        </div>     

        <div className="w-full sm:w-3/5">       
          <img src="assets/email.png" />
        </div>  

  
  </div>  

  <div className="flex-none mb-48 sm:flex">

      <div className="w-full sm:w-3/5">       
          <img src="assets/thirdparty.png" />
        </div>  
                                    
        <div className="flex items-center w-full px-2 py-4 sm:px-8 sm:w-2/5">
          <div>
        <h3 className="text-xl">Third Party Apps</h3>
              <p>
                The biggest challenge for Windows Phone was getting third party
                developers to write apps for the platform. I spent about a quarter
                of my time on design evangelism in the developer community. When
                Microsoft bought Skype, I helped them redesign their app. I spoke
                at conferences, sat for interviews, and helped envision and launch
                a design system and best practices website for Metro's design
                language.
              </p>
            </div>
        </div>    

              
  </div> 

      </div>



    </section>
  
    )
  }


