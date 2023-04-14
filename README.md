# Frontend Mentor - Advice generator app

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

## The Challenge

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

# Screenshots

<img width="1400" alt="Screen Shot 2023-04-14 at 6 28 23 PM" src="https://user-images.githubusercontent.com/42332056/232165888-4fa46ec1-ee67-4420-959e-0fcb4a5ed182.png">

## Link

Live Site URL: [Website Preview](https://stately-gelato-2229ee.netlify.app)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### CSS Media Queries

```css
@media screen and (max-width: 400px) {
  .container {
    width: 330px;
  }
}
```

This code defines a media query that targets screens with a maximum width of 400 pixels. When the screen width is 400 pixels or less, the CSS rules inside the media query are applied. In this case, the CSS rule inside the media query sets the width of elements with the class "container" to 330 pixels. This allows for a responsive design where the container element is smaller on smaller screens, making the content more readable and easier to navigate.


### JS fetch API and DOM manipulation

```js
const url = "https://api.adviceslip.com/advice";

const adviceID = document.querySelector("#adviceID");
const adviceText = document.querySelector("#adviceText");
const adviceBtn = document.querySelector("#adviceBtn");

const fetchAdvice = () => {
  if (adviceID.innerHTML !== "" && adviceText.innerHTML !== "") {
    adviceID.innerHTML = "";
    adviceText.innerHTML = "";
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      adviceID.innerHTML = "ADVICE #" + data.slip.id;
      adviceText.innerHTML = '"' + data.slip.advice + '"';
    })
    .catch((err) => console.log(err));
};

fetchAdvice();

adviceBtn.addEventListener("click", fetchAdvice);
```

This code fetches a random advice slip from an API endpoint, updates the HTML elements with that advice, and clears any existing content before displaying the new advice.



