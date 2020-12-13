// Creates a navbar for each page 

function createNavBar() {
 
  const navbarHTML=  `
  <div class="container-fluid py-4">
    <a class="navbar-brand" href="./index.html">Digital Equity Solutions for Lane County</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbar" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item" id="home">
          <a class="nav-link mr-4 text-primary" href="./index.html">Home</a>
        </li>
        <li class="nav-item" id="providers">
          <a class="nav-link mr-4" href="./providers.html">Providers</a>
        </li>
        <li class="nav-item" id="more">
          <a class="nav-link" href="./about.html">Learn more</a>
        </li>
      </ul>
    </div>
  </div>
  `;

  document.getElementById("navbar").innerHTML = navbarHTML;
}

function renderNavBar() {

  createNavBar();

  let activeLocation = window.location.href;

  if (activeLocation.includes("index")){
    let activeLink = document.getElementById("home");
    activeLink.classList.add("active");
  }
  else if (activeLocation.includes("provider")){
    let activeLink = document.getElementById("providers");
    activeLink.classList.add("active");
  }
  else if (activeLocation.includes("about")) {
    let activeLink = document.getElementById("more");
    activeLink.classList.add("active");
  }
}


window.onload = renderNavBar();
