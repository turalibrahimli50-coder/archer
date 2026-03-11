// ── Data ──────────────────────────────────────────────────────────────

const HOW_STEPS = [
  {
    number: 1,
    title: "Planning",
    desc: "Duis suscipit, eros vel tincidunt mollis, sapien ligula mollismi, ac hendrerit ante tellus sit amet eros.",
    img: "https://csmthemes.com/themes/archer/image/img/step-1.svg",
    imgWidth: 200,
    reverse: false,
  },
  {
    number: 2,
    title: "Prototyping",
    desc: "Maecenas vel congue velit. Cras odio nunc, pellentesque vitae libero id, dapibus egestas justo.",
    img: "https://csmthemes.com/themes/archer/image/img/step-2.svg",
    imgWidth: 141,
    reverse: true,
  },
  {
    number: 3,
    title: "Visual Design",
    desc: "Tiam vel pellentesque sapien. Donec eleifend sagittis lacus. Praesent in quam nec mi malesuada laoreet.",
    img: "https://csmthemes.com/themes/archer/image/img/step-3.svg",
    imgWidth: 160,
    reverse: false,
  },
  {
    number: 4,
    title: "Production",
    desc: "Nulla tincidunt finibus dignissim. In sit amet rutrum eros. Nulla accumsan rutrum nisl vitae, semper nunc.",
    img: "https://csmthemes.com/themes/archer/image/img/step-4.svg",
    imgWidth: 200,
    reverse: true,
  },
];

const FEATURE_CARDS = [
  { img: "https://csmthemes.com/themes/archer/image/img/feature-1.svg", width: 35, title: "Bootstrap v3", desc: "Fusce finibus condimentum purus. Sed sagittis erat sed posuere cursus." },
  { img: "https://csmthemes.com/themes/archer/image/img/feature-2.svg", width: 55, title: "Sass Ready",    desc: "Fusce finibus condimentum purus. Sed sagittis erat sed posuere cursus." },
  { img: "https://csmthemes.com/themes/archer/image/img/feature-3.svg", width: 55, title: "Font Awesome",  desc: "Fusce finibus condimentum purus. Sed sagittis erat sed posuere cursus." },
  { img: "https://csmthemes.com/themes/archer/image/img/feature-4.svg", width: 55, title: "Google Fonts",  desc: "Fusce finibus condimentum purus. Sed sagittis erat sed posuere cursus." },
];

const NEW_FEATURES = [
  { img: "https://csmthemes.com/themes/archer/image/img/feature-new-1.svg", title: "Twitter Feed",     desc: "Fusce finibus condimentum purus. Sed sagittis erat sed posuere cursus." },
  { img: "https://csmthemes.com/themes/archer/image/img/feature-new-2.svg", title: "Font Awesome",    desc: "Proin convallis sodales volutpat. Suspene varius mollis risus arcu." },
  { img: "https://csmthemes.com/themes/archer/image/img/feature-new-3.svg", title: "Google Web Fonts", desc: "Integer sit amet efficitur odio, nec varius vulputate rhoncus justo." },
];

const PRICING_PLANS = [
  {
    name: "Basic",
    price: "FREE",
    tagline: "Try first, upgrade later",
    cta: "TRY FOR FREE",
    features: ["1 user", "5000 Views per/m", "12 Projects", "5 agent per account"],
  },
  {
    name: "Premium",
    price: "$30 P/M",
    tagline: "Limited time 10% off",
    cta: "GET STARTED",
    features: ["1 user", "5000 Views per/m", "12 Projects", "5 agent per account", "API access", "Free Storage", "Analytics"],
  },
  {
    name: "Gold",
    price: "$60 P/M",
    tagline: "Limited time 10% off",
    cta: "GET STARTED",
    features: ["1 user", "5000 Views per/m", "12 Projects", "5 agent per account", "API access", "Free Storage", "Activity logs", "Priority support"],
  },
];

const FAQ_ITEMS = [
  { question: "Vestibulum sapien sapien?", answers: ["Finibus nunc quis turpis quis leo volutpat id", "sit amet orci. Etiam nec diam tincidunt,", "consequat diam suscipit metus."] },
  { question: "Vestibulum sapien sapien?", answers: ["Finibus nunc quis turpis quis leo volutpat id", "sit amet orci. Etiam nec diam tincidunt,", "consequat diam suscipit metus."] },
  { question: "Vestibulum sapien sapien?", answers: ["Finibus nunc quis turpis quis leo volutpat id", "sit amet orci. Etiam nec diam tincidunt,", "consequat diam suscipit metus."] },
  { question: "Vestibulum sapien sapien?", answers: ["Finibus nunc quis turpis quis leo volutpat id", "sit amet orci. Etiam nec diam tincidunt,", "consequat diam suscipit metus."] },
];

const CLIENT_LOGOS = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `https://csmthemes.com/themes/archer/image/img/client-${n}.svg`,
}));

const STATS = [
  { icon: "fa-users",              value: "50k+", label: "Members"   },
  { icon: "fa-cloud-arrow-down",   value: "70k+", label: "Downloads" },
  { icon: "fa-square-facebook fab",value: "90k+", label: "Facebook"  },
  { icon: "fa-twitter fab",        value: "60k+", label: "Twitter"   },
];

// ── Render helpers ────────────────────────────────────────────────────

const createHowStep = ({ number, title, desc, img, imgWidth, reverse }) => {
  const textCol = `
    <div class="col-md-6 pb-5">
      <div class="d-flex justify-content-center align-items-center">
        <div class="step-number d-flex justify-content-center align-items-center text-white">${number}</div>
        <div class="step-body d-flex flex-column justify-content-center align-items-start">
          <p class="step-title text-dark fs-4">${title}</p>
          <p class="step-desc">${desc}</p>
        </div>
      </div>
    </div>`;

  const imgCol = `
    <div class="col-md-6 d-flex justify-content-center align-items-center pb-5">
      <img src="${img}" width="${imgWidth}px" class="img-fluid">
    </div>`;

  return reverse ? imgCol + textCol : textCol + imgCol;
};

const createFeatureCard = ({ img, width, title, desc }) => `
  <div class="col-md-6">
    <div class="mt-5">
      <img src="${img}" width="${width}px" class="img-fluid">
      <h4>${title}</h4>
      <p class="feature-desc">${desc}</p>
    </div>
  </div>`;

const createNewFeatureCard = ({ img, title, desc }) => `
  <div class="col-md-4 d-flex align-items-start">
    <img src="${img}" width="40px" class="new-feature-icon img-fluid">
    <div class="new-feature-body d-flex flex-column">
      <h3 class="new-feature-item-title">${title}</h3>
      <p class="new-feature-item-desc">${desc}</p>
    </div>
  </div>`;

const createPricingCard = ({ name, price, tagline, cta, features }) => `
  <div class="col-md-3">
    <div class="shadow-sm pricing-card">
      <p class="pricing-plan-name">${name}</p>
      <p class="pricing-plan-price fw-bold">${price}</p>
      <p class="pricing-plan-tagline">${tagline}</p>
      <button class="btn pricing-plan-btn">${cta}</button>
      <ul class="pricing-plan-features">
        ${features.map((f) => `<li>${f}</li>`).join("")}
      </ul>
    </div>
  </div>`;

const createFaqItem = ({ question, answers }) => `
  <div class="col-md-6 faq-item">
    <ul class="faq-list">
      <li class="faq-question">${question}</li>
      ${answers.map((a) => `<li class="faq-answer">${a}</li>`).join("")}
    </ul>
  </div>`;

const createClientLogo = ({ src }, index) => `
  <div class="col-md-4 ${index >= 3 ? "mt-3" : ""}">
    <img src="${src}" class="img-fluid" width="120px">
  </div>`;

const createStatCard = ({ icon, value, label }) => `
  <div class="col-md-3 d-flex justify-content-center align-items-center flex-column">
    <i class="fa-solid ${icon} stat-icon"></i>
    <p class="stat-value">${value}</p>
    <p class="stat-label">${label}</p>
  </div>`;

// ── Mount ─────────────────────────────────────────────────────────────

const mount = (id, items, renderFn) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(renderFn).join("");
};

const init = () => {
  mount("howSteps",       HOW_STEPS,     createHowStep);
  mount("featureCards",   FEATURE_CARDS, createFeatureCard);
  mount("newFeatureCards",NEW_FEATURES,  createNewFeatureCard);
  mount("pricingCards",   PRICING_PLANS, createPricingCard);
  mount("faqItems",       FAQ_ITEMS,     createFaqItem);
  mount("clientLogos",    CLIENT_LOGOS,  createClientLogo);

  const statsEl = document.getElementById("statsCards");
  if (statsEl) {
    statsEl.innerHTML = `<div class="row">${STATS.map(createStatCard).join("")}</div>`;
  }
};

document.addEventListener("DOMContentLoaded", init);