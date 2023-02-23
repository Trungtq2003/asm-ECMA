const AboutPage = () => {
    return `
    <section class="section" id="section--1">
    <div class="section__title">
      <h2 class="section__description">About</h2>
      <h3 class="section__header">
        Web Developer
      </h3>
    </div>

    <div class="features">
      <img
        src="img/code.jpg"
        data-src="img/code.jpg"
        alt="Computer"
        class="features__img"
      />
      <div class="features__feature">
        <div class="features__icon">
          <svg>
            <use xlink:href="img/icons.svg#icon-monitor"></use>
          </svg>
        </div>
        <h5 class="features__header">knowledge</h5>
        <p>
          I am a front-end web developer. I can fluently use the following programming languages ​​HTML, CSS3, Javascript,...
        </p>
      </div>

      <div class="features__feature">
        <div class="features__icon">
            <img src="img/file-earmark-code.svg" alt="">
        </div>
        <h5 class="features__header">Development projects</h5>
        <p>
          I can provide the code and use it according to the customer's request perfectly.
        </p>
      </div>
      <img
        src="img/project.png"
        data-src="img//project.png"
        alt="Plant"
        class="features__img"
      />

      <img
        src="img/1.jpg"
        data-src="img/1.jpg"
        alt="Credit card"
        class="features__img"
      />
      <div class="features__feature">
        <div class="features__icon">
          <svg>
            <use xlink:href="img/icons.svg#icon-trending-up"></use>
          </svg>
        </div>
        <h5 class="features__header">Increase web interaction</h5>
        <p>
          I also make the website more & more interactive with web animations.
        </p>
      </div>
    </div>
  </section>
    `;
};
export default AboutPage;
