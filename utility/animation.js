export const animation = () => {
  const faders = document.querySelectorAll(".fade");
  console.log(faders);
  const sliders = document.querySelectorAll(".slider");
  let options = { threshold:0.5, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver(function (
    enteries,
    appearOnScroll
  ) {
    enteries.forEach(entry => {
      if (!entry.isIntersecting) {
        console.log("asdasd");
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  sliders.forEach(slider => {
    appearOnScroll.observe(slider)
  })
};
