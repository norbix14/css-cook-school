document.addEventListener('DOMContentLoaded', () => {
  const emptyAnchors = Array.from(document.querySelectorAll('a[href="#"]'));

  const truncate = (text, len = 80, end = '...') => {
    let isLarge, limit;
    isLarge = text.length > len;
    limit = len - end.length;
    if (isLarge) {
      return text.substring(0, limit) + end;
    }
    return text;
  };

  if (emptyAnchors.length > 0) {
    emptyAnchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => e.preventDefault());
    });
  }
});
