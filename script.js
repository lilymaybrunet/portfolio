const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}
document.querySelectorAll('.image-placeholder').forEach((el) => {
  const label = el.querySelector('span')?.textContent?.trim();
  // Pour ajouter une vraie photo, ajoute class="has-image"
  // et style="background-image:url('assets/images/ma-photo.jpg')"
  if (label) el.setAttribute('aria-label', label);
});
