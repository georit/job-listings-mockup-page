## The challenge

The challenge is to build out a job listing page and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Filtering

#### Option 1

Filter job listings based on the categories using the HTML `data-` attribute. In this option, you'd use the hardcoded content that already exists in the [index.html](./index.html) file.

The categories are:

- Role: Frontend, Backend, Fullstack
- Level: Junior, Midweight, Senior
- Languages: Python, Ruby, JavaScript, HTML, CSS
- Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)

So, if a job listing is for has the following categories `Frontend, Junior, JavaScript, React` your HTML data attributes would look like this `data-role="frontend" data-level="junior" data-languages="javascript" data-tools="react"`.

#### Option 2

Use the [data.json](./data.json) file to pull the data and then dynamically add the content. This would be perfect if you're looking to practice a JS library/framework like React, Vue, or Svelte.

To add a filter, the user needs to click on the tablets on the right-side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.

  <!-- Item Start -->

Photosnap
New!
Featured
Senior Frontend Developer
1d ago
Full Time
USA only

  <!-- Role -->

Frontend

  <!-- Level -->

Senior

  <!-- Languages -->

HTML
CSS
JavaScript

  <!-- Item End -->

  <!-- Item Start -->

Manage
New!
Featured
Fullstack Developer
1d ago
Part Time
Remote

  <!-- Role -->

Fullstack

  <!-- Level -->

Midweight

  <!-- Languages -->

Python

  <!-- Tools -->

React

  <!-- Item End -->

  <!-- Item Start -->

Account
New!
Junior Frontend Developer
2d ago
Part Time
USA only

  <!-- Role -->

Frontend

  <!-- Level -->

Junior

  <!-- Languages -->

JavaScript

  <!-- Tools -->

React
Sass

  <!-- Item End -->

  <!-- Item Start -->

MyHome
Junior Frontend Developer
5d ago
Contract
USA only

  <!-- Role -->

Frontend

  <!-- Level -->

Junior

  <!-- Languages -->

CSS
JavaScript

  <!-- Item End -->

  <!-- Item Start -->

Loop Studios
Software Engineer
1w ago
Full Time
Worldwide

  <!-- Role -->

Fullstack

  <!-- Level -->

Midweight

  <!-- Languages -->

JavaScript
Ruby

  <!-- Tools -->

Sass

  <!-- Item End -->

  <!-- Item Start -->

FaceIt
Junior Backend Developer
2w ago
Full Time
UK only

  <!-- Role -->

Backend

  <!-- Level -->

Junior

  <!-- Languages -->

Ruby

  <!-- Tools -->

RoR

  <!-- Item End -->

  <!-- Item Start -->

Shortly
Junior Developer
2w ago
Full Time
Worldwide

  <!-- Role -->

Frontend

  <!-- Level -->

Junior

  <!-- Languages -->

HTML
JavaScript

  <!-- Tools -->

Sass

  <!-- Item End -->

  <!-- Item Start -->

Insure
Junior Frontend Developer
2w ago
Full Time
USA only

  <!-- Role -->

Frontend

  <!-- Level -->

Junior

  <!-- Languages -->

JavaScript

  <!-- Tools -->

Vue
Sass

  <!-- Item End -->

  <!-- Item Start -->

Eyecam Co.
Full Stack Engineer
3w ago
Full Time
Worldwide

  <!-- Role -->

Fullstack

  <!-- Level -->

Midweight

  <!-- Languages -->

JavaScript
Python

  <!-- Tools -->

Django

  <!-- Item End -->

  <!-- Item Start -->

The Air Filter Company
Front-end Dev
1mo ago
Part Time
Worldwide

  <!-- Role -->

Frontend

  <!-- Level -->

Junior

  <!-- Languages -->

JavaScript

  <!-- Tools -->

React
Sass

  <!-- Item End -->
