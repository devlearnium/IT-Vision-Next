import React from 'react'
import Head from 'next/head'

import Animated1 from '../components/animated-1'
import Animated11 from '../components/animated-11'
import Animated12 from '../components/animated-12'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>IT Vision</title>
          <meta property="og:title" content="IT Vision" />
        </Head>
        <header data-role="Header" className="home-header">
          <div className="home-container01">
            <img
              alt="logo"
              src="/playground_assets/logo.svg"
              className="home-image"
            />
          </div>
          <div className="home-btn-group">
            <button className="button">Contact</button>
          </div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <nav className="home-nav">
              <div className="home-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image1"
                />
                <div
                  data-type="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero">
          <div className="home-container03">
            <div className="home-container04">
              <h1 className="home-text">
                High-tech solutions for business and startups
              </h1>
              <span className="home-text01">
                <span>
                  IT VISION - Your long-term web and mobile app developments
                  partner.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <button className="home-button1 button">Get Started</button>
            </div>
          </div>
          <Animated1 rootClassName="animated1-root-class-name"></Animated1>
        </div>
        <div className="home-container05"></div>
        <div className="home-hero1">
          <div className="home-container06">
            <Animated11 rootClassName="animated11-root-class-name"></Animated11>
          </div>
          <div className="home-container07">
            <h1 className="home-text05">
              We provide transition to the digital path for offline business
              models.
            </h1>
            <div className="home-container08">
              <h2 className="home-text06 content">
                Applications for Startups and Established Businesses
              </h2>
              <div className="home-btn-group1">
                <button className="home-button2 button">Get Started</button>
                <button className="home-button3 button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero2">
          <div className="home-container09">
            <div className="home-container10">
              <div className="home-container11">
                <h1 className="home-text07">
                  Moderns technologies and upgradable stack
                </h1>
                <span className="home-text08">
                  <span>(Next.JS, React, Node.JS, Docker, CICD)</span>
                  <br></br>
                  <span>Connecting with Web 3.0 Blockchain Solutions</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-container12">
            <Animated12 rootClassName="animated12-root-class-name"></Animated12>
          </div>
        </div>
        <footer className="home-footer">
          <img
            alt="logo"
            src="/playground_assets/logo.svg"
            className="home-image2"
          />
          <a
            href="https://t.me/#"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
            </svg>
          </a>
          <span className="home-text17">
            © 2022 IT VISION, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header {
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: stretch;
            padding-top: var(--dl-space-space-twounits);
            padding-right: 132px;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container01 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-image {
            width: 129px;
            height: 42px;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            height: 717px;
            display: flex;
            position: relative;
            min-height: 80vh;
            align-items: center;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-color: #d9d9d9;
            background-image: url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTY2NTg3NTU3NA&ixlib=rb-1.2.1&w=1500');
            background-repeat: no-repeat;
            background-position: bottom;
          }
          .home-container03 {
            width: 472px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container04 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
            max-width: 25rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 300;
          }
          .home-text01 {
            font-size: 1.15rem;
            max-width: 60%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-weight: 400;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-button1:hover {
            transform: scale(1.02);
          }
          .home-container05 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: auto;
            min-height: 80vh;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container06 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-text05 {
            color: var(--dl-color-gray-black);
            margin: var(--dl-space-space-twounits);
            font-size: 3rem;
            max-width: 25rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 300;
          }
          .home-container08 {
            width: 453px;
            display: flex;
            flex-direction: column;
          }
          .home-text06 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-btn-group1 {
            display: flex;
            margin-top: 57px;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
          }
          .home-button2:hover {
            transform: scale(1.02);
          }
          .home-button3 {
            color: var(--dl-color-primary-100);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-100);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button3:hover {
            transform: scale(1.02);
          }
          .home-hero2 {
            width: 100%;
            height: 717px;
            display: flex;
            position: relative;
            min-height: 80vh;
            align-items: center;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDgwfHxhYnN0cmFjdHxlbnwwfHx8fDE2NjU4NzU1OTc&ixlib=rb-1.2.1&w=1500');
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 472px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container10 {
            width: 472px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container11 {
            height: 470px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text07 {
            color: var(--dl-color-gray-900);
            font-size: 3rem;
            max-width: 25rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 300;
          }
          .home-text08 {
            color: var(--dl-color-gray-900);
            font-size: 1.15rem;
            max-width: 100%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-threeunits);
            line-height: 2;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container12 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #05051c;
          }
          .home-image2 {
            height: 2rem;
            object-fit: cover;
          }
          .home-link {
            display: contents;
          }
          .home-icon10 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .home-text17 {
            color: var(--dl-color-gray-700);
          }
          @media (max-width: 991px) {
            .home-header {
              width: 100%;
            }
            .home-image {
              left: 35px;
            }
            .home-icon {
              display: flex;
            }
            .home-hero {
              width: 100%;
            }
            .home-container03 {
              margin-left: var(--dl-space-space-sixunits);
            }
            .home-text {
              width: 363px;
              margin: var(--dl-space-space-halfunit);
            }
            .home-hero1 {
              width: 100%;
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-text05 {
              width: 361px;
              margin: var(--dl-space-space-halfunit);
            }
            .home-container08 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text06 {
              text-align: center;
            }
            .home-hero2 {
              width: 100%;
            }
            .home-container10 {
              margin-left: var(--dl-space-space-sixunits);
            }
            .home-text07 {
              width: 363px;
              margin: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text17 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              height: 82px;
              padding: var(--dl-space-space-unit);
            }
            .home-image {
              margin: var(--dl-space-space-halfunit);
              position: 0px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              align-items: center;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 216px;
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTY2NTg3NTU3NA&ixlib=rb-1.2.1&w=1500');
              background-position: center;
            }
            .home-container04 {
              width: 392px;
              margin-right: 0px;
            }
            .home-text {
              color: var(--dl-color-gray-black);
              font-size: 3rem;
              font-style: normal;
              text-align: left;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text01 {
              font-size: 1.15rem;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-button1 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              font-weight: 400;
              margin-right: 0px;
              border-radius: var(--dl-radius-radius-radius8);
              margin-bottom: var(--dl-space-space-unit);
              background-color: var(--dl-color-primary-100);
            }
            .home-container05 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text05 {
              color: var(--dl-color-gray-black);
              width: 433px;
              height: 332px;
              margin: var(--dl-space-space-halfunit);
              font-size: 3rem;
              font-style: normal;
              margin-top: 57px;
              text-align: left;
              font-family: Inter;
              font-weight: 300;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-container08 {
              height: 224px;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-text06 {
              width: 294px;
              height: 42px;
              margin: 0px;
              text-align: left;
            }
            .home-btn-group1 {
              margin-left: 0px;
              flex-direction: column;
            }
            .home-button2 {
              background-color: var(--dl-color-primary-100);
            }
            .home-button3 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-hero2 {
              align-items: center;
              padding-top: 0px;
              padding-left: 57px;
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDgwfHxhYnN0cmFjdHxlbnwwfHx8fDE2NjU4NzU1OTc&ixlib=rb-1.2.1&w=1500');
              background-position: center;
            }
            .home-container09 {
              height: 206px;
            }
            .home-container10 {
              width: auto;
              margin-left: 0px;
            }
            .home-container11 {
              width: 380px;
            }
            .home-text07 {
              color: var(--dl-color-gray-900);
              width: auto;
              font-size: 3rem;
              max-width: auto;
              font-style: normal;
              text-align: left;
              font-family: Inter;
              font-weight: 300;
              margin-right: 0px;
            }
            .home-text08 {
              font-size: 1.15rem;
              max-width: 100%;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container12 {
              width: 479px;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
            .home-image2 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-icon10 {
              align-self: flex-end;
              margin-left: var(--dl-space-space-oneandhalfunits);
              padding-top: 0px;
            }
            .home-text17 {
              margin: var(--dl-space-space-oneandhalfunits);
              font-size: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
