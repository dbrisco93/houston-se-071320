const URL = 'https://dog.ceo/api/breeds/image/random'

    // DOMContentLoaded
    document.addEventListener('DOMContentLoaded',setupListener)

    function setupListener(){
        // EventListener for button that listens for click
        const getDoggieBtn = document.querySelector('button')
        // Callback
        getDoggieBtn.addEventListener('click',getTheDoggie)
    }

    function getTheDoggie(e){
        // console.log(e.target)
        // Get the data 
        const data = fetch(URL)
        
        data
        .then(function (res){
            return res.json()
        })
        .then(function (dogObj){
            rendersDog(dogObj)
        })
        .catch(function (err){
            console.error(err)
        })
    }

    function rendersDog(dogObj){

        // Get the image from the data
        let imgUrl = dogObj.message
        // Create an element => img tag
        const imgTag = document.createElement('img')
        // Set the source => image source
        imgTag.src = imgUrl
        // 🖐🏻🖐🏻
            // Parent node
            const imgParent = document.querySelector('#addnewstuff')
            // Empty imgParent 
            imgParent.innerHTML = ''
            // appendChild
            imgParent.appendChild(imgTag)
    }

   

    


























// function fun1(){
//   fun2()
//   console.log('fun1 ended')
// }

// function fun2(){
//   fun3()
//   console.log('fun2 ended')
// }

// function fun3(){
//   fun4()
//   console.log('fun3 ended')
// }

// function fun4(){
//   console.log('fun4 ended')
//   return "this is yeet.."
// }

// fun1()


/*************************************************************************************************************************/
/* DIY Sleep Function */
/*************************************************************************************************************************/

//   function sleep(n) {
//     let i = 0
//     while(i < (12 ** 8) * n) {
//       i++
//     }
//   }
  
//   console.log('Starting the sleep function')
//   sleep(10)
//   console.log('Wow that sleep function took forever to run. 1 Star 🌟')

/*************************************************************************************************************************/



// console.log('First Line')
// console.log('Second Line')

// setTimeout(()=>{
//   console.log('Third Line')
// },1000)

// setTimeout(() => {
//     console.log('Sixth Line')
// }, 5)

// setTimeout(() => {
//     console.log('Fifth Line')
// }, 5)









