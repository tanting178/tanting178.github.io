import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

import './header.css';

function Header() {
  // This is added to change the header style upon scrolling.
  // Ref: https://medium.com/@timothyde/change-header-appearance-when-scrolling-down-with-reacts-useeffect-hook-4b847acbc6fa
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setDocked(window.pageYOffset > 10),
      );
    }
  }, []);

  return (
    <div>
      {/* Image link - ref to use for later page */}
      {/* <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A> */}
      <NavBar className={`${docked ? 'dockedStyle' : ''}`}>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/about">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
