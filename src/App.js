import './App.css';
import './styles.scss';
import React, { useEffect, useRef, useState } from 'react';
import { start, handleParticleAnimate } from './sketch-particles.js';
import { TfiUnlock } from 'react-icons/tfi';
import girl from './img1.jpg';
import hand from './img2.jpg';
import lantern from './img3.jpg';
import boxer from './img4.jpg';
import LineSection from './EducationSec.js';
import SkillLineSection from './SkillSec.js';

function App() {
  const canvasRef = useRef(null);
  const [animateLines, setAnimateLines] = useState(false);
  const [sectionText, setSectionText] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [password, setPassword] = useState('');
  const [context, setContent] = useState('');
  const [error, setError] = useState('');
  const [loggedin, setLoggedin] = useState(false);
  const [eduAnimation, setEduAnimation] = useState(false);

  const switchAnimation = (statement) => {
    setAnimateLines(statement);
    handleParticleAnimate(statement);
  };

  const setupSketch = async () => {
    const canvas = canvasRef.current;
    if (canvas) {
      await start(canvas);
    }
  };

  useEffect(() => {
    setupSketch();

    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.top-text') &&
        !event.target.closest('.section-text-bottom-two')
      ) {
        switchAnimation(false);
        setActiveSection(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleAnimate = (section) => {
    if (activeSection === section) {
      switchAnimation(false);
      setActiveSection(null);
      setSectionText(null);
    } else {
      switch (section) {
        case 'about':
          if (!context) return;
          const about = (
            <div
              className="perinfo"
              style={{
                alignItems: 'flex-start',
              }}
            >
              <div className="name">{context.ima}</div>
              <div className="phone-number">{context.numberuno}</div>
              <div
                className="address"
                style={{
                  textAlign: 'start',
                }}
              >
                {context.theplace}
              </div>
              <div className="email">{context.pochtovik}</div>
              <br />
              <div
                className="about-about"
                style={{
                  textAlign: window.innerWidth > 900 ? 'left' : 'justify',
                  width: window.innerWidth > 900 ? '80%' : '100%',
                }}
              >
                I started programming in the language 'Pascal' around 2000 but
                stopped because my life took a different direction. Now I'm glad
                to be able to pursue programming as a profession and it's social
                applications. At least in my experience the line between
                Front/Backend, DevOps, Management and Security was blurred, so
                being mostly practicing problem solution in the required field
                that comes on my way.
              </div>
            </div>
          );
          switchAnimation(true);
          setSectionText(about);
          setActiveSection(section);
          break;

        case 'education':
          if (!context?.education || !Array.isArray(context.education)) return;
          setEduAnimation(true);
          const education = (
            <>
              {context.education.map((exp, index) => LineSection(exp, index))}
            </>
          );
          switchAnimation(true);
          setSectionText(education);
          setActiveSection(section);
          break;

        case 'experience':
          if (!context?.experience || !Array.isArray(context.experience))
            return;
          const experience = (
            <div>
              {context.experience.map((exp, index) => LineSection(exp, index))}
            </div>
          );
          switchAnimation(true);
          setSectionText(experience);
          setActiveSection(section);
          break;

        case 'skills':
          if (!context) return;
          const skills = (
            <div className="skills-part">
              {context.skills.map((exp, index) => (
                <SkillLineSection exp={[exp[0], exp[1]]} index={index} />
              ))}
            </div>
          );
          switchAnimation(true);
          setSectionText(skills);
          setActiveSection(section);
          break;

        case 'poetry':
          if (!context) return;
          const poetry = (
            <div
              className="poetry-section"
              style={{
                display: 'flex',
                flexDirection: 'column',

                fontSize: window.innerWidth < 900 ? '0.54em' : '0.7em',
              }}
            >
              <div style={{ textAlign: 'end' }}>
                <pre>are ripples a part of water,</pre>
                <pre>is reflection a part of me,</pre>
                <pre>am I a thief of the border,</pre>
                <pre>between to see and to be?</pre>
              </div>

              <hr className="poetry-line" />

              <div style={{ textAlign: 'start' }}>
                <pre>Just a breath, one,</pre>
                <pre>and I’m a planet.</pre>
                <pre>A flock of birds, high in the air.</pre>
                <pre>And the silence of a still-bound chair,</pre>
                <pre>embracing the photon</pre>
                <pre>of the all-encompassing morning’s </pre>
                <pre>gentle glare.</pre>
              </div>

              <hr className="poetry-line" />
              <div style={{ textAlign: 'end' }}>
                <pre>I recall,</pre>
                <pre> I am happy,</pre>
                <pre>was and am.</pre>
                <pre>With eyes shut tight,</pre>
                <pre>I sink into </pre>
                <pre>what simply is.</pre>
              </div>

              <hr className="poetry-line" />

              <div style={{ textAlign: 'start' }}>
                <pre>I’ve tucked the morning in my coat.</pre>
                <pre>Thick mist afloat,</pre>
                <pre>and seagulls.</pre>
                <pre>All for the later, when I’ll take off</pre>
                <pre>the glasses of unrest,</pre>
                <pre>the dust of expectance,</pre>
                <pre>and look much closer...</pre>
                <pre>with a gaze </pre>
                <pre>that says </pre>
                <pre>“just as it is,”</pre>
                <pre>...and slide my hands back </pre>
                <pre>in my coat.</pre>
              </div>
            </div>
          );
          switchAnimation(true);
          setSectionText(poetry);
          setActiveSection(section);
          break;

        case 'photography':
          if (!context) return;
          const photo = (
            <div
              className="photo-section"
              style={{
                alignItems:
                  window.innerWidth <= 900 ? 'flex-end' : 'flex-start',
                top: window.innerWidth <= 1200 ? '35vw' : '50px',
              }}
            >
              <button>
                <img className="img" src={girl} alt="girl's hair" />
              </button>
              <button
                style={{
                  alignSelf:
                    window.innerWidth <= 900 ? 'flex-start' : 'flex-end',
                }}
              >
                <img
                  className="img"
                  src={hand}
                  alt="hand with a sigarette from the balcony"
                />
              </button>
              <button>
                <img className="img" src={boxer} alt="bent lantern" />
              </button>
              <button
                style={{
                  alignSelf:
                    window.innerWidth <= 900 ? 'flex-start' : 'flex-end',
                }}
              >
                <img className="img" src={lantern} alt="boxer" />
              </button>
            </div>
          );
          switchAnimation(true);
          setSectionText(photo);
          setActiveSection(section);
          break;

        case 'qualities':
          if (!context) return;
          const qualities = (
            <div
              className="qualities"
              style={{
                alignItems:
                  window.innerWidth <= 900 ? 'flex-end' : 'flex-start',
                paddingLeft: '10px',
              }}
            >
              {context.qualities.map((exp, index) => (
                <div className="qualy-text" index={index}>
                  {exp}
                </div>
              ))}
            </div>
          );
          switchAnimation(true);
          setSectionText(qualities);
          setActiveSection(section);
          break;

        default:
          break;
      }
    }
  };

  const handlePasswordSubmit = async () => {
    try {
      console.log('dima');
      const url =
        process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '';
      const response =
        password.trim().length > 0
          ? await fetch(url + '/api.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ password }),
            })
          : null;
      if (!response) return;
      const data = await response.json();
      if (data.status === 'success') {
        setLoggedin(true);
        setContent(data);
        setError('');
      } else {
        setError('wrong pass');
      }
    } catch (error) {
      setError('wrong pass');
    }
  };

  useEffect(() => {
    if (loggedin && context) {
      handleAnimate('about');
    }
  }, [loggedin]);

  return (
    <div className="app">
      <div
        className={`above-section `}
        style={{
          height: '35%',
          width: window.innerWidth <= 1200 ? '45%' : '20%',
        }}
      >
        <div className={`line-top ${animateLines ? 'animate-top' : ''}`}></div>
        <section
          className={`top-text`}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <section
            className={`section-text ${animateLines ? 'animate-text-top' : ''}`}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleAnimate('about');
              }}
              className={activeSection === 'about' ? 'active' : ''}
            >
              about
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleAnimate('education');
              }}
              className={activeSection === 'education' ? 'active' : ''}
            >
              education
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleAnimate('experience');
              }}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              experience
            </div>
          </section>
          <section
            className={`section-text-bottom-two ${animateLines ? 'animate-bottom-section-two' : 'de-animate-bottom-section-two'}`}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleAnimate('qualities');
              }}
              className={activeSection === 'qualities' ? 'active' : ''}
            >
              qualities
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (loggedin && context) handleAnimate('photography');
              }}
              className={activeSection === 'photography' ? 'active' : ''}
            >
              visuals
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
                if (loggedin && context) handleAnimate('poetry');
              }}
              className={activeSection === 'poetry' ? 'active' : ''}
            >
              poetry
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleAnimate('skills');
              }}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              skills
            </div>
          </section>
        </section>
      </div>

      <div
        className="pic"
        style={{
          height: '35%',
          width: window.innerWidth <= 1200 ? '45%' : '20%',
        }}
      >
        <section className="pic-content">
          <div
            className={`line line-one ${animateLines ? 'animate-one' : ''}`}
          ></div>
        </section>
        <div
          className={`line line-two ${animateLines ? 'animate-two' : ''}`}
        ></div>
        <canvas
          ref={canvasRef}
          className={`canvas-pic`}
          style={{ marginTop: '1%', zIndex: 1 }}
        ></canvas>
      </div>

      <div
        className={`bottom-section `}
        style={{
          height: '35%',
          width: window.innerWidth <= 1200 ? '45%' : '20%',
        }}
      >
        <section
          className={`section-text-bottom ${animateLines ? 'animate-bottom-section' : ''}`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleAnimate('skills');
            }}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            skills
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (loggedin && context) handleAnimate('poetry');
            }}
            className={activeSection === 'poetry' ? 'active' : ''}
          >
            poetry
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              if (loggedin && context) handleAnimate('photography');
            }}
            className={activeSection === 'photography' ? 'active' : ''}
          >
            visuals
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (loggedin && context) handleAnimate('qualities');
            }}
            className={activeSection === 'qualities' ? 'active' : ''}
          >
            qualities
          </div>
        </section>
        <div
          className={`line-bottom ${animateLines ? 'animate-bottom' : ''}`}
        ></div>
        {!loggedin && (
          <div className="password-section">
            <input
              type="password"
              id="pass input"
              value={password}
              placeholder="   pass"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handlePasswordSubmit();
                }
              }}
            />
            <TfiUnlock
              onClick={handlePasswordSubmit}
              className="submit"
              color="black"
            />
            {error && <p className="error">{error}</p>}
          </div>
        )}
      </div>
      <div className={`main-text ${animateLines ? 'main-text-animate' : ''}`}>
        {sectionText}
      </div>
    </div>
  );
}

export default App;
