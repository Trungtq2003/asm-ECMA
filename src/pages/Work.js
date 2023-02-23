import Projects from "./Projects";
import Technology from "./Technology";

const Works = () => {
    return `
    <section class="section" id="section--2">
      ${Projects()}
      ${Technology()}
    </section>
    `;
};

export default Works;
