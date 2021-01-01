/* *****variables***** */
const filters = document.getElementById("filters");
const filterBtns = document.getElementById("filter-btns");
const btnRemoveFilter = document.querySelector(".icon-remove-container");
const btnClearFilters = document.getElementById("btn-clear");
const listings = document.getElementById("listings");
const filter = document.querySelector("p.filter");

/* *****on load***** */
addListingDetails(listingsData);

/* *****functions***** */
function createListing(job) {
  // create listing element with class 'listing'
  let listing = document.createElement("div");

  // add job details
  listing.innerHTML = `
  <img src="${job.logo}" alt="Company Logo" class="company-logo" />
  <div class="job-info">
  <p class="company-name">${job.company}</p>
  <p class="new" id="new-${job.id}">${job.new}</p>
  <p class="featured" id="featured-${job.id}">${job.featured}</p>
  <p class="job-title">${job.position}</p>
  <div class="other-info">
  <p class="other-info-item date-listed">${job.postedAt}</p>
  <div class="other-info-item dot"></div>
  <p class="other-info-item duration">${job.contract}</p>
  <div class="other-info-item dot"></div>
  <p class="other-info-item location">${job.location}</p>
  </div>
  </div>
  <div class="filters" id="filters-${job.id}"></div>
  `;

  // add id and classes
  listing.setAttribute("id", `listing-${job.id}`);
  listing.classList.add(`listing`);
  listing.classList.add(`${job.level.toLowerCase()}`);
  listing.classList.add(`${job.role.toLowerCase()}`);

  // display listing
  listings.appendChild(listing);
}

function hideElement(el) {
  el.style.display = "none";
}

function addListingDetails(data) {
  data.forEach((listing) => {
    createListing(listing);

    let listingEl = document.getElementById(`listing-${listing.id}`);
    let newEl = document.getElementById(`new-${listing.id}`);
    let featuredEl = document.getElementById(`featured-${listing.id}`);

    // check if listing is new and/or featured
    if (listing.new) {
      newEl.innerHTML = "NEW!";
    } else {
      hideElement(newEl);
    }

    if (listing.featured) {
      featuredEl.innerHTML = "FEATURED";
      listingEl.classList.add("featured");
    } else {
      hideElement(featuredEl);
    }

    // add role element
    if (listing.role) {
      createFilterElement(listing.role, listing.id);
    }

    // add level element
    if (listing.level) {
      createFilterElement(listing.level, listing.id);
    }

    // add tools to listing element class list
    if (listing.tools) {
      listing.tools.forEach((tool) => {
        listingEl.classList.add(tool.toLowerCase());

        // add tools filter elements
        createFilterElement(tool, listing.id);
      });
    }

    // add languages to listing element class list
    if (listing.languages) {
      listing.languages.forEach((language) => {
        listingEl.classList.add(language.toLowerCase());

        // add tools filter elements
        createFilterElement(language, listing.id);
      });
    }
  });
}

function createFilterElement(a, b) {
  let filters = document.getElementById(`filters-${b}`);

  let filterEl = document.createElement("p");
  //   filterEl.classList.add("filter");
  filterEl.innerHTML = `${a}`;
  filterEl.className = `filter ${a.toLowerCase()}`;
  filters.appendChild(filterEl);
}

function createFilterBtn(fe) {
  let filterBtn = document.createElement("div");

  filterBtn.innerHTML = `
            <p class="filter-name">${fe}</p>
            <div class="icon-remove-container">
              <svg
                class="icon-remove"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
              >
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                />
              </svg>
            </div>
  `;

  filterBtn.className = `filter-btn ${fe.toLowerCase()}`;

  filterBtns.appendChild(filterBtn);
}

function checkForFilters() {
  let btns = [...filterBtns.children];
  if (btns.length <= 0) {
    filters.style.display = "none";
    listings.classList.remove("filtered");
  }
}

function filterListings(x) {
  let listingEls = [...listings.children];

  listingEls.forEach((listingEl) => {
    if (!listingEl.classList.contains(x)) {
      listingEl.style.display = "none";
    }
  });
}

function unfilterListings(x) {
  let listingEls = [...listings.children];
  listingEls.forEach((listingEl) => {
    if (!listingEl.classList.contains(x)) {
      listingEl.style.display = "flex";
    }
  });
}

function showAllListings() {
  let listingEls = [...listings.children];
  listingEls.forEach((listingEl) => (listingEl.style.display = "flex"));
}

/* *****event listeners***** */
//add filter to selected filters
listings.addEventListener("click", (e) => {
  let clickedEl = e.target;
  let text = clickedEl.innerHTML;

  if (clickedEl.classList.contains("filter")) {
    let btns = [...filterBtns.children];

    // see if filter is already added
    let checkBtns = btns.some((btn) => {
      return btn.classList.contains(text.toLowerCase());
    });

    if (!checkBtns && btns.length <= 4) {
      createFilterBtn(text);
      filters.style.display = "flex";
      listings.classList.add("filtered");

      // filter listings
      filterListings(text.toLowerCase());
    }
  }
});

//clear all selected filters
btnClearFilters.addEventListener("click", () => {
  let btns = [...filterBtns.children];
  btns.forEach((btn) => btn.remove());
  filters.style.display = "none";
  listings.classList.remove("filtered");
  showAllListings();
});

// remove filter selected filters
filters.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-remove-container")) {
    let className = e.target.previousElementSibling.innerHTML;
    e.target.parentElement.remove();
    checkForFilters();
    unfilterListings(className.toLowerCase());

    // reset filters
    let btns = [...filterBtns.children];
    let btnClasses = btns.map((btn) => {
      let classes = btn.className;
      return (classes = classes.slice(11, classes.length));
    });
    btnClasses.forEach((btnClass) => filterListings(btnClass));

    // display all listings
    if ([...filterBtns.children].length < 1) {
      showAllListings();
    }
  }
});
