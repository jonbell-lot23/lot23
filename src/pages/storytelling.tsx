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
    <div className="WorkSection-content">
      <h3>Storytelling</h3>
      <p>
        I do talks, I write fiction and non-fiction, I interview people, I teach
        classes, I make art bots, run essay series, and draw lots of comics.
      </p>
    </div>
    <section
      className="WorkSection WorkSection--fullBleed"
      style={{ backgroundImage: 'url("assets/jetpacks.png")' }}
    >
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <p>
                <b>Book #1: The Thing About Jetpacks</b>
              </p>
              <p>
                <i>"A book about designing wonderful things."</i>
              </p>
              <p>
                This was my first series of design essays, funded by backers on
                Kickstarter and written with my friend Lukas Mathis in 2013.
              </p>
              <p>
                <a href="http://lot23.com/play/books/The%20Thing%20About%20Jetpacks_v1.3.epub">
                  Download book
                </a>
                <br />
                <a href="https://medium.com/@jonbell/the-thing-about-jetpacks-a9708207a082">
                  Read on Medium
                </a>
              </p>
            </div>
          </div>
          <div className="Grid-cell u-md-width1of2"></div>
        </div>
      </div>
    </section>
    <section
      className="WorkSection WorkSection--fullBleed"
      style={{ backgroundImage: 'url("assets/reasonabledefaults.png")' }}
    >
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <p>
                <b>Book #2: Reasonable Defaults</b>
              </p>
              <p>
                <i>"A book about listening, learning, and leading."</i>
              </p>
              <p>
                In 2018, I realised I had a lot more to say about design,
                especially about leading teams of people and learning from them. I
                like this book a lot.
              </p>
              <p>
                <a href="http://lot23.com/play/books/Reasonable%20Defaults_v1.1.epub">
                  Download book
                </a>
                <br />
                <a href="https://medium.com/@jonbell/reasonable-defaults-11edc6813b83">
                  Read on Medium
                </a>
              </p>
            </div>
          </div>
          <div className="Grid-cell u-md-width1of2"></div>
        </div>
      </div>
    </section>
    <section
      className="WorkSection WorkSection--fullBleed"
      style={{ backgroundImage: 'url("assets/designplay.png")' }}
    >
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2">
            <div className="WorkSection-content">
              <p>
                <b>Upcoming: Design Play</b>
              </p>
              <p>
                <i>People design better when they're having fun.</i>
              </p>
              <p>
                Years ago, I kicked off a yearly conference and monthly meetup
                called Design Play. The conference went for five years and the
                meetup has been replicated in cities around the world.
              </p>
              <p>
                Now I'm working on a book that discusses it in more detail, but in
                the meantime you can
                <a href="https://github.com/uxlaunchpad/designplay">
                  read the manifesto on Github
                </a>
                !
              </p>
            </div>
          </div>
          <div className="Grid-cell u-md-width1of2"></div>
        </div>
      </div>
    </section>
    <section
      className="WorkSection WorkSection--fullBleed"
      style={{ backgroundImage: 'url("assets/jontalking.png")' }}
    >
      <div className="Container">
        <div className="Grid">
          <div className="Grid-cell u-md-width1of2"></div>
          <div className="Grid-cell u-md-width1of2">
            <div
              className="WorkSection-content"
              style={{ backgroundColor: "rgba(248, 251, 255, 1)" }}
            >
              <p>
                <b>Speaking engagements</b>
              </p>
              <p>
                I love learning things and sharing them as widely as possible.
                Here's a small sampling of talks I've given over the last ten
                years.
              </p>
              <p>
                <a href="https://vimeo.com/320648955">
                  Disinformation at Twitter: An Inside Story
                </a>{" "}
                (Interaction 19 and Web Directions)
                <br />
                <a href="https://www.youtube.com/watch?v=WjgpAVyE034">
                  Make it Relevant
                </a>{" "}
                (SXSW)
                <br />
                <a href="https://www.youtube.com/watch?v=43URYLExNsw">
                  Design While Shipping
                </a>{" "}
                (Creative Mornings)
                <br />
                <a href="https://www.facebook.com/strelkainstitute/videos/10155318960061072/?hc_ref=ARSk4nnej3gwJ6-sOttFF1ptrI1WtD1gd3zr-3lMYMzXv0DqpInmSKOMUfEM1VoaLp8&__xts__[0]=68.ARDcSwE97VdIJdnVo9_NuqukXWwTu-1p4kTKjsz8URnYs9VlhPwWTk7WoicZQ7SuO68jKiWPpT8XR2A6a_41KuIsrcD_SrXSWPSvINyRn05LlJkTD7ufphDkujX3547JCnIQeemLbP7z_E737lrY7jaIix2V9tA5CvqkCXD9xBkwtwSx8wUf&__tn__=FC-R">
                  Designing with Abuse in Mind
                </a>{" "}
                (Moscow)
                <br />
                <a href="https://www.youtube.com/watch?time_continue=1&v=b70KerNb0RA">
                  10 Quick Talks
                </a>{" "}
                (Johannesburg)
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  

  );
}
