import MainNav from "./Nav";

const Header = () => {
    return `
        <header>
            ${MainNav()}
            <div class="header__title m-auto max-w-6xl">
                <h1>
                Hi, I'm Trịnh Quốc Trung
                </h1>
                <h4>I'm website developer</h4>
                <button class="btn--text btn--scroll-to">About me &DownArrow;</button>
                <img
                src="img/avatar.jpg"
                class="header__img"
                alt="Minimalist bank items"
                />
        </div>
        </header>
    `;
};
export default Header;