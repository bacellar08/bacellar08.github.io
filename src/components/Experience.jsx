import TabList from './TabList'
import Job from './Job'

const Experience = () => {



const tabs = [
    { label: 'Informind',
      content: <Job role='Art Director' company='Informind' period='August 2020 - November 2021'
      description={
      <>      
      <p>Photography, editing and image capturing.</p> <p>Creation of logos and visual identity.</p> <p>Creation of arts for social media.</p>
      </>
       }/>},

    { label: 'Lego',
      content: <Job role='Art Director' company='Lego' period='August 2017 - June 2018'
      description={
      <>
      <p>Creation of arts for social media, logos, signs, flyers, folders.</p> <p>Filming, photography, video editing, animation and image processing.</p>
      </>
      }/> },

    { label: 'L.F Marketing',
      content: <Job role='Art Director' company='L.F Marketing' period='October 2018 - May 2019'
      description={
        <>
        <p>Creation of arts for social media, logos, visual identity.</p>
        <>Test</>
        </>
        }/> },
  ]
        
      

  return (
    <div className='experience-container container fade-in' style={{width: '50%', margin: '0 auto'}}>
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