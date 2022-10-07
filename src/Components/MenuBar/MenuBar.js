import './menubar.scss'
import linkedIn from '../../Icons/LinkedIn_icon_circle.svg'
import github from '../../Icons/github-svgrepo-com.svg'
function MenuBar() {
  return (
    <div className="mainMenu">
      <button className="resumeButton">Download Resume</button>
      <a className="resumeButton" href={require("../../Files/Evan Crews-Resume.pdf")} download="myResume">Download file</a>
      <a href="https://www.linkedin.com/in/evan-crews/">
        <img src={linkedIn} id="linkedIn" alt="LinkedIn" size="sm" className="buttonIcons"/>
      </a>
      <a href="https://github.com/Evan-Crews">
        <img src={github} id="linkedIn" alt="LinkedIn" size="sm" className="buttonIcons"/>
      </a>
    </div>
  )
}

export default MenuBar