function openMenu() {
    const body = document.body;
  
    body.classList.add("open");
  }
  
  function closeMenu() {
    const body = document.body;
  
    body.classList.remove("open");
  }

// I1oR4P08ELXL9tbz0
// service_4by504m
// template_eoc1074

async function sendEmail(event) {
    event.preventDefault();
    const body = document.body;
    const loading = document.querySelector(".contact__form__loading");
    const form = document.querySelector(".contact__form");
  
    try {
      // Loading state
      loading.classList.remove("hidden");
  
      await emailjs.sendForm(
        "service_4by504m",
        "template_eoc1074",
        event.target,
        "I1oR4P08ELXL9tbz0"
      );
  
      // Success state
      form.reset();
      loading.classList.add("hidden");
      body.classList.add("success-open");
      setTimeout(() => {
        body.classList.remove("success-open");
      }, 5000);
    } catch {
      loading.classList.add("hidden");
      alert(
        "An error has occured. Please try again later or contact me at m.samanta.dev@gmail.com"
      );
    }
  }
