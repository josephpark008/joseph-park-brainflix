import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import './NavHeader.scss';
import Buttons from "../Buttons/Buttons";
import uploadIcon from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';

export default function NavHeader() {
  return (
    <>
      <div className="nav">
        <img className="nav__logo" src={logo} alt="Brainflix logo" />
        <input style={{ backgroundImage: `url(${searchIcon})` }} className="nav__search" type="text" placeholder="Search" />
        <img className="nav__avatar" src={avatar} alt="avatar image" />
        <Buttons ButtonClass='nav__upload-button' ButtonText='UPLOAD' ButtonIcon={uploadIcon} class/>
        
      </div>
    </>
  );
}


// < className="nav__upload-button">
