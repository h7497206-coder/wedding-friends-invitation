
document.addEventListener("DOMContentLoaded", () => {
  // Keep the invitation entrance smooth and accessible.
  const invitation = document.querySelector(".invitation");

  if (invitation) {
    invitation.classList.add("is-ready");
  }

  // Add a subtle click response to the venue link.
  const locationButton = document.querySelector(".location-button");

  if (locationButton) {
    locationButton.addEventListener("click", () => {
      locationButton.setAttribute("aria-label", "Open Walima venue search in Google Maps");
    });
  }

  // Update the page's countdown target metadata.
  // A visible countdown can be added later if desired.
  const walimaDate = new Date("2026-11-29T13:00:00+05:00");

  if (Number.isNaN(walimaDate.getTime())) {
    console.warn("Please check the Walima event date.");
  }
});
