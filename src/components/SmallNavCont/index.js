import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'
import {AiTwotoneHome, AiFillCloseCircle} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
import {GiBookshelf} from 'react-icons/gi'
import {IoMdLogOut} from 'react-icons/io'
import HeaderContext from '../../HeaderContext/HeaderContext'
import './index.css'

class SmallNavCont extends Component {
  render() {
    return (
      <HeaderContext.Consumer>
        {value => {
          const {theme, onClickThemeChanger, onClickNavIcon} = value

          const themeChanger = () => {
            onClickThemeChanger()
          }

          const onClickCloseIcon = () => {
            onClickNavIcon()
          }
          const onClickLogoutIcon = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          const iconColor = theme ? 'white' : 'black'
          const navCont = theme ? 'is-dark' : 'is-white'
          return (
            <div className={navCont}>
              <ul className="small-nav-links-cont">
                <li>
                  <button
                    type="button"
                    className="small-theme-btn"
                    onClick={themeChanger}
                  >
                    {theme ? (
                      <BsSun color="#ffffff" size={17} />
                    ) : (
                      <FaMoon size={17} />
                    )}
                  </button>
                </li>

                <li>
                  <Link to="/">
                    <AiTwotoneHome color={iconColor} />
                  </Link>
                </li>
                <li>
                  <Link to="/shelf">
                    <GiBookshelf size={20} color={iconColor} />
                  </Link>
                </li>
                <li>
                  <Link to="/fav">
                    <MdFavorite color={iconColor} />
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="small-logout-btn"
                    onClick={onClickLogoutIcon}
                  >
                    <IoMdLogOut size={20} color={iconColor} />
                  </button>
                </li>
                <li onClick={onClickCloseIcon}>
                  <AiFillCloseCircle size={20} color={iconColor} />
                </li>
              </ul>
            </div>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default withRouter(SmallNavCont)
