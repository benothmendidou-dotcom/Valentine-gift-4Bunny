<link rel="stylesheet" href="https://unpkg.com/page-flip@2.0.7/dist/css/stPageFlip.min.css">
<script src="https://unpkg.com/page-flip@2.0.7/dist/js/stPageFlip.min.js"></script>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const pageFlip = new StPageFlip(document.getElementById('book'), {
      width: 400,   // base page width
      height: 600,  // base page height
      showCover: true,
      mobileScrollSupport: true // disable content scrolling on mobile devices
    });
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
  });
</script>
