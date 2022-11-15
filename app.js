const change = document.querySelector(".switch");
const yearly = document.getElementById("yearly");
const monthly = document.getElementById("monthly");

const slider = document.querySelector(".slider");
const sliderbg = document.querySelector(".slider-bg");

const pricemonth = document.querySelector(".price-month");
const views = document.querySelector(".views");
const monthtext = document.querySelector(".month-text");

const monthlypackage = document.querySelector(".monthly-package");
const yearlypackage = document.querySelector(".yearly-package");

const prices = [8, 12, 16, 24, 36];

const discount = 0.25;

const annualPrices = [];

const pageViews = ["10K", "50K", "100K", "500K", "1M"];

PriceChange(prices);
monthly.checked = true;

monthlypackage.addEventListener("click", function () {
  PriceChange(prices);
});

yearlypackage.addEventListener("click", function () {
  PriceChange(annualPrices);
});

change.addEventListener("click", function () {
  if (yearly.checked) {
    PriceChange(annualPrices);
    yearly.checked = false;
  } else {
    yearly.checked = true;
  }
});

function PriceChange(price) {
  for (let i = 0; prices.length > i; i++) {
    annualPrices.push(prices[i] - prices[i] * 0.25);
    if (Number(slider.value) === i * 25) {
      pricemonth.textContent = price[i].toFixed(2);
      views.textContent = pageViews[i];
    }
  }
}
slider.addEventListener("input", function () {
  if (monthly.checked) {
    PriceChange(prices);
  } else if (yearly.checked) {
    PriceChange(annualPrices);
  }
});
