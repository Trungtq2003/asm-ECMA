const MainNav = () => {
    return `
    <nav class="nav">
        <img
          src="img/logo-fix.png"
          alt="Bankist logo"
          class="nav__logo"
          id="logo"
          designer="Jonas"
          data-version-number="3.0"
        />
        <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link" href="#section--1">About</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--2">Work</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--3">Contact</a>
          </li>
          <li class="nav__item">
            <a class="nav__link nav__link--btn btn--show-modal" href="#"
              >Sign in</a
            >
          </li>
        </ul>
      </nav>
    `;
};
export default MainNav;