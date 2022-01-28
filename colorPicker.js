
const btn = document.querySelector('#btn');
const colorDisplay = document.querySelector('.color');
// console.log(colorDisplay);

// -using simple method like putting colors already

// btn.addEventListener('click', ()=> {
//     const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     const random = Math.floor(Math.random() * color.length);
//     // console.log(random);
//     console.log(color[random]);
//     document.body.style.backgroundColor = color[random];
//     colorDisplay.textContent= color[random];
//     btn.style.backgroundColor= color[random];

// })


// // using the hex method


// const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D','E', 'F'];
// function randomNum() {
//     return Math.floor(Math.random() * hex.length);
// }

// // my own way

// console.log(hexColor);
// btn.addEventListener('click', () => {
//     let hexColor = '#';
// // console.log(hexColor.length);
// // console.log(hex[randomNum()]);

// while(hexColor.length <=6){
//     hexColor += hex[randomNum()];
// }
//     colorDisplay.textContent = hexColor;
//     document.body.style.backgroundColor = hexColor;
//     btn.style.backgroundColor= hexColor;
// })

// function getHexColor(){
//     let hexC = '#';
//     for(let i = 0; i < 6; i++){
//         hexC += hex[randomNum()];
//     }
//     colorDisplay.textContent = hexC;
//     document.body.style.backgroundColor = hexC;
//     btn.style.backgroundColor = hexC;

// }
// btn.addEventListener('click', getHexColor);

 function randomNum(length) {
    return Math.floor(Math.random() * length);
}

const nav = document.querySelector('.nav-center');
let hexC;
 nav.addEventListener('click', (e)=>{
     const choice = e.target.classList;
     console.log(choice);
     console.log(e.target)

     e.target.classList.add('current');
    //  console.log(e.target.parentElement.nextElementSibling.firstElementChild.classList.length)

    
    
   

     
     if(choice.contains('simple')){

          if(e.target.parentElement.nextElementSibling.firstElementChild.classList !== null && 
            e.target.parentElement.nextElementSibling.firstElementChild.classList.contains('current')  ){
           e.target.parentElement.nextElementSibling.firstElementChild.classList.remove('current')
     }
         hexC = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        btn.addEventListener('click', () => {
            // console.log(hexC[randomNum(hexC.length)]);
            const color = hexC[randomNum(hexC.length)]
             document.body.style.backgroundColor = color;
             colorDisplay.textContent= color;
            btn.style.backgroundColor= color;
})

}

    if(choice.contains('hexed')){

         if(e.target.parentElement.previousElementSibling.firstElementChild.classList !== null && e.target.parentElement.previousElementSibling.firstElementChild.classList.contains('current')  ){
           e.target.parentElement.previousElementSibling.firstElementChild.classList.remove('current')
     }

        hexC =  [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D','E', 'F'];

        btn.addEventListener('click', () => {
            let hex = '#';
            for(let i = 0; i < 6; i++){
                hex += hexC[randomNum(hexC.length)];
            }
            colorDisplay.textContent = hex;
            document.body.style.backgroundColor = hex;
            btn.style.backgroundColor= hex;
            })
        }
    
 })

