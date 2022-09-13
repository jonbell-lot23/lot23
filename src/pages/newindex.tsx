import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from 'next/link'

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {

  return (    
    <>
    <section className="mx-0 my-28 sm:mx-32">
      <div>
        <div>
          <div className="w-full lg:w-1/2">
            <div className="WorkSection-content">
              <h3>Hello! <br />I'm Jon Bell.</h3>
              <p>
                I'm a product designer and I love to write, code, draw, teach,
                lead teams, and learn new things.
              </p>

              <p>
              <Link href="/twitter">
              <a>1. Here's some work I did at Twitter</a>
                </Link>
                
                



                <br />
                
                <Link href="/microsoft">
                  <a>
                  2. And here's what I did at Microsoft
                    </a>
                    </Link>

                  
                
                <br />

                <Link href="/storytelling">
                <a>3. I love to write and give talks</a>
                </Link>


                <br /><br />
                <b>Recent projects</b>
              </p>

              <p>

              <a href="http://replay.io"
                  >1. Replay.io</a
                ><br />

                <a href="https://www.youtube.com/watch?v=apC8Dl9n5A4"
                  >2. And Now the Good News</a
                ><br />

                <a href="http://uxlaunchpad.com/designexplosions/"
                  >3. Design Explosions</a
                ><br />

                
               
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
    </>
  );
}