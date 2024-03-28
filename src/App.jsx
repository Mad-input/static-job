
import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import data from './data.json'
import '@fontsource-variable/league-spartan';

function App() {
  const   [jobs, setJobs] = useState(data)
  const filterdJobs = (type,tag)=> {
      const newJobs = jobs.filter(job => job[type].includes(tag))
      setJobs(newJobs)
  }
  return (
    <div className='contain'>
     <header></header>
     <main>

      <section className='jobs'>
          {
            jobs.map(job => (
              <Card 
              key={crypto.randomUUID()}
              show={filterdJobs}
              logo={job.logo} 
              company={job.company} 
              resent={job.new} 
              fetured={job.featured}
              position={job.position}
              role={job.role}
              location={job.location}
              level={job.level}
              posted={job.postedAt}
              contract={job.contract}
              tools={job.tools}
              languages={job.languages}
              ></Card>
            ))
          }
      </section>

     </main>
    </div>
  )
}

export default App
