import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Fade from 'react-reveal/Fade';
import DoneIcon from '@mui/icons-material/Done';
import './About.css';

function AboutApp() {
  const context = useContext(AppContext);
  function handlePage() {

    context.actions.addTask('about')
  }

  return (

    <Container id="about" sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <Box >

        <Fade bottom cascade >
          <Typography color="secondary" variant="h2">
            About me
          </Typography>
        </Fade>


        <Fade bottom cascade delay={500}>
          <Box className="about-text" sx={{ mt: 2 }}>
            <Typography sx={{ mt: 2 }} color="primary" variant="h6">
              I'm a Full-Stack Software Development Bootcamp graduate
              with a passion for learning and problem-solving,
              with an extensive background in various coding languages and
              I have a strong foundation in Full-Stack web development.
            </Typography>
          </Box>
        </Fade>

        <Fade bottom cascade delay={700}>
          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h6">
            My top Priorities
          </Typography>
          <InView rootMargin='0% 0% -25%' as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
          </InView>
          <Box className="priorities-text" sx={{ mt: 1 }}>
            <Typography color="primary" variant="body2">
              <DoneIcon fontSize='1rem' /><span>Intuitive design provide meaningful experiences to users.</span> <br />
              <DoneIcon fontSize='1rem' /><span>Website Accessibility Best Practices to Improve UX.</span> <br />
              <DoneIcon fontSize='1rem' /><span>I'm a firm believer that "less is more" design approach.</span> <br />
              <DoneIcon fontSize='1rem' /><span>Responsive web design that works across all screen sizes.</span> <br />
              <DoneIcon fontSize='1rem' /><span>Website speed, performance optimization best practices.</span>
            </Typography>
          </Box>
        </Fade>
  
        <Fade bottom cascade delay={1100}>
          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h6">
            Technologies I’ve worked with
          </Typography>
          <Box className="priorities-text">
            <Typography color="primary" component={'span'} variant="body2">
              <ul>
                <li>Front-End: HTML, CSS, JavaScript, React</li>
                <li>Back-End: Python, Flask, Django</li>
                <li>Databases: Postgres, MongoDB, MySQL</li>
              </ul>
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Container>

  );
}

export default AboutApp;