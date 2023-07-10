import { useState } from "react";
import "./Navbar.css";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  const isBigScreen = useMediaQuery({ query: "(min-width: 441px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 440px)" });

  return (
    <>
      <header className="nav_header">
        <nav className="nav_header_con">
          <div className="nav_group">Group 5</div>
          {isTabletOrMobile ? (
            <div>
              <button className="nav_button" onClick={menuHandler}>
                <img src="../images/icon-hamburger.svg"></img>
              </button>
              {showMenu && (
                <>
                  <div className="nav_list_con">
                    <div className="pseudo_triangle"></div>
                    <li className="nav_list">
                      <a>About</a>
                    </li>
                    <li className="nav_list">
                      {" "}
                      <a>Services</a>
                    </li>
                    <li className="nav_list">
                      <a>Projects</a>
                    </li>
                    <li className="nav_list nav_last_item">
                      <a>Contact</a>
                    </li>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="nav_list_lg_con">
              <li className="nav_list_lg">
                <button className="nav_bu">About</button>
              </li>
              <li className="nav_list_lg">
                {" "}
                <button className="nav_bu">Services</button>
              </li>
              <li className="nav_list_lg">
                <button className="nav_bu">Projects</button>
              </li>
              <li className="nav_list_lg">
                <button className="nav_bu">Contact</button>
              </li>
            </div>
          )}
        </nav>
        <div className="nav_quote">We are creatives</div>
        {isTabletOrMobile ? (
          <img className="nav_img" src="../images/mobile/image-header.jpg" />
        ) : (
          <img className="nav_img" src="../images/desktop/image-header.jpg" />
        )}
        {/* <img className="nav_img" src="../images/mobile/image-header.jpg" /> */}
        <img className="nav_arrow" src="../images/icon-arrow-down.svg" />
      </header>
    </>
  );
};

export default Navbar;
