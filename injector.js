const styleInject = `
<style>
[ aria-label="Timeline: Trending now" ] {
  display: none;
}
[ aria-label="Search and explore" ] {
  display: none;
}
</style>
`;

window.addEventListener('load', function () {
  document.head.insertAdjacentHTML('beforeend', styleInject);
})
