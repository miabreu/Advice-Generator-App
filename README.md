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

Live Site URL: [Website Preview]()

### Built with

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

