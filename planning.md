# Project plan

## Strategy

**What do we do?**
- We are a website app that offers stats and records for the top modern men's professsional tennis players.
  
**What are we creating?**

- A functional website that hightlights the modern champions and offer a way for the user to access the modern records of men's professional singles tennis since the Open Era began in 1968. 
We want a functional, attractive, easy to navigate website that makes it easy for the user to find the information they need.

**The audience, who is it for?**

- The website app is aimed at all tennis fans and anyone with an interest in modern men's professional tennis.
- This audience would include fans, journalists and historians who want a quick, easy to use app to browse the records.

**What do we want?**

- We want an attractive website that showcases modern's men's professional tennis records, and makes the website visitor excited about visiting the website to check out a certain statistic about a tournament or player.

**What does the user want when they visit the website?**

- To be able to understand immediately what information is available on modern men's tennis records.
- Ease of navigation, to find the information that they want quickly.
- To be able to search and paginate through the records to find the inforrmation they need.

**Customer Stories**

- As a customer, I would like to be able to find information on modern men's tennis stars and tournament records.
- As a customer, I would like to be able to naviagate easily around the site to find the information that I need without getting confused.
- As a customer, I would like to easily search for the tournament winners of a particular decade using pagination.
- As a customer, I would like to have an easy way to search for a particular champion and find out how many times he has won a particular Grand Slam tournament. For example, in what years did Roger Federer win Wimbledon?

## Scope

**Webpages**

- Homepage
- Graph page
- Australian Open tournament page
- French Open tournament page
- Wimbledon tournament page
- US Open tournament page

**Homepage**

- Navbar/header
- 7 x Cards with info on the biggest modern men's tennis champions.
- Buttons on each card with a popout modal with their main statistics.

**Graph page**
- Navbar/header
- Visual bar chart which lists the biggest tennis champions and the total number of Grand Slam tournaments won.

**Australian Open page**
- Navbar/header
- Table that loads on the page with records for the tournament in the Open Era (since 1968).
- Pagination that allows the user to view the winners by each decade.
- Searchbox that allows the user to search for a particular champion and find the winning years, and the runner up, if any.

**French Open page**
- Navbar/header
- Table that loads on the page with records for the tournament in the Open Era( since 1968).
- Pagination that allows the user to view the winners by each decade.
- Searchbox that allows the user to search for a particular champion and find the winning years, and the runner up, if any.


**Wimbledon page**
- Navbar/header.
- Table that loads on the page with records for the tournament in the Open Era( since 1968).
- Pagination that allows the user to view the winners by each decade.
- Searchbox that allows the user to search for a particular champion and find the winning years, and the runner up, if any.


**US Open page**
- Navbar/header.
- Table that loads on the page with records for the tournament in the Open Era( since 1968).
- Pagination that allows the user to view the winners by each decade.
- Searchbox that allows the user to search for a particular champion and find the winning years, and the runner up, if any.

**Functional requirements**

- The site will be public. 
- Users are able to easily find information on men's professional tennis players and records.
- Ease of navigation around the site, with hamburger responsive icon menu at smaller screen sizes.
- Pagination for tournament records pages.
- Searchbox functionality on tournament records pages.
- Modals that are linked to the players cards on home page which list key stats.
- Visual javascript based chart that will display records and information to the user.
- JSON files that will load the player and tournament information through XMLHTTPRequests into tables.
  
**Content Requirements**

- Home page with cards and information on the top players.
- Images of top players for the cards.
- JSON files (x4) need to be hard coded for Grand Slam tournament records, as there is no tennis api avaialble.
- Player records to include year, winner, country and runner-up categories for each Grand Slam tournament since 1968. 
- Tables will be required that will house the information loaded from the JSON files.
- Scripts will be needed for pagination, search functionality, button event listeners and loading JSON data into webpage tables. 

## Structure
**Interaction Design**
- Colour scheme, font and layout consistency on all pages.
- All pages will have navbar/header at the top of the page.
- Cards with player information and key stats modals on the home page.
- Traditional top bar navigation with burger navigation menu on mobile and small screens.
- Cards on home page listing the top players with nav links to the tournament records and graph pages. 
- Tournament pages for all four Grand Slam tournaments with tables, pagination and search functionality.

**Information Architecture**
- Simple 6 page structure with links available on all pages for ease of navigation.
- Card style layout on homepage with info modals for visual appeal.
- Visual bar chart on another page for visual appeal.
- Tables on all four tournamnent pages will look the same for consistency of styling.

## Skeleton
**Navigation design**
- Navigation menu at top with burger menu for small screens.
- Links arranged in importance across nav bar from left to right.
- Searchbox and clear search button at the top of the page for ease of search.
- Pagination buttons on the bottom left of each tournament page for ease of browsing.
  
**Interface design**
- Call to action with all links to site pages available on navbar on the top of each page.
- Cards listing top players on homepage with buttons linking to key stats modals.
- Searchbox and clear search button at top of records pages.
- Pagination at the bottom of each records page.

## Surface
   
- One major colour theme (orange) with a scondary colour of blue for buttons throughout for visual consistency.
- One sans-serif font across the whole site, with attractive Exo 2 modern font.
- White background with dark grey text for optimum readability.
- Attractive cards on home pages with modals 
- Identical header/navbar on all pages.
- Identical records tables with the pagination and search functionality in the same location on the four tournament pages.