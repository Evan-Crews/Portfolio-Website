import './menubar.scss'
import linkedIn from '../../Icons/LinkedIn_icon_circle.svg'
import github from '../../Icons/github-svgrepo-com.svg'
function MenuBar() {
  return (
    <div className="mainMenu">
      <div>
        <h1 className="titleName">
          Evan Crews
        </h1>
      </div>
      <div className='buttonsDiv'>
        {/* <button className="resumeButton">Download Resume</button> */}
        <a className="resumeButton" href={require("../../Files/Evan Crews-Resume.pdf")} download="myResume">Download Resume</a>
        <a href="https://www.linkedin.com/in/evan-crews/">
          <img src={linkedIn} id="linkedIn" alt="LinkedIn" size="sm" className="buttonIcons"/>
        </a>
        <a href="https://github.com/Evan-Crews">
          <img src={github} id="linkedIn" alt="LinkedIn" size="sm" className="buttonIcons"/>
        </a>
      </div>
    </div>
  )
}

export default MenuBar