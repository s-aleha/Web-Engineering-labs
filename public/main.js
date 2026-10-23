import { delay, makeCounter } from "./utils.js";

const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");
const nextBooking = makeCounter();

// Event delegation: ONE listener on the tbody handles every button.
tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;

  const day = button.dataset.day;
  const row = button.closest("tr");

  status.textContent = `Updating ${day}...`;
  await delay(1000); // pauses only this handler, the page stays responsive

  const booked = row.classList.toggle("selected");
  const count = document.querySelectorAll("#schedule tr.selected").length;

  button.textContent = booked ? "Cancel" : "Select";
  button.setAttribute("aria-label", `${booked ? "Cancel" : "Select"} ${day}`);

  status.textContent = booked
    ? `Booking #${nextBooking()} confirmed for ${day}. ${count} slot(s) booked.`
    : `${day} cancelled. ${count} slot(s) booked.`;
});
