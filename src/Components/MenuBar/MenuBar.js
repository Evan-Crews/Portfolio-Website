import './menubar.scss'
import linkedIn from '../../Icons/LinkedIn_icon_circle.svg'
function MenuBar() {
  return (
    <div className="mainMenu">
      <button className="resumeButton">Download Resume</button>
      <a href="https://www.linkedin.com/in/evan-crews/">
        <img src={linkedIn} id="linkedIn" alt="LinkedIn" size="sm" className="buttonIcons"/>
      </a>
      <button className='menuButton'>Button 2</button>
      <button className='menuButton'>Button 3</button>
    </div>
  )
}

export default MenuBar