# Totat Tarot Website
Deployed site: [https://sdgreen.github.io/TotalTarot/](https://sdgreen.github.io/TotalTarot/)
## Table of Contents
1. [Aim](#aim)
2. [UX](#ux)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Credits](#credits)

---

## Aim
The aim of Total Tarot is to provide a place for people interested in Tarot reading to learn more and find classes if they are UK based.
A key aim was to make the learning as interactive as possible so reader want to continue learning and drive traffic to our approved mentors websites.
For viewers not based in the UK it is still important for the website to stand out as an interactive learning tool, this will drive users to our website and establish Total Tarot as a trusted voice within the community.

Over all Total Tarot aims to be an educational site with no pay-walls. Once the site has a large following, mentors would pay us a cut of directed traffic to be featured on the site so no pay burden is placed on the user.

## UX
Total Tarot's design is aimed to look sleek and simple to make navigation as easy as possible.
Competitor websites they tend fall into two categories: 
1. Course advertisements that look good but provide little information
2. Free website with good information that looked terrible & are hard to navigate
As Total Tarot will straddle between these two worlds, I want to combine the refined and easy handling of a paid for course website with the good information of a free website.
This way it can stand out in the free market and draw a large crowd which can be directed to affilated websites for users who want to continue their learning.

As Total Tarot will be catering to a niche market with varying levels of IT skills it needs to be easy to navigate and understand. This means it follows a very standard website layout with a Navbar across the top with easily accessible links to each page, a simple hub and spoke model. Each page (other than the card library) is designed to be as small and easy to read as possible, only providing as much information as neccessary to learn whilst keeping everything nice and clear. Large pictures are included to keep the users engaged without overcrowding the page as was seen on other free websites.

User research on what and how they woud like to learn from a website about Tarot cards came up with three clear goals:
1. An almost "Amazon" like view of all the Tarot cards where you could click each one to find their meaning.
2. Information about where they could go to get do workshops/classes displayed on a map for easy use.
3. Information about how to place the cards to do readings, many people know the cards have meanings but don't know where to go from there.

This reseach lead most of the design for the webpages, the classes page has a clickable map displaying all the Total Tarot approved classes in the UK. Clicking on your closest mentor brings up more information about how to book a class, keeping the information hidden until needed to maintain a clean website.
The page dedicated to learning about the cards has become a visual library where you can scroll through all 78 cards and click each one to find more infomation. To keep this easily digestable the information is concise and easy to view and hide once the user wants to learn about a new card. There is also a search function to easily find a card and a back to top button to keep the page simple to navigate.
The final page again has a lot of information about how to interpret cards without becoming messy. Key information about how interpreting is done appears before practical placment of cards so it has to be read first, all other information is sig-posted but collapsed. Once a viewer wants to learn more about layouts they can bring up that information but it will hide itself once the user clicks on a new layout to learn. This helps maintain a clean and sleek look whilst having quite a lot of information on the page.

To help the bussiness goal of growing a large following each page has links to social accounts (currently not online) so no matter where you are on the site, it's easy to follow Total Tarot's social media streams.
As this site wants to make learning as easy as possible it also includes a dark mode feature so users don't strain their eyes whilst using the site.

### Target Demographic
The target demographic for this website is people interested in Tarot reading which is predominatly a female market [Medium statistic](https://www.alittlesparkofjoy.com/tarot-statistics-psychic-infographics/) Spanning all ages.
With this in mind the site still has to be somewhat gender neutral so the palette is based on the colours typically found on tarot cards, Grey/Black, Gold, Burgundy, Navy and White.
The Dark Mode uses mostly gem tones of Gold, Burgundy and Navy whilst the light mode uses the same colours just much lighter versions of each tone. To maintain consistancy the reverse palette colours are used for text colours in each mode.

As people interested in tarot can be any age the site aims to be easy to navigate so you don't need a strong literacy in computers. Interactive elements (like the clickable map targets) clearly signpost how to interact with them and where the information will appear.

### User Stories
To help focus the design of to Total Tarot's website user stories were created which point to key features or layouts.
* As a user, I want to find out more about tarot cards so I can start using my own deck.
* As a user, I want an online deck so I don't have to buy my own to view the cards.
* As a user, I want to learn how to place my cards so I can start doing my own readings.
* As a user, I want to easily find out where my closest classes are so I can book a class and learn more.
* As a user, I want to view the cards easily so I can browse throught the cards.
* As the owner, I want links to social accounts so I can grow our followers.
* As the owner, I want a clean website so users aren't put off and go elsewhere.
* As the owner, I want the information to be interactive so users are hooked and stay on the site.
* As the owner, I want users to be easily directed to affilated sites so we can get a comisson of revenue.
* As the owner, I don't want too much information avaliable so viewers want to get classes.

### Wireframes
Wireframes for the laptop versions of the pages can be found [Here](https://github.com/SDGreen/Walkee/blob/master/wireframes/WalkeeWireframesLaptop.pdf)

Wireframes for the mobile versions of the site can be found [Here](https://github.com/SDGreen/Walkee/blob/master/Wireframes/WalkeeWireframesPhone.pdf)

## Features
### Existing Features
* #### Responsive Navbar: 
    This simple feauture keeps the the navbar from taking too much space on smaller devices. The webiste aims to keeps information at the forfront and this feature keeps the navbar small yet useful.
* #### Two responsive dark/light mode buttons, along one Navbar link on smaller devices:
    The dark/light mode button all react once hovered on to demonstrate something will happen. two signpost also what the button will do so less able users will understand what is happening. Once clicked the button dynamically changed the page to which ever mode is not on to make viewing easier.
* #### Call to action Jumbotron:
    This quickly overviews the site and easily informs the viewer about the Total Tarot. It is also responsive so smaller devices aren't over crowded with excess information.
* #### Responsive page summaries:
    These sections make it easy for the view to navigate to the page which is most useful for them by including in anchors to the relavant page. The images are also responsive so they don't crowd smaller devices.
* #### Dynamic links:
    All links have a hover colour transition so viewers are aware something will happen if they are clicked. The links are also coloured to maintain brand image rather than going to the standard blue.
* #### Social links on every page within footer:
    Each page has social links within the footer, this helps maintain the bussiness goal of growing followers without taking up too much real-estate.
* #### Responsive Copy:
    The Home and Find Classes page both have responsive copy to keep the page from getting cluttered on smaller devices.
* #### Interactive Map:
    This feature has a map using the [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/tutorial) with custom markers displaying all the Total Tarot approved teachers in the UK. This helps users find the closest class to them. Once a map icon is clicked, information about how to book a class and links to the mentors website appear below the map. This keeps informaiton hidden until needed so the website is clutter free and useful. The map will also zoom in on the location selected so viewers will get a better idea on where the place is located. If a new location is picked the information is cleared and updated for the new location. This prevents the page from getting cluttered and stays navigable for the user. The interactions are clearly sign-posted above the map so less computer literate users will know how to use this feature.
* #### Interactive Tarot Card Deck:
    This displays all 78 tarot cards on the page for the user to browse through (like an Amazon shopping page). All information related to the card (front image, meaning) is supplied from [howlCode's](https://github.com/howlCode/tarot_api) Tarot Api, if there is an issue getting this information an error message will appear instead. Once the cards are displayed by the generate-deck.js script they are clickable. Once clicked the card will flip to display the card image and a section will appear informing the user about it's meaning. This keep the information fun as each opportunity to learn is interactive. If a new card is click then another call is placed to the API and the original card will hide it's information and flip over to the back face so keep the site clutter free and prevent information overload on the user.  
* #### Search Dropdown:
    A simple dropdown and accompanying button so users can quickly find a card rather than browse through the whole deck to find it. Once the button is clicked the user is smoothly scrolled to the correct card, the card will automatically flip to reveal it's information to make learning and navigation simple.
* #### Back-To-Top Button:
    As the library is so large it's important to make it easy for the viewer to return to the top if they want to find a specific card or navigate elsewhere. As screen real estate is so important for learning an unobtrusive button was picked over a sticky navbar for this reason. Once the user scrolls 30px down the button will fade in the lower right hand corner, if clicked the user is instantly taken back to the top of the page to either go to a new page or search a new card.
* #### Responsive Image:
    A simple image to keep the user engaged on this page. The first section is text heavy so it was important to add an interesting image first. The colour wrapper changes depending on which mode is selected and the size is responsive so the image looks good on all devices.
* #### Interactive Accordion:
    This Bootstrap accordion keeps information on layouts hidden until a viewer wants to learn more. If clicked the information about the relevant spread is revealed and hides any other open accordion pages. This keeps the information nicely laid out so the page isn't cluttered whilst still being informative.
    
### Features Left to Implement
## Technologies Used
* [HTML5](https://html.spec.whatwg.org/multipage/) - To create the structure of the page.
* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html) - Used to style the website.
* [Bootstrap v4.5.0](https://getbootstrap.com/docs/4.5/getting-started/introduction/) - This framework was used to create a responsive mobile-first design along with some components such as the navbar and accordion.
* [JavaScript](https://www.javascript.com/) - Inculded with Bootstrap libraries to give components functionality, also used to code dark-mode.js and classes-map.js.
* [jQuery](https://jquery.com/) - Included with Bootstrap, also used to code find-cars.js, show-card-details.js and generate-deck.js (along with some vanilla javascript)
* [Git](https://git-scm.com/) - Used for version control and tracking changes to the code whilst in development.
* [GitHub Pages](https://pages.github.com/) - Used to deploy the website.
* [Google Fonts](https://fonts.google.com/) - Used for website fonts [Cinzel](https://fonts.google.com/specimen/cinzel) for headings and [Montserrat](https://fonts.google.com/specimen/Montserrat) for content text.
* [Font Awesome](https://fo*ntawesome.com/) - This library provided the Icons used across the site.
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - Key for testing respon
* [Autoprefixer](https://autoprefixer.github.io/) - Used to prefix the css file so that transitions would work across different browsers

## Testing
### Responsive Design Testing
### Browser testing
#### On Lenovo IdeaPad S340
#### On MacBook problem
### Code Validation
* HTML5 code validated using [https://validator.w3.org/](https://validator.w3.org/)
* CSS3 code validated using [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
### User Stories tested
## Deployment
Total Tarot's Website was coded using a the GitPod IDE. The git repository is stored loacally before being pushed online to the remote repository online at GitHub.
To push the code to the remote repository you follow these steps.
1. Save any local changes made in the GitPod IDE by pressing File -> Save All (or Ctrl+Shift+S).
2. Add these changes to the git staging area by using the ```git add .``` command in a terminal.
3. Commit the changes using the ```git commit -m "changes made"``` command.
4. Push these changes to the remote repository using the ```git push``` command.

To publish a live version of the side I used GitHub Pages, here are the steps I took:
1. Go to the remote repository at [https://github.com/SDGreen/TotalTarot](https://github.com/SDGreen/TotalTarot)
2. Click "Settings"
3. Scroll to "GitHub Pages", select a publishing source (master branch in the drop-down menu)
4. The site is now published at [https://sdgreen.github.io/TotalTarot/](https://sdgreen.github.io/TotalTarot/)

### How to run Total Tarot's website code locally:
1. Go to: [https://github.com/SDGreen/TotalTarot](https://github.com/SDGreen/TotalTarot)
2. Click the "Code" button next to the "Gitpod" button which will have a dropdown including "Clone with HTTPS", "Open with GitHub Desktop" & "Download ZIP"
3. To clone the repository using HTTPS, under "Clone with HTTPS", click the copy to clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the copy to clipboard icon.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 2 (https://github.com/SDGreen/TotalTarot.git).

## Credits
### Media
Copyright free images taken from [Free SVG](https://freesvg.org/):
* [Tribal Sun](https://freesvg.org/sun-tribal-style-art) Edited to make [light-mode.png](https://github.com/SDGreen/TotalTarot/tree/master/assets/images/light-mode.png)
* [Moon](https://freesvg.org/vector-clip-art-of-floral-crescent-moon) Edited to create [dark-mode.png](https://github.com/SDGreen/TotalTarot/tree/master/assets/images/dark-mode.png)

Copyright free images taken from [Need Pix](https://www.needpix.com/):
* [Tarot Deck](https://www.needpix.com/photo/download/476089/tarot-cards-magic-fortune-telling-gypsy-esoteric-mystical-prediction) (file name: tarot-cover.jpg)
* [Scatter cards](https://www.needpix.com/photo/download/1238549/metaphysical-tarot-occult-cards-art-free-pictures-free-photos-free-images-royalty-free) (file name: cards.jpg)
* [Card Reading](https://www.needpix.com/photo/download/1615529/tarot-magician-magic-witch-occult-destiny-mysticism-symbol-fortune) (file name: reading.jpg)
* [Cards being dealt](https://www.needpix.com/photo/909476/playing-cards-cards-player-distribute) (file name: dealing-cards.jpg)

Copyright free images taken from [Pxhere])(https://pxhere.com/)
*[Book](https://pxhere.com/en/photo/498594) (file name: book.jpg)

Copyright free images taken from [Pexels])(https://www.pexels.com)
*[Tarot Spread](https://www.pexels.com/photo/assorted-tarot-cards-on-table-3088369/) (file name: tarot-spread.jpg)

Copyright free images taken from [Wikipedia Commons])(https://commons.wikimedia.org/wiki/Main_Page)
*[Card Back](https://commons.wikimedia.org/wiki/File:Russian_style_card_back.jpg) (file name: card-back.jpg)
*[Simple Spread](https://commons.wikimedia.org/wiki/File:Three_card_reading_1.svg) (file name: simple-spread.png)
*[Crossed Spread](https://commons.wikimedia.org/wiki/File:Three_card_reading_2.svg) (file name:cross-spread.png)
*[Celtic Cross](https://commons.wikimedia.org/wiki/File:Keltisch_Kruis.svg) (file name: celtic-cross.png)

Logos created using [FreeLogoDesign](https://www.freelogodesign.org/):
* [Total Tarot Logo](https://github.com/SDGreen/TotalTarot/tree/master/assets/images/logo-light.png) (file name: logo-light.png)
* [Dark Total Tarot Logo](https://github.com/SDGreen/TotalTarot/tree/master/assets/images/logo-dark.png) (file name: logo-dark.png)

Favicon created using [Favicon.io](https://favicon.io/favicon-converter/) from edited logo:
*[Favicon](https://github.com/SDGreen/TotalTarot/tree/master/assets/images/favicon.png) (file name: favicon.png)

Images created from edited assets:
* [Map Marker](https://github.com/SDGreen/TotalTarot/tree/master/assets/images/map-marker-final.png) (file name: map-marker-final.png)

Information and research from [Biddy Tarot](https://www.biddytarot.com/) was crucial to keep the website factual

## Code 