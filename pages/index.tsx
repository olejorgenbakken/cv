import Head from 'next/head'
import Header from '../components/header/header'
import { work, education, volunteering, projects, languages, links } from '../lib/cv';
import Entry from '../components/cv/entry/entry';

import styles from '../styles/pages/index.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>OJ, designer</title>
        <meta name="description" content="Ole Jørgen, or OJ, or whatever else you feel like. Designer, mostly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className={styles.cv}>
          <div>
            <h2>Projects</h2>
            <ul className={styles.entries}>
              {projects.map((project) => (
                <li><Entry place={project.name} title={project.position} summary={project.summary} startDate={project.startDate} endDate={project.endDate} url={project.url} highlights={project.highlights} /></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Work</h2>
            <ul className={styles.entries}>
              {work.map((job) => (
                <li><Entry place={job.company} title={job.position} summary={job.summary} startDate={job.startDate} endDate={job.endDate} url={job.url} highlights={job.highlights} /></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            <ul className={styles.entries}>
              {education.map((school) => (
                <li><Entry place={school.institution} title={school.area} startDate={school.startDate} endDate={school.endDate} summary={school.summary} url={school.url} highlights={school.courses} /></li>
              ))}
            </ul>

          </div>
          <div>
            <h2>Volunteering</h2>
            <ul className={styles.entries}>
              {volunteering.map((volunteer) => (
                <li><Entry place={volunteer.organization} title={volunteer.position} startDate={volunteer.startDate} endDate={volunteer.endDate} summary={volunteer.summary} highlights={volunteer.highlights} /></li>
              ))}
            </ul>

          </div>
        </div>

        <aside>
          <h2>Languages</h2>
          <ul>
            {languages.map((language) => (
              <li>{language.language} - {language.fluency}</li>
            ))}
          </ul>
          <h2>Links</h2>
          <ul>
            {links.map((link) => (
              <li><a href={link.url}>{link.name}</a></li>
            ))}
          </ul>
        </aside>

      </main>
    </div>
  )
}
