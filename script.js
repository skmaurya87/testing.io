// function toggleTheme() {
//     // Get the <html> element
//     var htmlElement = document.getElementById("theme-toggle");

//     // Toggle the "dark" class on the <html> element
//     htmlElement.classList.toggle("dark");

//     // Check if the "dark" class is present after toggling
//     var isDarkMode = htmlElement.classList.contains("dark");

//     // Update the button text based on the theme
//     var themeButton = document.getElementById("themeButton");
//     themeButton.innerText = isDarkMode ? "Light" : "Dark";
//   }


  // JavaScript
function toggleTheme() {
    var htmlElement = document.getElementById("theme-toggle");
    var themeIcon = document.getElementById("themeIcon");

    htmlElement.classList.toggle("dark");
    var isDarkMode = htmlElement.classList.contains("dark");

    // Update the button icon based on the theme
    if (isDarkMode) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}




  document.querySelector('.productImage').addEventListener('click', function(e){
    console.log(e);
   if (e.target.tagName === 'IMG') {
    let imgPath = e.target.src
    let removeImg = e.target.parentNode
    alert(imgPath)
    removeImg.remove()
   }
})



  function showResult(listId) {
    // Get references to the elements in the clicked list
    const clickedList = document.getElementById(listId);
    const image = clickedList.querySelector('img');
    const heading = clickedList.querySelector('.productName');
    const description = clickedList.querySelector('.description');

    // Get the content from the clicked list
    const imageUrl = image.src;
    const headingText = heading.innerText;
    const descriptionText = description.innerText;

    // Set the content to the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <img class='object-cover rounded w-full h-96 md:h-auto md:w-[250px]' src="${imageUrl}" alt="${headingText}">
      <div class='flex flex-col justify-between px-4 leading-normal'>
      <div class='mb-2 mt-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>${headingText}</div>
      <p class='mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm leading-6'>${descriptionText}</p>
      </div>
    `;
  }


  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }


let itemsToShow = 8; // Number of items to initially show
let itemsPerLoad = 100; // Number of items to load at once

function loadMore() {
  const productContainer = document.getElementById('productContainer');
  const products = productContainer.getElementsByClassName('cardInner');

  // Show all products if itemsToShow is greater than the total number of products
  if (itemsToShow >= products.length) {
    showAllProducts(products);
    return;
  }

  // Show additional itemsPerLoad number of products
  for (let i = itemsToShow; i < itemsToShow + itemsPerLoad; i++) {
    if (products[i]) {
      products[i].style.display = 'block';
    }
  }

  itemsToShow += itemsPerLoad;

  // Hide the "Load More" button if all products are displayed
  if (itemsToShow >= products.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

function showAllProducts(products) {
  // Show all products
  for (let i = 0; i < products.length; i++) {
    products[i].style.display = 'block';
  }

  // Hide the "Load More" button
  document.getElementById('loadMoreBtn').style.display = 'none';
}

// Initially hide all products except the first 8
document.addEventListener('DOMContentLoaded', function() {
  const productContainer = document.getElementById('productContainer');
  const products = productContainer.getElementsByClassName('cardInner');

  for (let i = itemsToShow; i < products.length; i++) {
    products[i].style.display = 'none';
  }
});



  