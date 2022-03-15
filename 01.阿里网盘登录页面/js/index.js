;(function () {
  const allQ = document.querySelectorAll('.yuan')

  for (let i = 0; i < allQ.length; i++) {
    allQ[i].addEventListener('click', function (e) {
      e.target.classList.toggle('pic')
    })
  }
})()
