$(function () {
  const btns = $('.accordion');
  const panel = $('.panel');
  //  console.log(btns)



  // looping with 'for' the buttons
  for (let i = 0; i < btns.length; i++) {
    //  console.log(btns[i])
    // click event and class toggle
    btns.click(function () {
      $(this).toggleClass('active');
      $(this).next().toggleClass('show')
    })
  }
})
