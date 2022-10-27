let daily = document.querySelector('#daily-choose')
let weekly = document.querySelector('#weekly-choose')
let monthly = document.querySelector('#monthly-choose')


daily.addEventListener('click', function(){
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')

})

weekly.addEventListener('click', function(){
    daily.classList.remove('active')
    weekly.classList.add('active')
    monthly.classList.remove('active')
})

monthly.addEventListener('click', function(){
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.add('active')
    console.log('hello world')
})





// JS WITH JSON DATA 

let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
if(this.readyState == 4 && this.status == 200 ){
    let products = JSON.parse(this.responseText);
    let output = "";



    for(let item of products){
        if(daily.classList.contains('active')){
        output += `
        <div class="box-data">
        <div id="${item.id}" class="footer-box">
        <img src="${item.img}" alt="${item.description}">
        </div>
        <div class="info-activity">
        <div class="title-and-option">
        <p class="title">${item.title}</p>
        <img src="images/icon-ellipsis.svg">
        </div>
        <div class="current-previous-div">
        <p class="current-hour">${item.timeframes.daily.current}</p>
        <p class="previous-hour">${item.timeframes.daily.previous}</p>
        </div>
        </div>
        </div>
        `;
        console.log('daily')
        
    }  

    if(weekly.classList.contains('active')){
        output += `
        <div class="box-data">
        <div id="${item.id}" class="footer-box">
        <img src="${item.img}" alt="${item.description}">
        </div>
        <div class="info-activity">
        <div class="title-and-option">
        <p class="title">${item.title}</p>
        <img src="images/icon-ellipsis.svg">
        </div>
        <p class="current-hour">${item.timeframes.weekly.current}</p>
        <p class="previous-hour">${item.timeframes.weekly.previous}</p>
        </p>
        </div>
        </div>
        `;
        console.log('weekly')
       
    }   

    if(monthly.classList.contains('active')){
        output += `
        <div class="box-data">
        <div id="${item.id}" class="footer-box">
        <img src="${item.img}" alt="${item.description}">
        </div>
        <div class="info-activity">
        <div class="title-and-option">
        <p class="title">${item.title}</p>
        <img src="images/icon-ellipsis.svg">
        </div>
        <p class="current-hour">${item.timeframes.monthly.current}</p>
        <p class="previous-hour">${item.timeframes.monthly.previous}</p>
        </p>
        </div>
        </div>
        `;
        console.log('monthly')
        
    } 


}
document.querySelector(".section-box-data").innerHTML = output;

}
}


// document.querySelector('body').addEventListener('click', function(){
// 	if(urlcourante == 'http://127.0.0.1:5500/html/controllers.html' ){
//         alert('tt')
// 	}
		
// 		else{
// 			alert(urlcourante)
// 		}
	
// })
	




// let http = new XMLHttpRequest();
// http.open('get', 'data.json', true);
// http.send();
// http.onload = function(){
// if(this.readyState == 4 && this.status == 200 ){
//     let products = JSON.parse(this.responseText);
//     let output = "";


//     for(let item of products){
//         output += `
//         <div class="products"> 
//       <div class="tag-work"><img src="${item.img}" alt=""></div>
//       <div class="data-box">
//         <div class="activity-and-option">
//           <span class="activity">${item.title}</span>
//           <img src="images/icon-ellipsis.svg" alt="">
//         </div>
//         <span class="current-hour">${item.current}</span>
//         <span class="previous-hour">${item.previous}</span>
//       </div>
//         `;
//     }  
    



// document.querySelector(".products").innerHTML = output;

//   }
// }
