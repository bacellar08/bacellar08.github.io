import '../styles/resume.css'
import ResumeFile from '../img/Alexandre+Bacellar+-+Resume+2023+Updated.pdf'

const MyResume = () => {

    const downloadResume = () => {

        console.log('Downloading file...')
      };

  return (
    <div className="resume-bg">
    <>
    <div className="resume-info">
    <h1>Alexandre Bacellar de Souza Rocha</h1>
    <p>Lauro de Freitas, Bahia, Brasil</p>
    <p><span>Phone:</span> +5571997010339</p>
    <p><span>E-mail:</span> alexandre.bacellar@hotmail.com</p>
    <p><span>Linkedin:</span> https://www.linkedin.com/in/alexandre-bacellarr/</p>
    <p><span>Github:</span> github.com/bacellar08</p>
    </div>
    
<div className="resume-info">
<h2>Academic Formation</h2>
<ul>
<li><span>Universidade Salvador</span> - Bachelor, Systems Analysis and Development - Currently Graduating.</li>
<li><span>Alura</span> - Front End Training - January 2023.</li>
<li><span>SAGA - School of Art, Game and Animation</span> - Computer Graphics, Digital Arts and Image Processing - October 2015.</li>
</ul>
</div>

<div className="resume-info">
<h2>Certificates</h2>
<ul>
<li><span>The Complete 2023 Web Development Bootcamp - App Brewery - Udemy</span> - Hours: 65,5 hours.</li>
<li><span>React: developing with JavaScript - Alura</span> - Hours: 14 hours.</li>
<li><span>HTML5 and CSS3 Degree - Alura</span> - Hours: 35 hours.</li>
<li><span>JAVASCRIPT - Curso em Vídeo</span> - Hours: 40 hours.</li>
<li><span>Front-End Degree - Alura</span> - Hours: 115 hours.</li>
</ul>
</div>

<div className="resume-info">
<h2>Languages</h2>
<ul>
<li>Portuguese (<span>Native</span>)</li>
<li>English (<span>Fluent</span>)</li>
<li>French (<span>Intermediate</span>)</li>
</ul>
</div>

<div className="resume-info">
<h2>Professional Experiences</h2>
<h3>Informind</h3>
<ul>
<li>Position: Art Director / Web Developer</li>
<li>Period: August 2020 - November 2021.</li>
<li>Creation and development of landing pages.</li>
<li>Photography, editing and image capturing. Creation of logos and visual identity. Creation of arts for social media.</li>
</ul>

<h3>L.F. Marketing</h3>
<ul>
<li>Position: Art Director</li>
<li>Period: October 2018 - May 2019.</li>
<li>Creation of arts for social media, logos, visual identity.</li>
</ul>

<h3>Lego Comunicação</h3>
<ul>
<li>Position: Art Director</li>
<li>Period: August 2017 - June 2018.</li>
<li>Creation of arts for social media, logos, signs, flyers, folders. Filming, photography, video
editing, animation and image processing.</li>
</ul>


<h3>Sebrae Bahia</h3>
<ul>
<li>Position: Marketing Intern - Graphic Design</li>
<li>Period: May 2017 - October 2018</li>
<li>Creation of pieces for social media, logos, billboards, flyers, etc.</li>
</ul>
</div>

<a href={ResumeFile} download><button className='btn' onClick={downloadResume}>Download</button></a>
</></div>
  )
}

export default MyResume