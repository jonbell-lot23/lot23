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

<div className="justify-center w-1/2">
              
  <div className="flex">                      
        <div className="w-1/3">       
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
        <div className="flex items-center w-2/3 px-8 py-4">
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
 
  
  <div className="flex">       

        <div className="flex items-center w-2/3 px-8 py-4">
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

        <div className="w-1/3">       
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


  <div className="w-full">                      
        <div className="w-full">
          <h3 className="mb-0 text-xl">Twitter for Windows</h3>   
          <img src="assets/twitterWindows.png" alt="Default" />
          <p className="p-8">
              Microsoft wanted to ship Twitter by default in Windows 10’s Start
              Screen, so I spent several months designing the best way to take a
              mobile-centric app and make it look great in Windows’ new design
              system. I then handed the project to the amazing Angela Lam who
              led the first release and many versions afterwards.
            </p>
        </div>           
  </div> 


  <div className="w-full">                      
        <div className="w-full">
          <h3 className="mb-3 text-xl">Safety Center</h3>   
          <video preload="auto" autoPlay loop muted>
                  <source src="https://help.twitter.com/content/dam/help-twitter/en/guides/a-safer-twitter/demo-notification-1280x720.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
          <p className="px-0 py-2">
              We knew from the data that most abuse happened in people’s
              notifications, so we felt strongly that we’d need to provide as
              many filtering options as possible to return control to them. This
              was one of those features that most people don’t need, but the
              people who do need it consider it essential.
            </p>
        </div>           
  </div> 
</div>

</section>

    {/* Email */}
    <section className="WorkSection">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <img src="assets/email.png" alt="Default" />
          </div>
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Windows Phone Email</h3>
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
      </div>
    </section>
    {/* Calendar */}
    <section className="WorkSection">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Windows Phone Calendar</h3>
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
          <div className="Grid-cell u-md-width1of2">
            <img src="assets/calendar.png" alt="Default" />
          </div>
        </div>
      </div>
    </section>
    {/* Text */}
    <section className="WorkSection">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <img src="assets/text.png" alt="Default" />
          </div>
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Windows Phone Messaging</h3>
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
      </div>
    </section>
    {/* Third Party */}
    <section className="WorkSection">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Third Party Apps</h3>
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
          <div className="Grid-cell u-md-width1of2">
            <img src="assets/thirdparty.png" alt="Default" />
          </div>
        </div>
      </div>
    </section>
    {/* Profile */}
    <section className="WorkSection">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <img src="assets/profile.png" alt="Default" />
          </div>
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Rooms</h3>
              <p>
                Rooms was a great idea for adding people into a group on your
                phone. The vision was that you'd be able to share photos, texts,
                attachments, and locations in your private room. It even had
                integration with third parties! I'm still waiting to see a similar
                product in the market, because there's something special about the
                scenario we identified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Profile */}
    <section className="WorkSection">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Word, Excel, and Powerpoint</h3>
              <p>
                How do you make a single version of Word, Excel, and Powerpoint
                that can scale from a desktop PC all the way down to a 4 inch
                screen? I was asked to lead the mobile team that gave it a go, and
                I'm pleased to report that it shipped!
              </p>
            </div>
          </div>
          <div className="Grid-cell u-md-width1of2">
            <img src="assets/owpx.png" alt="Default" />
          </div>
        </div>
      </div>
    </section>
    
  <section
    className="mt-8 WorkSection WorkSection--fullBleed bg-[url('http://lot23.com/assets/twitterSeattle.jpg')]">
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of2">
          <div className="WorkSection-content">
            <h3>Staff Product Designer</h3>
            <h4>Twitter, 2014-2018</h4>
            <p>
              At Twitter I dedicated my time to features that would help the app
              look and feel better regardless of your country, the speed of your
              internet connection, the age of your phone, how able-bodied you
              are, or how much the trolls want to yell at you.
            </p>
            <p>
              Twitter is optimised for best-case scenarios, but I'm a lot more
              interested in designing for the worst-case ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Twitter for Windows */}
  <section className="WorkSection">
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width2of5">
          <img src="assets/twitterWindows.png" alt="Default" />
        </div>
        <div className="Grid-cell u-md-width3of5">
          <div className="WorkSection-content">
            <h3>Twitter for Windows</h3>
            <p>
              Microsoft wanted to ship Twitter by default in Windows 10’s Start
              Screen, so I spent several months designing the best way to take a
              mobile-centric app and make it look great in Windows’ new design
              system. I then handed the project to the amazing Angela Lam who
              led the first release and many versions afterwards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Twitter for Android */}
  <section className="WorkSection">
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of2">
          <img src="assets/twitterAndroid.png" alt="Default" />
        </div>
        <div className="Grid-cell u-md-width1of2">
          <div className="WorkSection-content">
            <h3>Twitter for Android</h3>
            <p>
              Material Design made a huge impact in the design community when it
              came out, but Twitter was very slow to embrace it. I spearheaded
              the Material redesign of the app, and after the first big release
              I handed it off to a wonderful Android team who turned it into
              what it looks like today.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* sucks at abuse divider */}
  <section
    className="WorkSection WorkSection--fullBleed"
    style={{ backgroundImage: 'url("assets/suckAtAbuse.jpg")' }}
  >
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of2">
          <div className="WorkSection-content">
            <h3>A Wicked Problem</h3>
            <p className="h5">Twitter sucks at abuse.</p>
            <p>
              So in 2016 I was thrilled to join the team as the lead designer,
              working most closely with one other designer, three PMs, and an
              engineering lead. Here are two big things I worked on directly
              amongst a list of about a dozen other initiatives the team took
              on.
            </p>
          </div>
        </div>
        <div className="Grid-cell u-md-width1of2"></div>
      </div>
    </div>
  </section>
  {/* Hide replies */}
  <section className="WorkSection">
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of2">
          <img src="assets/hidereplies.png" alt="Default" />
        </div>
        <div className="Grid-cell u-md-width1of2">
          <div className="WorkSection-content">
            <h3>Hide Replies</h3>
            <p>
              In a 2016 brainstorm, my PM asked me why people couldn’t hide
              replies to their own Tweets as a way to reduce harassment and
              abuse. Almost 4 years later, the feature finally shipped. This
              feature was my baby, and I worked on the design and advocacy of it
              for more than a year. It was a joy to work on a feature that was
              so difficult, a perfect storm of technical, policy, UX, and
              ethical issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Notification filters */}
  <section className="WorkSection">
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of2">
          <div className="WorkSection-content">
            <h3>Safety Center</h3>
            <p>
              We knew from the data that most abuse happened in people’s
              notifications, so we felt strongly that we’d need to provide as
              many filtering options as possible to return control to them. This
              was one of those features that most people don’t need, but the
              people who do need it consider it essential.
            </p>
          </div>
        </div>
        <div className="Grid-cell u-md-width1of2">
          {/*<img
        src="assets/twitterAndroid.png"
        alt="Default"
      />
      */}
          
        </div>
      </div>
    </div>
  </section>
  <section
    className="WorkSection"
    style={{ backgroundColor: "#23ABF3", color: "#fff" }}
  >
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of2">
          <div className="WorkSection-content">
            <h3>Additional notes</h3>
            {/*<p>
        	When I'm reading case studies, I like to know exactly what the designer
        	worked on and what the process looked like. On the other hand, I've seen
        	enough generic pictures of people placing sticky notes to last a lifetime! 
        	
        	So here are
				some additional thoughts.
        </p>*/}
            <p>
              The first two items, Tweet Submission Flow and Live Pipeline, were
              designed entirely by me with a fantastic engineering team backing
              me up. The next two, Twitter for Windows and Twitter for Android,
              were started by me but shipped by two other designers and their
              awesome teams.
            </p>
            <p>
              I worked on Hide Replies for about a year, but it didn't ship
              until about three years later, which was entirely because of the
              efforts of the Health &amp; Safety team still at Twitter. Finally,
              Safety Center was something I championed and led the design of,
              but it took an enormous team to get it out the door. I couldn't
              have made any progress without every single one of them.
            </p>
            <p>
              <a
                href="microsoft.html"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                See what I worked on at Microsoft
              </a>
            </p>
          </div>
        </div>
        <div className="Grid-cell u-md-width1of2"></div>
      </div>
    </div>
  </section>

  
    {/* sucks at abuse divider */}
    {/*   
  <section class="WorkSection WorkSection--fullBleed" style="background-image: url('assets/suckAtAbuse.jpg');">
  
  <div class="Container">
    <div class="Grid">
      <div class="Grid-cell u-md-width1of2">
        <div class="WorkSection-content">
          <h3>The Big Challenge</h3>
          <p class="h5">How do you make a single version of Word, Excel, and Powerpoint that can scale from a desktop PC all the way down to a 4 inch screen? 
          I was asked to lead the mobile team that gave it a go! (And the
          design shipped!)</p>
        </div>
      </div>
      <div class="Grid-cell u-md-width1of2">
       
      </div>
    </div>
  </div>
      </section>
      
  
   */}
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
              <p>
                <a
                  href="twitter.html"
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  See what I worked on at Twitter
                </a>
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