// const para=getElementById("para")
// para.textcontain

// const para=document.querySelectorAll(" .para")
// para[0].textContent="THIS is updated one"
// para[1].computedStyleMap.colour="green"
// console.log

// const para=document.querySelectorAll(" .para")
// para[0].innerHTML="<h1>THIS is heading</h1>"
// console.log(container)

// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")



// function show(){
//     alert("you have clicked the button")
//  }

// button.addEventListener('mouseover',show)
// button.removeEventListener('click'), show)

// const btn=document.querySelector("#btn")
// const stop=document.querySelector('#stop')
    
// btn.addEventlistener('keyup', (event)=>{
//     console.log(event.key)
// })

// stop.addEventlistener('click', function(){
//     btn.removeEventListener('click', show)
//})

// const form=document.querySelector("form")
// form.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.log(event.srcElement[0].value)
//     console.log(event.srcElement[1].value)
//     console.log(event)
//     console.log("button clicked")
// })


// console.log('we will right code')
// console.log('we will write code')

// console.log(a)
// var a=3453
// let b=456;

// console.log(a)
// console.log(b)

// function print(){
//     let c=40
//     console.log("inside fn")
// }

// print()

// let total=345;

// function calculate(){
    // console.log(total)
//     var total=565
// }

// calculate()
  
// console.log("this is the beginning of the code")
// const timeout=setTimeout(()=>{console.log("after 2 se")},2000)
// clearTimeout(timeout)
// console.log("this is the end of the code")

// const interval=setInterval(() => {console.log("printing at every two second")}, 2000);

// setTimeout(() => {clearInterval(interval)}, (1000))

// let i = 1;
// const interval = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i > 10) {
//         clearInterval(interval);
//     }
// }, 2000); // 2 seconds

// let count=0;

// const interval=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if(count===100){
//         clearInterval(interval)
//     }
// },1000)

// const studentname=document.querySelector('#name')
// const button=document.querySelector('.btn')
// const list=document.querySelector('.list')

// button.addEventListener("click",()=>{
//     // #creating the element
//     const li=document.createElement("li")
//     const deletebutton=document.createElement("button")
//     // providing the text
//     li.innerText=studentname.value
//     deletebutton.innerText="delete"

//     deletebutton.addEventListener('click', ()={
//         // li.remove()
//         list.removechild(li)
//     }


//     li.appendChild(deletebtn)
//     list.appendChild(li)
//     studentname.value=""
// })

// console.log("starting homework...");

// setTimeout(() => {
//     console.log("homework done");
//     console.log("starting dinner");

//     setTimeout(() => {
//         console.log("dinner done !");
//         console.log("getting ready to go out");

//         setTimeout(() => {
//             console.log("going to the playgroung!");
//         }, 1000);  

//     }, 1500);

// }, 2000);


// function finishHomework(callback) {
// console.log("Starting homework...");
// setTimeout(() => {
// console.log("Homework done!"); callback();

// }, 2000);

// }

// function eatDinner (callback) {
// console.log("Starting dinner...");
// setTimeout(() => {
// console.log("Dinner done!");
// callback();

// }, 1500);
// }

// function goToPlayground() {
// console.log("Going to the playground!");
// }

// // Chained in steps, but cleaner

// finishHomework(() => { eatDinner(() => { goToPlayground(); });

// });


// const p= new Promise((res, rej)=>{
//     console. log ("Going to do the homework!!")

//     setTimeout(()=>{
//       const done=true;
//       if(done) {
//           res ("Success")
//       }else{
//         rej ("Failed to fetch Data from the server")
//       }
//     },3000)
// })


//  p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{          
//     console.log("finally blocked")
// })

// promises changing

// function dohomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("homework complete")
//                 res("homework not done")
//             }
//             else{
//                 rej("homework not done")
//             }
           
//         },2000)
//     })
//     return p;
// }
// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("dinner complete")
//                 res("dinner not done")
//             }
//             else{
//                 rej("dinner not done")
//             }
            
//         },2000)
//     })
//     return p;
// }

// dohomework().then((data)=>{
//     console.log(data)
// }).then((data)=>{
//     console.log(data)
//     return gotoplaygroung()
// }),then((data)=>{
//     console.log(data)
// })

// console.log("first line")
// setTimeout(()=>{
//     console.log("inside timeout")
// },0)
// const p=new Promise((res,rej)=>{
//     res()
// })
// onabort.then(()=>{
//     console.log("inside promise")
// })
// console.log("last line")

function orderfood(){
    return new Promise((res,rej)=>{
       setTimeout(() => {
        console.log("food delivered")
        res()
       }, 2000);
    })
}

  function preparedfood(){
      return new promises((res,rej)=>{
        setTimeout(() => {
         console.log("food prepared")
         res()
       }, 2000);
    })
}

orderfood()
.then(()=>{
    console.log("eatind food")
})

function deliverFood(){
    return new Promise ((res, rej)=>{
        setTimeout(() =>{
            console.log ("Food delivered")
            res ()
        },2000)
    })
}

async function foodorder(){
    await orderFood ()
    await prepareFood()
    await deliverFood()
    console.log("Enjoy your food")
}

foodorder()