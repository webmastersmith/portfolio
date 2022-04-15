import type { NextPage } from 'next'
import { Contact } from 'components'
import {
  Html5,
  Apache,
  Bash,
  Bootstrap,
  Css3,
  Sass,
  Tailwind,
  Firebase,
  Js,
  LinuxTux,
  Mongodb,
  Nextjs,
  Node,
  Puppeteer,
  React,
  Typescript,
  Git,
  Express,
  Gimp,
  CreateReactApp,
  Stripe,
  Heroku,
  Github,
  Top,
  Pwa,
} from 'icons'

import styles from 'styles/walkThrough.module.scss'

const CrownClothing: NextPage = () => {
  const icons = [
    { Icon: Html5, msg: 'HTML' },
    { Icon: Css3, msg: 'CSS' },
    { Icon: Sass, msg: 'SASS' },
    { Icon: Js, msg: 'JavaScript' },
    { Icon: React, msg: 'React' },
    { Icon: CreateReactApp, msg: 'Create React App' },
    { Icon: Firebase, msg: 'Firebase' },
    { Icon: Stripe, msg: 'Stripe Pay' },
    { Icon: Pwa, msg: 'Progressive Web App' },
    { Icon: Heroku, msg: 'Heroku' },
  ]

  return (
    <div className={styles.addressHelperContainer}>
      <Top className={styles.angle} />

      <section className={styles.section}>
        <div className={styles.text}>
          <h1>Crown Clothing</h1>
          <p>
            Crown Clothing is a React Application built for a clothing store
            demo. I built this project following a tutorial from a Udemy course
            focusing on React, Firebase, Redux and Stripe for credit card
            processing. This e-commerce application required a lot of heavy
            lifting to create a universal cart and overall shopping experience.
          </p>
        </div>

        <tbody className={styles.table}>
          <tr>
            <th>Type</th>
            <th>Stack</th>
            <th>View</th>
          </tr>
          <tr>
            <td>SPA</td>
            <td>React</td>
            <td className={styles.site}>
              <a
                href="https://cc-bryon.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </td>
          </tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Create React App</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>SASS</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Firebase</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Stripe</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Progressive Web App</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Heroku Server</td><td></td></tr>
        </tbody>

        {/* image */}
        <div className={styles.headerImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/crownClothing/crownClothing.png"
            alt="image of crown clothing website"
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Project Purpose and Goal</h2>
          <p>
            This project was to demonstrate the React framework, Redux for state
            management, Firebase for sign-in and Stripe for payments. It was a
            complete project I did early on in my full stack training.
          </p>

          <p>
            The final goal was to have a fully e-commerce site demo that had the
            potential to be converted into a production ready site.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Web Stack and Explanation</h2>
        <div className={styles.split}>
          <div className={styles.icons}>
            {icons.map(({ Icon, msg }) => {
              return (
                <div key={msg}>
                  <Icon />
                  <span>{msg}</span>
                </div>
              )
            })}
          </div>
          <div className={styles.textColumn}>
            <p>
              React with Redux made the most sense for this web application
              because it&apos;s production ready scalability and reliable state
              management. Firebase was used for login authentication and
              persistent cart storage. Stripe was chosen for it&apos;s cart
              checkout SDK and developer friendly code.
            </p>
            <p>
              Redux state management uses local storage and Firebase data base
              storage for a seamless login cart experience. Heroku was used to
              host the website because of it&apos;s Git integration.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        {/* image row 1 */}
        <div className={styles.split}>
          <div className={styles.cardImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crownClothing/hats.png"
              alt="image of hats merchandise"
              loading="lazy"
            />
          </div>
          <div className={styles.cardImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crownClothing/jackets.png"
              alt="image of jackets merchandise"
              loading="lazy"
            />
          </div>
        </div>

        {/* images row 2 */}
        <div className={styles.split}>
          <div className={styles.cardImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crownClothing/mens.png"
              alt="image of hats merchandise"
              loading="lazy"
            />
          </div>

          <div className={styles.cardImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crownClothing/signin.png"
              alt="image of jackets merchandise"
              loading="lazy"
            />
          </div>
        </div>

        {/* images row 3 */}
        <div className={styles.split}>
          <div className={styles.cardImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crownClothing/cart.png"
              alt="image of jackets merchandise"
              loading="lazy"
            />
          </div>
          <div className={styles.cardImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crownClothing/checkout.png"
              alt="image of hats merchandise"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Problems and Thought Process</h2>
          <p>
            This project was massive and the only way to make it maintainable
            was to focus on code organization and proper file structure. Some of
            the course code was outdated, so I opted to learn by using modern
            code versions, even though the learning curve was much steeper.
          </p>

          <p>
            I worked hard to keep functional components pure and reusable as
            much possible. I also used sass with css modules, because of the
            separation between JSX and style. This made the code much cleaner
            and prevented css specificity issues.
          </p>
        </div>
        {/* image */}
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Lessons Learned</h2>
          <p>
            With a project with so many features it can be easy to get lost in
            the code. The most important ones involved my newfound understanding
            of React Hooks, Git management, Firebase integration, and Stripe
            integration. As my first large project using React, I learned a lot
            of lessons regarding code structure and organization. When I first
            began, I would write sloppy code and move on, but now I know how
            doing so can come back to bite you; I now spend a lot more time
            refactoring and improving every line I code I write, for the best
            readability and far fewer headaches.
          </p>
        </div>
      </section>
      <section className={styles.contactSection}>
        <Contact />
      </section>
    </div>
  )
}

export default CrownClothing
