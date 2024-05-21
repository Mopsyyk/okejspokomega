var titleFragments = ['@', '@m', '@mo', '@mop', '@mops', '@mopsy', '@mopsyy', '@mopsyyk', '@mopsyy', '@mopsy', '@mops', '@mop', '@mo', '@m'];

function changeTitle() {
  var currentIndex = 0;

  function updateTitle() {
    document.title = titleFragments[currentIndex];
    currentIndex = (currentIndex + 1) % titleFragments.length;
  }

  setInterval(updateTitle, 270);
}

changeTitle()