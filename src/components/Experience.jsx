import TabList from './TabList'
import Job from './Job'

const Experience = () => {



const tabs = [
  { label: 'Informind',
  content: <Job role='Web Developer' company='Informind' period='June 2021 - June 2022'
  description={
  <>      
  <p>Creation and development of landing pages.</p><>Test</>
  </>
   }/>},
    { label: 'Informind',
      content: <Job role='Art Director' company='Informind' period='August 2020 - June 2021'
      description={
      <>      
      <p>Photography, editing and image capturing.</p> <p>Creation of logos and visual identity.</p> <p>Creation of arts for social media.</p>
      </>
       }/>},

    { label: 'L.F Marketing',
      content: <Job role='Art Director' company='L.F Marketing' period='October 2018 - May 2019'
      description={
      <>
      <p>Creation of arts for social media, logos, visual identity.</p>
      <>Test</>
      </>
      }/> },

    { label: 'Lego',
      content: <Job role='Art Director' company='Lego' period='August 2017 - June 2018'
      description={
      <>
      <p>Creation of arts for social media, logos, signs, flyers, folders.</p> <p>Filming, photography, video editing, animation and image processing.</p>
      </>
      }/> },

    
  ]
        
      

  return (
    <div className='experience-container container fade-in' id='experience' style={{width: '50%', margin: '0 auto'}}>
        <div className="experience-title title-box">
            <span style={{fontFamily: 'var(--font-mono)', fontWeight: '200', fontSize: '1.2rem'}}>02. </span>
            <h2>Where I’ve Worked</h2>
            <hr/>


            
        </div>
        <TabList tabs={tabs}/>
    </div>
  )
}

export default Experience