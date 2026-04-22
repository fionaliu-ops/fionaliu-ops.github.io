$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  const navbar_data = {
    title: enNavbarData.title,
    navbar_links: [
      {
        active: navbarLinks.home ? true : false,
        title: enNavbarData.Home,
        url: "/",
      },
      {
        active: navbarLinks.publications ? true : false,
        title: enNavbarData.publications,
        url: "/publications.html",
      },
      {
        active: navbarLinks.research ? true : false,
        title: enNavbarData.Research,
        url: "/research.html",
      },
      {
        active: navbarLinks.jobs ? true : false,
        title: enNavbarData.Jobs,
        url: "/jobs.html",
      },
      {
        active: navbarLinks.contact ? true : false,
        title: enNavbarData.Contact,
        url: "/contact.html",
      },
    ],
  };

  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              <a
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href=${link.url}
              >${link.title}</a>
            </li>`
      )
      .join("");
  }

  navbarData();
});
