// Define a function to handle button click
function openTypeform(event) {
  event.preventDefault(); // Prevent default link behavior (navigating to href)

  // Ensure TypeformEmbed is available
  if (typeof TypeformEmbed !== "undefined") {
    // Create a new Typeform embed object and open it
    var typeformEmbed = new TypeformEmbed({
      url: "https://0rx2ndldz76.typeform.com/to/rDAtbYfC",
      hideHeaders: true,
      hideFooter: true,
    });
    typeformEmbed.open();
  } else {
    console.error("TypeformEmbed is not defined.");
  }
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function () {
  var openTypeformButton = document.getElementById("openTypeformButton");
  if (openTypeformButton) {
    openTypeformButton.addEventListener("click", openTypeform);
  }
});
