/**
 * @file Manages configuration of navigation shared throughout site
 * @description Adds nav section to body
 */
document.write(`<nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">
                    <button class="navbar-toggler"
                            type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onclick="showNav()">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="../index.html">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="nintendo.html">Nintendo</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="traditional.html">Traditional</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="youtube.html">YouTube</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            `)

/**
 * @func Toggle collapse class to show/hide navigation in small screens
 */
showNav = () => {
    let nav = document.getElementById("navbarNav")

     nav.classList.toggle("collapse")
}