
//const cont = document.querySelectorAll(".sm");
const main = document.querySelector('.main-qs');
const questions = document.querySelectorAll('.question-answer');
const answer = document.querySelectorAll(".answer");
const mob = document.querySelector('.mob-btn-1');
const svg = document.querySelector('.icon-state_primary');
const svg2 = document.querySelector('.icon-state_secondary');
const mobile = document.querySelector('.mobile-container');

const openModal = function(){
mobile.style.top = "23%";
mobile.style.maxWidth = "65%";
mobile.style.visibility = "visible";
mobile.style.opacity = 1;
}
const closeModal = function () {
  mobile.style.top = "100%";
  mobile.style.visibility = "hidden";
  mobile.style.opacity = 0;
};

mob.addEventListener('click',function(e){
  mob.classList.toggle('active');
  
  if(mob.classList.contains('active'))
  {
    mobile.style.top = "23%";
    mobile.style.maxWidth = "65%";
    mobile.style.visibility = "visible";
    mobile.style.opacity = 1;
  }
  if(!mob.classList.contains('active'))
  {
     mobile.style.top = "100%";
     mobile.style.visibility = "hidden";
     mobile.style.opacity = 0;
     mobile.style.transition= 'opacity .25s ease-in-out, transform .25s ease-in-out, visibility .25s ease-in-out, max-height 0s linear .25s';
  }
});

// const butt = document.querySelectorAll('.btn-1');
// main.addEventListener('click',function(e){
//   const clicked1 = e.target.closest('.btn-1');
//   const ans = e.target.closest('.answer');
//   if(!clicked1)return;
//   butt.forEach(b => b.classList.remove('show-text'));
//   answer.forEach(a => a.classList.remove('show-text'));
//   clicked1.classList.toggle('show-text');
//   console.log(clicked1.dataset.tab);
//   document.querySelector(`.answer--${clicked1.dataset.tab}`).classList.add('show-text');
//   // ans.classList.add('show-text');
// })

questions.forEach(function(question){
let btn = question.querySelector('.btn-1');
btn.addEventListener('click',function(){
  questions.forEach(function(item){
    if(item !== question)
    {
      item.classList.remove('show-text');
      
    }
  })
  question.classList.toggle('show-text');
})
})

// for(let i=0;i<ds.length;i++)
// {
//   ds[i].addEventListener('click', function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     console.log(panel);
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//       this.classList.
      
//     } else {
//       panel.style.maxHeight ='300px';
//       console.log(panel.style.maxHeight);
//     }
//   });
// }
// ds.forEach((d)=> {
//   d.addEventListener('click',()=>{
//     var panel =this.nextElementSibling;
//     console.log(panel);
//     if(panel.style.maxHeight )
//     {
//       d.classList.add("active");    
//       panel.style.maxHeight = panel.scrollHeight + "px";
      
//     }
//   else{
//     d.classList.remove("active");   
//     panel.style.maxHeight = null;
//   }
//   })
// });

// function toggleF (){
//   for(let i=0;i<b.length;i++)
//   {
//     b[i].classList.remove('active');
//     content[i].style.display='none';
//   }
//   // if(itemToggle == "false")
//   // {
//   //   this.classList.add('active');
//   // }
// }
// b.forEach((item) => item.addEventListener('click',toggleF()));

// function toggleAccordion() {
//   const itemToggle = this.getAttribute("aria-expanded");

//   for (i = 0; i < b.length; i++) {
//     items[i].setAttribute("aria-expanded", "false");
//     b[i].classList.remove('active');
//    content[i].style.display="none";
//   }

//  if (itemToggle == "false") {
//    this.setAttribute("aria-expanded", "true");
//    this.classList.add("active");
//    //content.forEach((c) => (c.style.display = "block"));
//  }
// };
// b.forEach((item) => item.addEventListener("click", toggleAccordion));
// // console.log(b.length);
// for (let i = 0; i < b.length; i++) {
   
//   b[i].addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("clicked");
//     // if (e.target && e.target.nodeName === "button") {
//     //   let elements = document.querySelector(".sm").children;
//     //   for (let i = 0; i < elements.length; ++i) {
//     //     elements[i].classList.remove("active");
//     //   }
//     //   e.target.classList.add("active");
//     //    console.log(e.target);
//     // }
//     // console.log(e.currentTarget); // for see the current element
//     //  if (e.currentTarget.classList.contains('active-class')) {
//     //     content[i].classList.remove("hidden");
//     //  }
//     //  else {
//     //       e.currentTarget.classList.add('active-class');
//     //  }

//     // var current = document.getElementsByClassName("active");
//     // current[0].className = current[0].className.replace(" active", "");
//     // this.className += " active";

//     // if (current.length > 0) {
//     //   current[0].className = current[0].className.replace(" active", "");
//     //   content[i].classList.toggle("hidden"); 
//     // }

//     // // Add the active class to the current/clicked button
//     // this.className += " active";
//     // content[i].classList.remove("hidden"); 
//       if (e.target ) {
//         console.log(i);

//        e.target.classList.add('active')
//       content[i].classList.toggle("hidden");
//     }
//     e.target.classList.remove('active');
//   });
// }
//  const items = document.querySelectorAll(".btn-1");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute("aria-expanded");

//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute("aria-expanded", "false");
//   }

//   if (itemToggle == "false") {
//     this.setAttribute("aria-expanded", "true");    
//   }
// }

// items.forEach((item) => item.addEventListener("click", toggleAccordion));
document.querySelector(".menu").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("a-in")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  console.log("Button CLicked");
});
document.querySelector(".btn-div").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("btn")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  console.log("Button CLicked");
});
