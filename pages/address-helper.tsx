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

import styles from 'styles/addressHelper.module.scss'

const AddressHelper: NextPage = () => {
  const icons = [
    { Icon: Html5, msg: 'HTML' },
    { Icon: Css3, msg: 'CSS' },
    { Icon: Sass, msg: 'Sass' },
    { Icon: Js, msg: 'JavaScript' },
    { Icon: Typescript, msg: 'TypeScript' },
    { Icon: React, msg: 'React' },
    { Icon: Nextjs, msg: 'NextJS' },
    { Icon: Node, msg: 'Node' },
    { Icon: Mongodb, msg: 'MongoDB' },
    { Icon: Puppeteer, msg: 'Puppeteer' },
    { Icon: Apache, msg: 'Apache' },
  ]

  return (
    <div className={styles.addressHelperContainer}>
      <Top className={styles.angle} />

      <section className={styles.section}>
        <div className={styles.text}>
          <h1>Lufkin Address Helper</h1>
          <p>
            Lufkin Address Helper is a Nextjs/React Application built for static
            served html pages. I built this project from scratch using
            Nextjs/React, Typescript, MongoDB, and Puppeteer. This application
            requires a lot of heavy lifting at build time to create fast
            loading, static html pages that do not have to have a dedicated
            database server.
          </p>
        </div>

        <tbody className={styles.table}>
          <tr>
            <th>Type</th>
            <th>Stack</th>
            <th>View</th>
          </tr>
          <tr>
            <td>Static Html Pages</td>
            <td>Nextjs/React</td>
            <td className={styles.site}>
              <a
                href="https://tapp.smithauto.us/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </td>
          </tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Typescript</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Sass</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Node</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Puppeteer</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>MongoDB</td><td></td></tr>
          {/* prettier-ignore */}
          <tr><td></td><td>Apache Server</td><td></td></tr>
        </tbody>

        {/* image */}
        <div className={styles.headerImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/AddressHelper/addressHelperIndexPageWide.png"
            alt="image of lufkin address helper website"
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Project Purpose and Goal</h2>
          <p>
            I started this project at the beginning of the covid pandemic.
            It&apos;s purpose was to easily provide the contact information for
            properties in the area. I completely rebuilt the project three times
            before the final iteration of the site was done. The first project
            was a simple card design built with raw html, js, and css. It only
            showed the owner contact information. The second rebuild was done
            with the react framework. I added google maps photos and additional
            land information for each location. All the page information was in
            a JSON file and would have to be individually loaded into the page.
            The third rebuild was by far the largest and most complex, as it
            includes all the above and removed the need for JSON data file. It
            uses a mongodb server at build time to populate into raw html.
          </p>

          <p>
            The final goal was to have a fully static html site that could be
            loaded like any webpage without the need for a special node server
            or database service.
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
              Nextjs/React with Typescript made the most sense for this web
              application because it&apos;s ability to export static html files
              dynamically. The backend data came from Node and Google&apos;s
              Puppeteer web scraper. The data was stored in a local MongoDB
              database server. The chosen platforms were used because of the
              smooth integration between them. All React components are built
              with a functional style.
            </p>
            <p>
              React hooks and session storage are also used throughout the
              project to maintain state when the page cards are deleted. State
              management is Redux-ToolKit, due to it&apos;s rock solid features
              and ease of use. Because this is a personal project, I host it
              locally on my person web/email server.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <div className={styles.cardImg}>
            <h3>View Mode</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/AddressHelper/addressHelperCard.png"
              alt="image of address helper card"
            />
          </div>
          <div className={styles.cardImg}>
            <h3>Search Mode</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/AddressHelper/addressHelperCardSearch.png"
              alt="image of address helper search card"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Problems and Thought Process</h2>
          <p>
            Like most projects, I ran into a few bumps along the way, one
            particularly difficult area was organization and structure of the
            code. Because of this project&apos;s size, I realized how important
            maintaining an organized structure would be.
          </p>

          <p>
            I worked hard to keep functional components pure and reusable as
            much possible and utilized props for many slight variations. I also
            used sass with css modules, because of the separation between JSX
            and style. This made the code much cleaner and prevented css
            specificity issues.
          </p>
        </div>
        {/* image */}
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Lessons Learned</h2>
          <p>
            The most important achievement I received from completing this App
            is the pride in having an idea, building the idea, and having it
            work better than expected. Much knowledge and growth happened during
            this journey. I have a better understanding of React Hooks, Git
            management, MongoDB and Typescript. I also learned a lot regarding
            code structure, organization and code refactoring. Typescript was a
            blessing for me as it caught most errors in advance and prevented
            multiple headaches.
          </p>
        </div>
      </section>
      <section className={styles.contactSection}>
        <Contact />
      </section>
    </div>
  )
}

export default AddressHelper
