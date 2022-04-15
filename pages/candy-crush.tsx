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
} from 'icons'

import styles from 'styles/walkThrough.module.scss'

const CandyCrush: NextPage = () => {
  const icons = [
    { Icon: Html5, msg: 'HTML' },
    { Icon: Css3, msg: 'CSS' },
    { Icon: Sass, msg: 'Sass' },
    { Icon: Js, msg: 'JavaScript' },
    { Icon: React, msg: 'React' },
    { Icon: CreateReactApp, msg: 'Create React App' },
    { Icon: Github, msg: 'Github Pages' },
  ]

  return (
    <div className={styles.addressHelperContainer}>
      <Top className={styles.angle} />

      <section className={styles.section}>
        <div className={styles.text}>
          <h1>Candy Crush</h1>
          <p>
            This Candy Crush game was inspired by Ania Kubow. I improved upon
            her original JS and css code by porting over to a React Application.
            This project is a simple and pure React application, but
            demonstrates the speed of react over raw JS using setTimeout.
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
                href="https://webmastersmith.github.io/candy-crush-app/"
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
          <tr><td></td><td>Sass</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Github Pages</td><td></td></tr>
        </tbody>

        {/* image */}
        <div className={styles.headerImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/candyCrush/candyCrush.png"
            alt="image of lufkin address helper website"
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Project Purpose and Goal</h2>
          <p>
            This was a fun project that helped me learn React hooks, while
            building a simple game. I challenged myself with learning new
            memoization techniques by taking advantage of React&apos;s
            useCallback, useEffect, useMemo and useState hooks. The original
            tutorial by Ania Kubow used setTimeout to control timing. This
            needlessly wasted UI renders. By using useEffect and useState, I was
            able to reduce much of the needless UI rendering.
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
              Create React App&apos;s ability to get up an running without much
              configuration and React&apos;s ability to handle state quickly and
              efficiently made the most sense for this web application. All
              React components are built with a functional style. Game state was
              kept with React useState.
            </p>
            <p>
              To keep a clean code base and separate the logic from the style,
              CSS modules were used along with SASS. SASS added css rule nesting
              logic, reusable variables, and mixins without adding page bloat to
              the code.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <div className={styles.cardImg}>
            <h3>Raw JS setInterval</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/candyCrush/setInterval.png"
              alt="image of candy crush game with set Interval"
              loading="lazy"
            />
          </div>
          <div className={styles.cardImg}>
            <h3>React Memoization</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/candyCrush/react.png"
              alt="image of candy crush game with react framework improvements"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Problems and Thought Process</h2>
          <p>
            The biggest challenge of this project was using React memoization
            techniques effectively. VS code linting helped me improve
            memoization techniques for non-primitives (functions, arrays,
            objects). I was able to avoid unnecessary expensive UI renders with
            effective use of if statements. Other improvements I made was to
            improve game UI response across multiple device platforms by proper
            use of the HTML5 Drag Drop API and the logic to control UI renders
            and adding DragDropTouch.js to translate HTML5 DragDrop API for
            mobile browsers that don&apos;t support the API.
          </p>

          <p>
            I worked hard to keep functional components pure and reusable as
            much possible and keep game logic simple. I also used sass with css
            modules, because of the separation between JSX and style. This made
            the code much cleaner and prevented css specificity issues.
          </p>
        </div>
        {/* image */}
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Lessons Learned</h2>
          <p>
            The most important achievement I received from completing this App
            is seeing the speed and reliability of React over raw JS. My
            understanding of React hooks memoization techniques improved during
            this build. I have a better understanding of React Hooks and Git
            management.
          </p>
        </div>
      </section>
      <section className={styles.contactSection}>
        <Contact />
      </section>
    </div>
  )
}

export default CandyCrush
