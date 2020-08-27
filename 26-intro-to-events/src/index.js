document.addEventListener('DOMContentLoaded',() => {
  console.log('Page finished loading..')


  const buttonParent = document.querySelector('#button-parent')

  buttonParent.addEventListener('click', (e) => {
    if (e.target.id === 'alert') {
      alert('Hello World')
    }else if(e.target.id === 'log'){
      console.log('Hello World')
    }else if(e.target.id === 'errr') {
      console.error('Hello error...')
    }
  })


  // Form
    const commentForm = document.querySelector('#comment-form')
    commentForm.addEventListener('submit',(e) => {

      e.preventDefault()

      let commentField = e.target.querySelector('#new-comment')
      // console.log(commentField.value)

      // create list items
      const listItem = document.createElement('li')
      // change the content
      listItem.innerText = commentField.value
      // find the parent
      const commentsContainer = document.querySelector('#comments-container')
      // ✋🏻
      commentsContainer.appendChild(listItem)

      e.target.reset()
    })

})

// // Alert button
//   const alertBtn = document.querySelector('#alert')
//   const alertFun = () => alert('Hello World')
//   alertBtn.addEventListener('click',alertFun)
//
// // Log button
//   const logBtn = document.querySelector('#log')
//   const logBtnFun = () => console.log('Hello World')
//   logBtn.addEventListener('click',logBtnFun)
//
// // Error button
//   const errorBtn = document.querySelector('#errr')
//   const errorBtnFun = () => console.error('Hello World')
//   errorBtn.addEventListener('click',errorBtnFun)
