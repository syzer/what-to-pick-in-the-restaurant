// run on https://e-h.sv-restaurant.ch/de/menuplan/sv-restaurant-flowtec/
const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

document.querySelectorAll('.menu-description')
  .forEach(e => e.innerText += ' und Sriracha Sos.')

Array.from(document.querySelectorAll('.menu-description'))
  .filter((e, i) => ![2, 6, 10, 14, 18].includes(i))
  .map(e => e.outerHTML += `
<svg width="250px" height="250px" stroke="red" fill="red" version="1.1" viewBox="0 0 250 250"
  xmlns="http://www.w3.org/2000/svg"
  style="position: relative; z-index: 10; overflow: visible; top: -250px; left: -50px; transform: scale(0.8) rotate(${randomBetween(-25, 25)}deg);"
  data-clicked="4"
  onclick="
    this.dataset.clicked -= 1;
    if (this.dataset.clicked < 0) {
      this.remove();
      alert('Congratulations on becoming developer! Today is not the cheat day...')
    }"
  >
  <path d="m619.53 23.379c-103.49 17.723-193.06 67.816-266.2 126.05-80.586-72.07-150.75-111.36-150.75-111.36-33.656-20.973-75.77-15.176-108.22 0-32.48 15.148-32.48 62.746 0 69.242 71.203 27.859 133.79 64.766 188.47 105.11-96.738 96.266-150.28 191.86-150.28 191.86-20.945 33.656-15.148 75.77 0 108.22 15.176 32.48 62.777 32.48 69.273 0 37.883-96.77 92.262-177.74 149.63-244.3 166.15 148.26 237.02 310.41 232.04 256.87-22.344-130.51-96.098-238.84-172.82-319.96 132.61-130.22 256.65-186.19 208.85-181.74z">
    <animateTransform
      id="right"
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 250 250"
      to="5 250 250"
      dur="6s"
      begin="0s; left.end"
      />
    <animateTransform
      id="left"
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="5 250 250"
      to="0 250 250"
      dur="6s"
      begin="right.end"
      />
  </path>
</svg>`)
