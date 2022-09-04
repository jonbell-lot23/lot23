import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header.js'

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
    <>
  
  <section className="flex justify-center w-screen pt-8 mx-auto mt-8 bg-blue-50 py-96">

  
  
  <div className="justify-center w-full p-2 sm:w-3/5">   


  <div className="py-0 pl-0 my-0 text-xl font-medium sm:text-md">About</div>

  <div className="w-full mb-24 sm:w-3/5">
    I've worked at Twitter, Microsoft, frog design, and now I'm building a time traveling debugger at Replay.io. This is a selection
    of my work.  
  </div>



  <div className="py-0 pl-0 my-0 text-xl font-medium sm:pl-2 sm:text-md">Twitter</div>







  <div className="w-full mb-48">                      
        <div className="w-full">
            
          <img src="assets/hidereplies.png" alt="Default" />
          <p className="p-0 pt-2 sm:p-8 sm:pt-4 text-md">
          <h3 className="mb-0 text-xl">Hide Replies</h3> 
          In a 2016 brainstorm, my PM asked me why people couldn’t hide 
          replies to their own Tweets as a way to reduce harassment and abuse. 
          Almost 4 years later, the feature finally shipped. 
          This feature was my baby, and I worked on the design and advocacy 
          of it for more than a year. It was a joy to work on a feature that was 
          so difficult, a perfect storm of technical, policy, UX, and ethical issues.
            </p>
        </div>           
  </div> 


  <div className="w-full mb-48">                                          
        <div className="w-full px-8">
          
          <video preload="auto" autoPlay loop muted>
                  <source src="https://help.twitter.com/content/dam/help-twitter/en/guides/a-safer-twitter/demo-notification-1280x720.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
          <p className="p-0 pt-2 sm:pt-4 text-md">
          <h3 className="mb-3 text-xl">Safety Center</h3>   
              We knew from the data that most abuse happened in people’s
              notifications, so we felt strongly that we’d need to provide as
              many filtering options as possible to return control to them. This
              was one of those features that most people don’t need, but the
              people who do need it consider it essential.
            </p>
        </div>           
  </div>
  

  <div className="flex-none mb-48 sm:flex">                      
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
 
  
  <div className="flex-none mb-48 sm:flex">     

        <div className="flex items-center w-full px-2 py-4 sm:px-8 sm:w-1/2 ">
          <div>
          <h3 className="text-xl">Live Pipeline</h3>
            <p>
              Twitter’s slogan is “What’s Happening?” yet Twitter’s interface
              has historically felt static and unchanging. I designed some
              subtle animations to bring a feeling of vibrancy to actions
              happening on the platform, and over a year later it shipped! It
              took a rewrite of a lot of fundamental logic in the system, and
              immediately made a positive impact.
            </p>
            </div>
        </div>     

        <div className="w-full sm:w-1/2">       
        <div className="WorkSection-phone">
            <div className="WorkSection-phone-video">
            <video preload="auto" autoPlay loop muted>
                  <source src="assets/livePipeline_v2.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
            <div className="WorkSection-phone-bezel">!</div>
          </div>
       
        </div>
          
  </div>  

  <div className="flex-none mb-24 sm:flex">                            
        <div className="w-full sm:w-3/5">       
          <img src="assets/twitterAndroid.png" />
        </div>  

        <div className="flex items-center w-full px-2 py-4 sm:px-8 sm:w-2/5">
          <div>
        <h3 className="text-xl">Twitter for Android</h3>
              <p>
              Material Design made a huge impact in the design community when 
              it came out, but Twitter was very slow to embrace it. I 
              spearheaded the Material redesign of the app, and after 
              the first big release I handed it off to a wonderful Android 
              team who turned it into what it looks like today.
              </p>
            </div>
        </div>       
  </div>  
  

  

  <div className="w-full mb-24">                      
        <div className="w-full">
            
          <img src="assets/twitterWindows.png" alt="Default" />
          <p className="p-0 pt-2 sm:p-1 sm:pt-4 text-md">
          <h3 className="mb-0 text-xl">Twitter for Windows</h3> 
              Microsoft wanted to ship Twitter by default in Windows 10’s Start
              Screen, so I spent several months designing the best way to take a
              mobile-centric app and make it look great in Windows’ new design
              system. I then handed the project to the amazing Angela Lam who
              led the first release and many versions afterwards.
            </p>
        </div>           
  </div> 


  <h2 className="text-3xl">Microsoft</h2>

  <div className="flex-none mb-24 sm:flex">                  
        
        <div className="w-full sm:w-3/5">       
          <img src="assets/email.png" />
        </div>  

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
  </div>   

  <div className="flex-none mb-24 sm:flex">                     
        
        

        <div className="flex items-center w-full px-2 py-4 sm:px-8 sm:w-2/5"> 
          <div>
        <h3 className="text-xl">Windows Phone Calendar</h3>
        <p>
                Microsoft made its name with its powerful Office apps, so getting
                the Mail and Calendar experience right was vitally important for
                millions of Windows Phone customers. Notice in this design the
                todo app was built into the calendar. I inherited this and worked
                to split todos into a proper standalone app over subsequent
                releases.
              </p>
            </div>
        </div>  

        <div className="w-full sm:w-3/5">       
          <img src="assets/calendar.png" />
        </div>  
             
  </div>   

  <div className="flex-none mb-24 sm:flex">                           
        <div className="w-full sm:w-3/5">       
          <img src="assets/text.png" />
        </div>  

        <div className="flex items-center w-full px-2 py-4 sm:px-8 sm:w-2/5">
          <div>
        <h3 className="text-xl">Windows Phone Messaging</h3>
              <p>
                Even back in 2011, it was clear that messaging was going to be one
                of the most popular categories in mobile. The best part of
                Microsoft's Messaging product was how it integrated with other
                messaging platforms into a single experience. I led the design of
                this for two releases.
              </p>
            </div>
        </div>       
  </div>   

  <div className="flex-none mb-24 sm:flex">                                
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

        <div className="w-full sm:w-3/5">       
          <img src="assets/thirdparty.png" />
        </div>            
  </div>   
  

  <div className="flex-none sm:flex">   
        
  <div className="w-full sm:w-1/2">       
          <img src="assets/owpx.png" />
        </div>  
        
        <div className="flex items-center w-full px-2 py-4 sm:px-8 sm:w-1/2">
        
        
        <div>
        <h3 className="text-xl">Word, Excel, and Powerpoint</h3>
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


    <section
      className="WorkSection"
      style={{ backgroundColor: "#1DA1E2", color: "#fff" }}
    >
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Additional notes</h3>
              <p>
                I was the lead designer on each of these projects except the third
                party section. Several projects such as Mail and Calendar were
                delegated to other designers after I started work on them. My
                process is pretty standard but I bet you're not super excited
                about seeing a bunch of pictures of people standing at
                whiteboards! I do have a couple process tricks, and I'd love to
                chat more about them in person.
              </p>              
            </div>
          </div>
          <div className="Grid-cell u-md-width1of2"></div>
        </div>
      </div>
    </section>
   </> 
    )
  }