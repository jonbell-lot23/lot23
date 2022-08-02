import io from "socket.io-client";
import { useState, useEffect } from "react";

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {

  return (    
    <section className="WorkSection WorkSection--fullBleed">
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <h3>Hello! <br />I'm Jon Bell.</h3>
              <p>
                I'm a product designer and I love to write, code, draw, teach,
                lead teams, and learn new things.
              </p>

              <p>
                <a href="twitter.html">1. Here's some work I did at Twitter</a
                ><br />
                <a href="microsoft.html"
                  >2. And here's what I did at Microsoft</a
                ><br />
                <a href="storytelling.html"
                  >3. I love to write and give talks</a
                >

                <br /><br />
                <b>Recent projects</b>
              </p>

              <p>
                <a href="https://medium.com/near-future-field-notes"
                  >1. Near Future Field Notes</a
                ><br />

                <a href="http://uxlaunchpad.com/designexplosions/"
                  >2. Design Explosions</a
                ><br />

                <a
                  href="https://medium.com/near-future-field-notes/8-beating-disinformation-2354f3c06261?source=collection_home---6------0-----------------------"
                  >3. Beating Disinformation</a
                >
              </p>
              <p>
                My email is 
                 <a href="mailto:jb@lot23.com" className="pl-1">jb@lot23.com</a>. <br />Thanks for
                stopping by!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
}
