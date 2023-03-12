import React from "react";

const Header = (props) => {
  return (
    <>
      <nav className="navbar has-shadow is-white">
        <div className="navbar-brand">
          <div className="columns is-vcentered">
            <a className="navbar-item">
              <img
                className="image"
                src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                alt="logo"
              />
              <h3 className="is-size-4 has-text-weight-bold">Keep</h3>
            </a>
          </div>
        </div>

        <div className="column is-8 ml-6">
          <form>
            <div className="field">
              <p className="control has-icons-left">
                <input type="text" className="input" placeholder="Search" />
                <span className="icon is-large"></span>
              </p>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
