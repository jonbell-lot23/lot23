import io from "socket.io-client";
import { useState, useEffect } from "react";

let socket;

type Message = {
  author: string;
  message: string;
};




export default function Home() {

  return (    
    <>
  <section
    className="WorkSection WorkSection--fullBleed bg-[url('http://lot23.com/assets/twitterSeattle.jpg')]">
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
  {/* tweet submission flow */}
  <section className="WorkSection">
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of1">
          <div className="WorkSection-content">
            <h3>Tweet Submission Flow</h3>
            <p>
              Posting a tweet is deceptively complex! What happens it takes a
              long time because of spotty bandwidth? What if something goes
              wrong? What should happen if someone is in airplane mode? The old
              system was causing all sorts of problems, so I was asked to
              redesign it.
            </p>
            <p>
              The result is deceptively simple. We post a greyed out version in
              the timeline (referred to internally as a “ghost tweet”) and once
              it's successfully uploaded, it turns into a real tweet. Shout out
              to my engineering team who sweated the details over six months to
              get this launched!
            </p>
          </div>
        </div>
        <div className="Grid-cell u-md-width1of2">
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
      </div>
    </div>
  </section>
  <section className="WorkSection">
    <div className="Container">
      <div className="Grid">
        <div className="Grid-cell u-md-width1of1">
          <div className="WorkSection-content">
            <h3>Live Pipeline</h3>
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
        <div className="Grid-cell u-md-width1of2">
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
    </div>
  </section>
  {/* live pipleline */}
  {/*
<section class="WorkSection">
<div class="Container">
  <div class="Grid">

    <div class="Grid-cell u-md-width1of1">
      <div class="WorkSection-content">
        <h3>Tweet Submission Flow</h3>
			  <p>
				Posting a tweet is deceptively complex! What happens it takes a long time because of spotty bandwidth? What if something goes wrong? What should happen if someone is in airplane mode? The old system was causing all sorts of problems, so I was asked to redesign it.
			  </p>
			  <p>
				The result is deceptively simple. We post a greyed out version in the timeline (referred to internally as a “ghost tweet”) and once it's successfully uploaded, it turns into a real tweet. Shout out to my engineering team who sweated
				the details over six months to get this launched!
			  </p>            </div>
    </div>
     <div class="Grid-cell u-md-width1of2">
      <img
        src="assets/ghostTweet.png"
        alt="Default"
      />
    </div>
  </div>
</div>
    </section>
 */}
  {/* live pipleline */}
  {/*
<section class="WorkSection">
<div class="Container">
  <div class="Grid">

    <div class="Grid-cell u-md-width1of1">
      <div class="WorkSection-content">
        <h3>Live Pipeline</h3>
        <p>
          Twitter’s slogan is “What’s Happening?” yet Twitter’s interface has historically felt static and unchanging. I designed some subtle animations to bring a feeling of vibrancy to actions happening on the platform, and over a year later it shipped! It took a rewrite of a lot of fundamental logic in the system, and immediately made a positive impact.
</p>
      </div>
    </div>
     <div class="Grid-cell u-md-width1of2">
      <img
        src="assets/livepipeline.png"
        alt="Default"
      />
    </div>
  </div>
</div>
    </section>
*/}
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
        <video preload="auto" autoPlay loop muted>
                  <source src="https://help.twitter.com/content/dam/help-twitter/en/guides/a-safer-twitter/demo-notification-1280x720.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
          
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
</>

  );
}
