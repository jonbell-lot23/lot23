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
      className="WorkSection WorkSection--fullBleed"
      style={{ backgroundImage: 'url("assets/microsoft.jpg")' }}
    >
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Senior UX Design Lead</h3>
              <h4>Microsoft, 2010-2014</h4>
              <p>
                I tried a Windows Phone as soon as it came out, and within a month
                I had joined the team. I was blown away by the print-inspired
                design language, then called Metro. It was an honour to join and
                then lead the apps team.
              </p>
            </div>
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
  

  );
}
