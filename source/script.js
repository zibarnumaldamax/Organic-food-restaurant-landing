const meat = document.getElementById("meat-counter");
const rice = document.getElementById("rice-counter");
const croissant = document.getElementById("croissant-counter");

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
    window.requestAnimationFrame(step);
  }
};
window.requestAnimationFrame(step);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !localStorage.getItem('didRunIntro')) {
        animateValue(meat, 0, 322, 3000);
        animateValue(rice, 0, 228, 2500);
        animateValue(croissant, 0, 69, 2000);
        localStorage.setItem('didRunIntro', true);
      }
    });
  });

observer.observe(document.getElementById('meat-counter'));
