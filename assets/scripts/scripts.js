var lang = localStorage.getItem("lang");
var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // ---------- Language Handler
  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  if (lang === "fa") {
    document.getElementById("content_wrapper").classList.add("rtl_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").innerText = "🇨🇳";
      document.getElementById("languageText").innerText = "CN";
    }
  } else {
    document.getElementById("content_wrapper").classList.add("ltr_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").innerText = "🇨🇳";
      document.getElementById("languageText").innerText = "CN";
    }
  }

  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
      {
        name: globalData.whatsapp,
        active: globalData.whatsapp ? true : false,
        img: "../assets/images/icons/whatsapp.png",
      },
      {
        name: globalData.twitter,
        active: globalData.twitter ? true : false,
        img: "../assets/images/icons/twitter.png",
      },
      {
        name: globalData.linkedin,
        active: globalData.linkedin ? true : false,
        img: "../assets/images/icons/linkedin.png",
      },
      {
        name: globalData.github,
        active: globalData.github ? true : false,
        url: "/",
        img: "../assets/images/icons/github.png",
      },
      {
        name: globalData.resume,
        active: globalData.resume ? true : false,
        url: "/",
        img: "../assets/images/icons/resume.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;
    document.getElementById("home_job_title").innerText =
      lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText =
      lang === "en" ? enHomePageData.home_title : faHomePageData.home_title;
    document.getElementById("home_content").innerHTML =
      lang === "en" ? enHomePageData.home_content : faHomePageData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Jobs page data
  function jobsData() {
    document.getElementById("page_title").innerText = enExperiencesPageData.title;

    document.getElementById("jobs_title").innerHTML =
      enExperiencesPageData.title;

    const renderExperienceSection = (title, items) => `
      <section class="experience_section">
        <h2 class="experience_section_title">${title}</h2>
        <div class="experience_list">
          ${[...items]
            .sort((a, b) => Number(b.startData) - Number(a.startData))
            .map(
              (item) => `
                <article class="experience_item">
                  <div class="experience_year">${item.startData}${
                item.endDate ? `–${item.endDate}` : "–Present"
              }</div>
                  <div class="experience_details">
                    <h3>${item.title}</h3>
                    ${item.company ? `<div class="experience_subtitle">${item.company}</div>` : ""}
                    ${item.location ? `<div class="experience_location">${item.location}</div>` : ""}
                    ${item.abstract ? `<p>${item.abstract}</p>` : ""}
                    ${
                      item.achievements?.length
                        ? `<ul>${item.achievements
                            .map((achievement) => `<li>${achievement}</li>`)
                            .join("")}</ul>`
                        : ""
                    }
                  </div>
                </article>`
            )
            .join("")}
        </div>
      </section>`;

    document.getElementById("jobs_data").innerHTML =
      renderExperienceSection("Education", enExperiencesPageData.education) +
      renderExperienceSection("Work Experience", enExperiencesPageData.work);
  }

  if (pathname === "/jobs" || pathname === "/experiences") {
    jobsData();
  }

  // Contact page data
  const contact_data = {
    contact_title: lang === "en" ? "Contact" : "ارتباط با من",
    contact_items: [
      {
        img: "../assets/images/icons/location.png",
        title: lang === "en" ? globalData.enAddress : globalData.faAddress,
        active: globalData.enAddress || globalData.faAddress ? true : false,
      },
      {
        img: "../assets/images/icons/phone.png",
        title: globalData.phone,
        active: globalData.phone ? true : false,
      },
      {
        img: "../assets/images/icons/mail.png",
        title: globalData.email,
        active: globalData.email ? true : false,
      },
      {
        img: "../assets/images/icons/twitter.png",
        url: globalData.twitter,
        name: globalData.twitterTitle,
        active: globalData.twitter ? true : false,
      },
      {
        img: "../assets/images/icons/whatsapp.png",
        url: globalData.whatsapp,
        name: globalData.whatsappTitle,
        active: globalData.whatsapp ? true : false,
      },
      {
        img: "../assets/images/icons/google-scholar.png",
        url: globalData.googleScholar,
        name: globalData.googleScholarTitle,
        active: globalData.googleScholar ? true : false,
      },
      {
        img: "../assets/images/icons/orcid.png",
        url: globalData.orcid,
        name: globalData.orcidTitle,
        active: globalData.orcid ? true : false,
      },
      {
        img: "../assets/images/icons/github.png",
        url: globalData.github,
        name: globalData.githubTitle,
        active: globalData.github ? true : false,
      },
      {
        img: "../assets/images/icons/linkedin.png",
        url: globalData.linkedin,
        name: globalData.linkedinTitle,
        active: globalData.linkedin ? true : false,
      },
    ],
  };

  function contactData() {
    document.getElementById("page_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_data").innerHTML =
      contact_data.contact_items
        .filter((item) => item.active)
        .map(
          (link) =>
            `<li>
              <img src=${link.img} alt=${link.title} /> 
              ${
                link.url
                  ? `<a href=${link.url} target='_blank'>
                      ${link.name ? link.name : link.url} 
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
        )
        .join("");
  }

  if (pathname === "/contact") {
    contactData();
  }
});
