const projects = [
  {
    title: "UDM Facility Evaluation & Intervention System",
    pickerLabel: "Facility Evaluation System",
    meta: "Universidad de Manila · 2026",
    description: "A web-based decision-support tool for Universidad de Manila’s Quality Assurance and Accreditation Division (QUAD). Students give consent, rate 16 service areas on a five-star scale, and leave comments in English, Filipino, or Taglish. Complement Naïve Bayes models classify comment sentiment and service aspects, while rules identify constructive suggestions. QUAD staff use dashboards, alerts, reports, and intervention tracking to review concerns and document follow-up actions.",
    stack: ["React", "Python", "FastAPI", "MySQL", "SQLAlchemy", "scikit-learn"],
    screenshots: [
      {
        src: "assets/capstone/01-home.png",
        width: 1467,
        height: 830,
        label: "Home page",
        alt: "Student Facility Evaluation home showing the semester and survey schedule",
        caption: "Students start at the survey home page and check the schedule for the current semester."
      },
      {
        src: "assets/capstone/02-dashboard.png",
        width: 1221,
        height: 902,
        label: "Dashboard",
        alt: "QA dashboard showing comment sentiment, survey participation, and flagged comments",
        caption: "QA staff get a quick view of participation, comment sentiment, and newly flagged feedback."
      },
      {
        src: "assets/capstone/03-feedback.png",
        width: 1301,
        height: 780,
        label: "Feedback",
        alt: "Classified evaluations with search filters, category labels, and a redacted submission detail panel",
        caption: "QA staff can filter classified evaluations and review ratings, sentiment, and service aspects together."
      },
      {
        src: "assets/capstone/04-analytics.png",
        width: 1467,
        height: 747,
        label: "Analytics",
        alt: "Analytics page comparing the distribution of comments by sentiment and detected language",
        caption: "Staff can compare sentiment and language breakdowns for a selected semester or college."
      },
      {
        src: "assets/capstone/05-intervention.png",
        width: 1816,
        height: 866,
        label: "Intervention",
        alt: "Intervention workspace showing prioritized service areas and an alert detail panel",
        caption: "Staff review prioritized service-area concerns and prepare recommended actions for follow-up."
      },
      {
        src: "assets/capstone/06-report.png",
        width: 1325,
        height: 870,
        label: "Make a report",
        alt: "Report builder with filters and selectable sections for participation, ratings, sentiment, and other results",
        caption: "Staff choose filters and report sections, then preview the output before printing or saving it as a PDF."
      },
      {
        src: "assets/capstone/07-users.png",
        thumbnail: "assets/capstone/07-users-thumb.jpg",
        width: 1367,
        height: 826,
        label: "Users",
        alt: "User management screen showing staff roles and account status, with usernames masked",
        caption: "Authorized staff can assign access roles and activate or deactivate accounts."
      },
      {
        src: "assets/capstone/08-audit.png",
        thumbnail: "assets/capstone/08-audit-thumb.jpg",
        width: 1332,
        height: 782,
        label: "Audit trail",
        alt: "Searchable QA audit trail showing sign-ins and record updates, with actor identifiers masked",
        caption: "The audit trail records account activity and administrative changes so authorized staff can review what happened."
      }
    ]
  },
  {
    title: "CLAWWORDS",
    meta: "Android game · 2026",
    description: "I built CLAWWORDS in Godot and packaged it as an Android APK. The game turns software development review into a timed arcade challenge: players guide a claw to collect the letters that answer each question. Across ten levels, they can spend coins to reveal a letter, shuffle the board, or unlock a different claw in the shop.",
    stack: ["Godot Engine", "Kotlin", "Android Studio", "Android SDK"],
    screenshots: [
      ["menu", "Main menu", "CLAWWORDS title screen with Shop, Start, and Settings", "The main menu opens the level selection, shop, or settings."],
      ["shop", "Shop", "Game shop showing four claw designs and their coin prices", "Players can use coins to unlock different claw designs."],
      ["levels", "Level selection", "Ten numbered level buttons", "Players choose from ten levels."],
      ["gameplay", "Gameplay", "A timed claw-machine puzzle with letter tokens and a question about software development", "Players move the claw to collect letters that answer the question before the timer runs out."],
      ["hint", "Hint", "Hint panel offering to reveal a random letter for 20 coins", "A hint reveals one letter in the answer for 20 coins."],
      ["shuffle", "Shuffle", "Shuffle panel offering a new set of letters for 10 coins", "Players can spend 10 coins to shuffle the available letters."],
      ["complete", "Level complete", "Results panel showing the solved word, time, and reward", "The results screen shows the solved word and lets players continue, retry, or quit."]
    ].map(([file, label, alt, caption]) => ({
      src: `assets/clawwords/${file}.png`,
      thumbnail: `assets/clawwords/${file}-thumb.jpg`,
      width: 1920,
      height: 1080,
      label,
      alt,
      caption
    }))
  },
  {
    title: "UDM Online Enrollment System",
    pickerLabel: "Online Enrollment System",
    meta: "Universidad de Manila · 2026",
    description: "I built a web application that connects the two sides of Universidad de Manila’s enrollment process. Applicants can read admissions instructions, submit their details, and return through the applicant portal. Staff can filter applications by program, term, or status, enroll accepted applicants, and check section capacity in the roster before exporting it as a CSV.",
    stack: ["React", "Python", "FastAPI", "MySQL"],
    screenshots: [
      ["01-home", 1917, 917, "Home page", "UDM Online Enrollment System landing page with an Enroll Now button", "The landing page gives applicants a clear entry point to enrollment."],
      ["02-admissions", 1896, 905, "Admissions", "Admissions announcements with application requirements and appointment guidance", "Applicants can review announcements, deadlines, and appointment instructions."],
      ["03-application", 1887, 906, "Application form", "Blank online admissions application form", "The online form collects the information needed to start an application."],
      ["04-login", 1900, 906, "Applicant portal", "Applicant portal sign-in screen with an application ID and password form", "Applicants sign in using their application ID and password."],
      ["05-enrollment", 1917, 910, "Enrollment management", "Admin view with application statuses and an enrolled-student roster populated with demo records", "Staff review applications, enroll accepted students, and filter or export the roster. This screenshot uses demo records."]
    ].map(([file, width, height, label, alt, caption]) => ({
      src: `assets/enrollment/${file}.png`,
      thumbnail: `assets/enrollment/${file}-thumb.jpg`,
      width,
      height,
      label,
      alt,
      caption
    }))
  },
  {
    title: "TRAPKINGS",
    meta: "Clothing e-commerce website · 2025",
    description: "I built TRAPKINGS around two workflows: shopping for clothing and running the storefront. Shoppers can search the catalog, filter by size or color, check availability, and review shipping and order totals at checkout. Staff can manage fulfillment, add product listings, and see which items are running low in the admin dashboard.",
    stack: ["React", "Python", "FastAPI", "MySQL"],
    screenshots: [
      ["01-storefront", 1896, 905, "Storefront", "TRAPKINGS storefront with a branded banner and product section", "The home page introduces the brand and gives shoppers a starting point for browsing."],
      ["02-catalog", 1898, 905, "Product catalog", "Clothing catalog with a search box, size and color filters, and price sorting", "Shoppers can search the catalog, narrow results by size or color, and sort by price."],
      ["03-product", 1897, 902, "Product details", "Product details with shirt images, price, stock, and a description", "A product page brings photos, pricing, availability, and the item description together."],
      ["04-checkout", 1898, 902, "Cart and checkout", "Shopping cart and checkout panel with quantities, shipping, and order totals", "Shoppers can adjust quantities and review shipping and the total before checking out."],
      ["05-dashboard", 1902, 902, "Admin dashboard", "Store dashboard with order, product, user, and revenue summaries", "The admin dashboard summarizes store activity, stock, and best-selling products."],
      ["06-orders", 1897, 895, "Order management", "Order management page grouped into active, in-transit, and received orders", "Staff can search orders and review them by fulfillment status."],
      ["07-add-product", 1896, 902, "Add a product", "Product-entry form with image, price, category, size, color, and stock fields", "Staff can add product photos, sizes, prices, stock quantities, and descriptions."],
      ["08-inventory", 1896, 907, "Inventory", "Inventory dashboard with stock summaries and a searchable product table", "Staff can monitor low and out-of-stock products and manage listings."]
    ].map(([file, width, height, label, alt, caption]) => ({
      src: `assets/trapkings/${file}.png`,
      thumbnail: `assets/trapkings/${file}-thumb.jpg`,
      width,
      height,
      label,
      alt,
      caption
    }))
  }
];

const byId = (id) => document.getElementById(id);
const coverStage = byId("cover-stage");
const coverOpen = byId("cover-open");
const coverImage = byId("cover-image");
const coverThumbnails = byId("cover-thumbnails");
const projectPicker = byId("project-picker");
const lightbox = byId("lightbox");
const lightboxStage = byId("lightbox-stage");
const lightboxImage = byId("lightbox-image");
const lightboxThumbnails = byId("lightbox-thumbnails");
const lightboxClose = byId("lightbox-close");
const lightboxPrevious = byId("lightbox-prev");
const lightboxNext = byId("lightbox-next");
let projectIndex = 0;
let screenshotIndex = 0;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function renderThumbnails(container, screenshots) {
  container.replaceChildren(...screenshots.map((screenshot, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "thumbnail";

    const image = new Image();
    image.src = screenshot.thumbnail ?? screenshot.src;
    image.alt = "";
    image.loading = "lazy";
    image.draggable = false;
    button.append(image, screenshot.label);
    button.addEventListener("click", () => selectScreenshot(index));
    return button;
  }));
}

function selectScreenshot(index) {
  const project = projects[projectIndex];
  const total = project.screenshots.length;
  screenshotIndex = (index + total) % total;
  const screenshot = project.screenshots[screenshotIndex];

  updateImage(coverImage, screenshot);
  coverOpen.style.setProperty("--image-ratio", screenshot.width / screenshot.height);
  coverOpen.setAttribute("aria-label", `Open screenshot: ${screenshot.label}`);
  byId("gallery-status").textContent = screenshot.label;
  const indexLabel = `${screenshotIndex + 1} of ${total}`;
  byId("gallery-count").textContent = projects.length > 1
    ? `Project ${projectIndex + 1} of ${projects.length} · Screenshot ${indexLabel}`
    : `Screenshot ${indexLabel}`;

  if (lightbox.open) {
    updateImage(lightboxImage, screenshot);
    byId("lightbox-label").textContent = `${screenshot.label} · ${indexLabel}`;
    byId("lightbox-caption").textContent = screenshot.caption;
  }

  for (const container of [coverThumbnails, lightboxThumbnails]) {
    Array.from(container.children).forEach((button, buttonIndex) => {
      button.setAttribute("aria-current", String(buttonIndex === screenshotIndex));
    });
  }
}

function updateImage(image, screenshot) {
  image.width = screenshot.width;
  image.height = screenshot.height;
  image.alt = screenshot.alt;
  image.src = screenshot.src;
}

function selectProject(index) {
  projectIndex = (index + projects.length) % projects.length;
  const project = projects[projectIndex];
  Array.from(projectPicker.children).forEach((button, buttonIndex) => {
    button.setAttribute("aria-pressed", String(buttonIndex === projectIndex));
  });
  byId("project-title").textContent = project.title;
  byId("project-meta").textContent = project.meta;
  byId("project-description").textContent = project.description;
  byId("project-stack").replaceChildren(...project.stack.map((technology) => {
    const item = document.createElement("li");
    item.textContent = technology;
    return item;
  }));
  byId("lightbox-title").textContent = project.title;
  renderThumbnails(coverThumbnails, project.screenshots);
  renderThumbnails(lightboxThumbnails, project.screenshots);
  lightboxPrevious.hidden = lightboxNext.hidden = project.screenshots.length === 1;
  const subject = projects.length > 1 ? "project" : "screenshot";
  const hasMultiple = projects.length > 1 || project.screenshots.length > 1;
  byId("cover-prev").hidden = byId("cover-next").hidden = !hasMultiple;
  byId("cover-prev").setAttribute("aria-label", `Previous ${subject}`);
  byId("cover-next").setAttribute("aria-label", `Next ${subject}`);
  selectScreenshot(0);
}

function stepScreenshot(direction) {
  if (projects[projectIndex].screenshots.length < 2) return;
  selectScreenshot(screenshotIndex + direction);
  animateSlide(lightbox.open ? lightboxImage : coverImage, direction);
}

function stepCover(direction) {
  if (projects.length > 1) {
    selectProject(projectIndex + direction);
    animateSlide(coverImage, direction);
  } else {
    stepScreenshot(direction);
  }
}

function animateSlide(image, direction) {
  if (reducedMotion.matches) return;
  image.getAnimations().forEach((animation) => animation.cancel());
  image.animate(
    [{ transform: `translateX(${direction * 22}px)`, opacity: 0.5 }, { transform: "translateX(0)", opacity: 1 }],
    { duration: 180, easing: "ease-out" }
  );
}

function enableNavigation(element, step) {
  element.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    step(event.key === "ArrowLeft" ? -1 : 1);
  });
}

function enableSwipe(stage, step) {
  let start;
  let suppressClick = false;
  stage.addEventListener("pointerdown", (event) => {
    suppressClick = false;
    if (event.isPrimary && event.pointerType === "touch") {
      start = { x: event.clientX, y: event.clientY };
    }
  });
  stage.addEventListener("pointercancel", () => { start = undefined; });
  stage.addEventListener("pointerup", (event) => {
    if (!start || !event.isPrimary || event.pointerType !== "touch") return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    start = undefined;
    if (Math.abs(dx) < 45 || Math.abs(dx) <= Math.abs(dy) * 1.25) return;
    suppressClick = true;
    step(dx < 0 ? 1 : -1);
  });
  stage.addEventListener("click", (event) => {
    if (!suppressClick || event.detail === 0) return;
    suppressClick = false;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, { capture: true });
}

byId("cover-prev").addEventListener("click", () => stepCover(-1));
byId("cover-next").addEventListener("click", () => stepCover(1));
lightboxPrevious.addEventListener("click", () => stepScreenshot(-1));
lightboxNext.addEventListener("click", () => stepScreenshot(1));
coverImage.draggable = false;
lightboxImage.draggable = false;
coverOpen.addEventListener("click", () => {
  lightbox.showModal();
  selectScreenshot(screenshotIndex);
});
lightboxClose.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("close", () => coverOpen.focus({ preventScroll: true }));
enableNavigation(coverStage, stepCover);
enableNavigation(coverThumbnails, stepScreenshot);
enableNavigation(lightbox, stepScreenshot);
enableSwipe(coverStage, stepCover);
enableSwipe(lightboxStage, stepScreenshot);
projectPicker.replaceChildren(...projects.map((project, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = project.pickerLabel ?? project.title;
  button.addEventListener("click", () => {
    if (index !== projectIndex) selectProject(index);
  });
  return button;
}));
projectPicker.hidden = projects.length < 2;
selectProject(0);
