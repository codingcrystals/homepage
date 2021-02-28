[Homepage](https://cs50.harvard.edu/x/2021/psets/8/homepage/)
=======

[CS50](https://cs50.harvard.edu/x/2021/)
-----------
### Overview
For my homepage project, I've developed a website that features reviews of some of my sons favorite games and entertainment. Stored in an object, the reviews are displayed as
Bootstrap cards for each category page.


### [Specification](https://cs50.harvard.edu/x/2021/psets/8/homepage/#specification)

Implement in your homepage directory a website that must:

- [x] Contain at least four different .html pages, at least one of which is index.html (the main page of your website)
  <details>
      <summary><center><sub>Satisfied</sub></center></summary>

      ```
          .
          ├── ...
          ├── reviews
          │   ├── nintendo.html
          │   ├── traditional.html
          │   └── youtube.html
          └── index.html
          ...
      ```

  </details>

- [x] it should be possible to get from any page on your website to any other page by following one or more hyperlinks.
  <details>
      <summary><center><sub>Satisfied</sub></center></summary>
      <p><code>index.js</code> and <code>js/nav.js</code> control a nav structure for all pages</p>
  </details>


- [ ] Use at least ten (10) distinct HTML tags besides `<html>, <head>, <body>, and <title>`.
  <details>
      <summary><center><sub>Satisfied</sub></center></summary>
      <ol>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">a</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">button</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div">div</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li">li</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav">nav</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script">script</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span">span</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul">ul</a></li>
      </ol>
  </details>

- [x] Integrate one or more features from Bootstrap into your site.
  <details>
      <summary><center><sub>Satisfied</sub></center></summary>
      <ul>
          <li><a href='https://getbootstrap.com/docs/5.0/components/navbar/'>Nav Bar</a></li>
      </ul>
  </details>

- [ ] Have at least one stylesheet file of your own creation, styles.css
    - [ ] At least five (5) different CSS selectors
<details>
  <summary><center><sub>Unsatisfied</sub></center></summary>
  <ol type="I">
      <li value="1"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors">Class selectors</a></li>
  </ol>
</details>
    - [ ] At least five (5) different CSS properties
<details>
  <summary><center><sub>Unsatisfied</sub></center></summary>
  <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">Width</a></li>
  </ul>
</details>


- [x] Integrate one or more features of JavaScript into your site to make your site more interactive.
  <details>
      <summary><center><sub>Satisfied</sub></center></summary>
      <p>The navigation bar is written to each page via <code>document.write</code></p>
      <p>A toggle function is fired to control the collapse/uncollapsed hamburger menu in the navigation bar on small screens.</p>
  </details>

- [x] Ensure that your site looks nice on browsers both on mobile devices as well as laptops and desktops.
  <details>
      <summary><center><sub>Satisfied</sub></center></summary>
      <p>Bootstrap is equiped for responsive designs. The navigation shrinks to a hamburger menu on smaller screens.</p>
  </details>

