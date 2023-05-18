import { ArrowRight } from '@mui/icons-material';
import '../styles/experience.css';

const Job = (props) => {
  const descriptionParagraphs = props.description.props.children.filter((child) => child.type === 'p');

  return (
    <div>
      <h3 className='job-role'>{props.role} <span>@ {props.company}</span></h3>
      <p className='job-period'>{props.period}</p>
      <div className='job-description'>
        {descriptionParagraphs.map((paragraph, index) => (
          <div className='descripton-paragraph' key={index}>
            <ArrowRight style={{color: "var(--primaryColor)"}} />
            <p>{paragraph.props.children}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Job;
