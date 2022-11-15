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

for (let i = 0; prices.length > i; i++) {
  annualPrices.push(prices[i] - prices[i] * 0.25);
}

monthlypackage.addEventListener("click", function () {
  PriceChange(prices);
  monthtext.textContent = `/ month`;
});

yearlypackage.addEventListener("click", function () {
  PriceChange(annualPrices);
  monthtext.textContent = `/ annual`;
});

change.addEventListener("click", function () {
  if (yearly.checked) {
    PriceChange(prices);
    monthly.checked = true;
    monthtext.textContent = `/ month`;
  } else if (monthly.checked) {
    PriceChange(annualPrices);
    yearly.checked = true;
    monthtext.textContent = `/ annual`;
  }
});

function PriceChange(price) {
  if (Number(slider.value) === 8) {
    sliderbg.style.width = `8%`;
    pricemonth.textContent = price[0].toFixed(2);
    views.textContent = `10K`;
  } else if (Number(slider.value) === 27) {
    sliderbg.style.width = `27%`;
    pricemonth.textContent = price[1].toFixed(2);
    views.textContent = `50K`;
  } else if (Number(slider.value) === 46) {
    sliderbg.style.width = `50%`;
    pricemonth.textContent = price[2].toFixed(2);
    views.textContent = `100K`;
  } else if (Number(slider.value) === 65) {
    sliderbg.style.width = `72%`;
    pricemonth.textContent = price[3].toFixed(2);
    views.textContent = `500K`;
  } else if (Number(slider.value) === 84) {
    sliderbg.style.width = `100%`;
    pricemonth.textContent = price[4].toFixed(2);
    views.textContent = `1M`;
  }
}

slider.addEventListener("input", function () {
  if (monthly.checked) {
    PriceChange(prices);
  } else if (yearly.checked) {
    PriceChange(annualPrices);
  }
});
