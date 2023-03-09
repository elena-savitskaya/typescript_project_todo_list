import React from 'react'
import background from "../images/plan.webp"

export const AboutPage: React.FC = () => {
  return (
    <>
      <div className='container'>
        <h3 className="header col s12 teal-text text-lighten-2">What is the purpose of a to do list? </h3>
        <p>
        What is the purpose of a to do list? The main purpose of a to do list is to provide yourself with a list of your priorities in order to ensure that you don't forget anything and are able to effectively plan out your tasks so that they are all accomplished in the correct time frame.
        </p>
        <p>Todoist gives you the confidence that everything is organized and taken into account so that you can succeed in the things that are important to you.</p>  
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Start the day feeling calm and in control of the situation</h5>
                <p className="light">Get a clear picture of everything that needs to be done and don't lose sight of important tasks. Quick Add allows you to fix and organize tasks in seconds.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                <h5 className="center">Direct energy in the right direction</h5>
                <p className="light">Todoist highlights the right tasks at the right time, and you always know what to focus on next. Priority levels highlight the most important tasks for the day.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                <h5 className="center">Distribute your workload</h5>
                <p className="light">From business projects to shopping lists, distribute and close day-to-day tasks across shared projects. Assign tasks others and release your mental energy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h4 className="header col s12 teal-text">From Chaos to Structure</h4>
          </div>
        </div>
      </div>
      <div className="parallax"><img src={background} alt="background" /></div>
      </div>
    </>
  )
}
