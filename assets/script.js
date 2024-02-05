function toggleTheme() {
    // Get the <html> element
    var htmlElement = document.getElementById("theme-toggle");

    // Toggle the "dark" class on the <html> element
    htmlElement.classList.toggle("dark");

    // Check if the "dark" class is present after toggling
    var isDarkMode = htmlElement.classList.contains("dark");

    // Update the button text based on the theme
    var themeButton = document.getElementById("themeButton");
    themeButton.innerText = isDarkMode ? "Light" : "Dark";
  }


  const numberOfBlocks = 50;
  for (let i = 1; i <= numberOfBlocks; i++) {
    const blockId = `block${i}`;
    console.log(blockId);
    const myId = document.querySelector('.list')
    myId.id=blockId
  }



  