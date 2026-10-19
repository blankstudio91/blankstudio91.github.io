/*
  Dark mode toggle.
  - The first visit follows the visitor's system setting (light or dark).
  - Clicking the toggle switches themes and remembers the choice on every page.
  The tiny script in each page's <head> applies the saved theme before the
  page paints, so there's no flash of the wrong colors.
*/
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function sync() {
    var isDark = current() === 'dark';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* private mode: still switches, just isn't remembered */ }
    sync();
  });

  sync();
})();
