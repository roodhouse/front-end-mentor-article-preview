# Frontend Mentor - Article preview component solution

This is my solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

#### Mobile

![](/src/images/mb01.png)
![](/src/images/mb02.png)

#### Desktop

![](/src/images/dt01.png)
![](/src/images/dt02.png)

### Links

- Solution URL: [solution URL](https://github.com/roodhouse/front-end-mentor-article-preview)
- Live Site URL: [live site URL](https://article-preview.rugh.us/)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

Traversing the DOM with JS is becoming easier for me and I am excited about it. That understanding seems to unlock a world of potential. For instance, with this project I was able to traverse and then utilize the width of an element to dicate when tooltip should show as a tooltip or just replace the content already on the page.

```js
// click on normal view
    function handleClick(e) {
        // check content width
        let contentWidth = getComputedStyle(document.getElementById('contwentWrapper')).maxWidth;
        contentWidth = contentWidth.split('px')
        contentWidth = contentWidth[0]
        contentWidth = parseInt(contentWidth)
        
        if (contentWidth < 730) {
            // grab the div containing all the info
            const hideDiv = e.target.parentElement.parentElement.parentElement
            // grab the hidden div
            const showDiv = hideDiv.nextSibling
            // change the div with all info to display none
            hideDiv.style.display = 'none';
            // change the hidden div to display flex
            showDiv.style.display = 'flex';
        } else {
            // change the icon
            const clickedIcon = e.target;
            const clickedIconParent = clickedIcon.parentElement.parentElement;
            const hiddenDiv = clickedIconParent.nextSibling;
            clickedIconParent.style.display = 'none';
            hiddenDiv.style.display = 'flex';

            // Display the tooltip
            const toolTip = document.getElementById('socialToolTip');
            toolTip.style.display = 'flex'
        }
    }
```

Another thing I learned was how to utilize the transform property. I was able to get the tooltip to remain centered no matter the width of the page (in desktop views). This has been something that has given me a hard time on recent projects.

```js
<div id="socialToolTip" className='hidden absolute flex w-[248px] justify-between bg-darkBlue px-[37px] py-[18px] rounded-[10px] items-center top-[50%] left-[50%] translate-x-[77%] translate-y-[0%]'>
```

So of my code for this solution is redundant or not needed. I found better ways to get to the same result as I progressed through the project and am not interested in removing the code first used for fear that it would cause a world of hurt.

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)

