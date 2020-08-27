const URL = 'https://dog.ceo/api/breeds/image/random'

document.addEventListener('DOMContentLoaded',() => {
  setupDogBtn()
})

const setupDogBtn = () => {
  const getDogBtn = document.querySelector('button')
  getDogBtn.addEventListener('click',() => {
    getDoggos()
  })
}

const getDoggos = () => {
  fetch(URL)
  .then(res => res.json())
  .then(dogObj => renderDoggoImg(dogObj.message))
}

const renderDoggoImg = (img_url) => {
  // create an img tag
  const dogImg = document.createElement('img')

  // change the src
  dogImg.src = img_url

  // ✋🏻
  const imgParent = document.querySelector('#addnewstuff')
  while (imgParent.firstChild) {
    imgParent.removeChild(imgParent.lastChild);
  }
  imgParent.appendChild(dogImg)
}





















// function fun1(){
//   fun2()
//   console.log('fun1 ended')
// }
//
// function fun2(){
//   fun3()
//   console.log('fun2 ended')
// }
//
// function fun3(){
//   fun4()
//   console.log('fun3 ended')
// }
//
// function fun4(){
//   var x = 10
//   console.log('fun4 ended')
//   return "this is yeet.."
// }
//
// fun1()


/*************************************************************************************************************************/
/* DIY Sleep Function */
/*************************************************************************************************************************/

  // function sleep(n) {
  //   let i = 0
  //   while(i < (12 ** 8) * n) {
  //     i++
  //   }
  // }
  //
  // console.log('Starting the sleep function')
  // sleep(10)
  // console.log('Wow that sleep function took forever to run. 1 Star 🌟')

/*************************************************************************************************************************/



// console.log('First Line')
// console.log('Second Line')
//
// setTimeout(()=>{
//   console.log('Third Line')
// },1000)
//
// setTimeout(() => {
//     console.log('Sixth Line')
// }, 6)
//
// setTimeout(() => {
//     console.log('Fifth Line')
// }, 5)
