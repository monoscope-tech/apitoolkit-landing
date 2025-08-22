const price_indicator = document.querySelector("#price_range");
const priceContainer = document.querySelector("#price");
const reqsContainer = document.querySelector("#num_requests");
const saveContainer = document.querySelector("#save_container");
const startsAtContainer = document.querySelector("#starts_at");
function priceChange() {
  const value = price_indicator.value;
  // For Cloud + S3 plan: $200 base + $2 per 1M events
  const eventsInMillions = value / 1_000_000;
  const eventsCost = eventsInMillions * 2;
  const totalPrice = 200 + eventsCost;
  
  priceContainer.innerText = "$" + totalPrice.toFixed(0);
  reqsContainer.innerText = "/" + eventsInMillions + "M events per month";
  
  // Show savings compared to just events cost
  if (eventsInMillions > 100) {
    const savingsPercent = Math.round((200 / totalPrice) * 100);
    saveContainer.innerText = "(Base cost is only " + savingsPercent + "% of total)";
  } else {
    saveContainer.innerText = "";
  }
}
if (price_indicator) {
  price_indicator.addEventListener("input", priceChange);
  priceChange(); // Initialize on page load
}

function handlePlanToggle() {
  const radios = document.getElementsByName("plans");
  for (let radio of radios) {
    if (radio.checked) {
      plan = radio.value;
      break;
    }
  }
  priceChange();
}
