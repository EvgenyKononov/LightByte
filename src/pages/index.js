import React from "react"
import Meta from "../components/meta"
import Logo from "../assets/logo.svg"
import Fast from "../assets/fast.svg"
import Money from "../assets/money.svg"
import Safe from "../assets/safe.svg"
import { Link } from "gatsby"
import useTidio from "../hooks/useTidio"
import GlobalFooter from "../components/globalFooter"

export default function Home() {
  const block = "home"
  useTidio()

  return (
    <div className={block}>
      <Meta
        title='LightBite — QR code menu for your restaurant'
        description='LightBite is a tool that allows you to create a mobile-friendly QR code menu for your restaurant.'
      />
      <header className={`${block}__header`}>
        <div className={`${block}__header-logo`}>
          <img src={Logo} alt='LightBite Logo' style={{width:'200px'}}></img>
        </div>

        <div className={`${block}__header-links`}>
          <Link className={`${block}__header-login`} to='/login'>
            Log in
          </Link>
          <Link className={`${block}__header-signup`} to='/signup'>
            Sign up
          </Link>
        </div>
      </header>

      <section>
        <div className={`${block}__hero`}>
          <div className={`${block}__hero-content`}>
            <h1>Create a safer dining experience with a QR code menu</h1>
            <p>Easily create and manage a QR code menu for your restaurant</p>
            <div className={`${block}__hero-links`}>
              <Link className={`${block}__hero-link`} to='/signup'>
                Create your free menu
              </Link>
              <Link className={`${block}__hero-secondary`} to='/demo'>
                See a demo
              </Link>
            </div>
          </div>
        </div>

        <div className={`${block}__3-col`}>
          <h1>Why a QR code menu?</h1>

          <div className={`${block}__3-col-section`}>
            <div className={`${block}__3-col-section-item`}>
              <img src={Safe} alt='' />
              <div className={`${block}__3-col-section-content`}>
                <h2>Cleaner</h2>
                <p>
                  Paper menus contain 100 times more germs than toilet seats
                </p>
              </div>
            </div>

            <div className={`${block}__3-col-section-item`}>
              <img src={Fast} alt='' />
              <div className={`${block}__3-col-section-content`}>
                <h2>Faster</h2>
                <p>
                  Customers don’t need to wait for a menu, they can access it
                  anytime
                </p>
              </div>
            </div>

            <div className={`${block}__3-col-section-item`}>
              <img src={Money} alt='' />
              <div className={`${block}__3-col-section-content`}>
                <h2>Cheaper</h2>
                <p>
                  Don’t worry about printing new menus, simply update it anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${block}__2-col`}>
          <div className={`${block}__2-col-content`}>
            <h1>Mobile-friendly menus</h1>
            <p>
              PDF menus are hard to read on a phone. With LightBite, your
              customers get a mobile-friendly version that loads fast.
            </p>
          </div>
        </div>

        <div className={`${block}__2-col reverse`}>
          <div className={`${block}__2-col-img`}>
          </div>
          <div className={`${block}__2-col-content`}>
            <h1>Hassle-free management</h1>
            <p>
              LightBite manages all the hosting and technical aspects involved
              in having a contactless menu.
            </p>
          </div>
        </div>

        <div className={`${block}__2-col`}>
          <div className={`${block}__2-col-content`}>
            <h1>Personalized for you</h1>
            <p>
              Create your unique and easy-to-remember link. More customization
              features coming soon!
            </p>
          </div>
          <div className={`${block}__2-col-img`}>
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  )
}
