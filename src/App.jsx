
import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import data from './data.json'
// Supports weights 100-900
import '@fontsource-variable/league-spartan';

function App() {
  const   [jobs, setJobs] = useState(data)
  return (
    <div className='contain'>
     <header></header>
     <main>

      <section className='jobs'>
          {
            jobs.map(job => (
              <Card key={crypto.randomUUID()}
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
              languajes={job.languages}
              ></Card>
            ))
          }
      </section>

     </main>
    </div>
  )
}

export default App
