import React from 'react'
import SectionDivider from '../global/SectionDivider'

type Props = {}

const Skills = (props: Props) => {
  return (
    <section id="skills" className="container mx-auto w-full py-6 px-6">
      <SectionDivider/>
        <div>
            <h1 className="text-xl lg:text-2xl font-bold">Skills</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'> 
          <div>
            <h1>Languages</h1>
            <div>
              <h1>Python</h1>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills