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






fetch("data.json")
.then(function(response){
   return response.json();
})

.then(function(products){
   let placeholder = document.querySelector("#section-box-data");
   let out = "";
   for(let item of products){

      out += `
              <div class="box-data">
              <div id="${item.id}" class="footer-box">
              <img src="${item.img}" alt="${item.description}">
              </div>
              <div class="info-activity">
              <div class="title-and-option">
              <p class="title">${item.title}</p>
              <img class="option-icon" src="images/icon-ellipsis.svg">
              </div>
              <div class="current-previous-div">
              <p class="current-hour">${item.timeframes.daily.current}</p>
              <p class="previous-hour">${item.timeframes.daily.previous}</p>
              </div>
              </div>
              </div>
              `;

   }
 
   placeholder.innerHTML = out;
});


daily.addEventListener('click', function(){
fetch("data.json")
.then(function(response){
   return response.json();
})

.then(function(products){
   let placeholder = document.querySelector("#section-box-data");
   let out = "";
   for(let item of products){

      out += `
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

   }
 
   placeholder.innerHTML = out;
});

})











weekly.addEventListener('click', function(){
    fetch("data.json")
    .then(function(response){
       return response.json();
    })
    
    .then(function(products){
       let placeholder = document.querySelector("#section-box-data");
       let out = "";
       for(let item of products){
    
          out += `
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
                  <p class="current-hour">${item.timeframes.weekly.current}</p>
                  <p class="previous-hour">${item.timeframes.weekly.previous}</p>
                  </div>
                  </div>
                  </div>
                  `;
    
       }
     
       placeholder.innerHTML = out;
    });
    
    })












    monthly.addEventListener('click', function(){
        fetch("data.json")
        .then(function(response){
           return response.json();
        })
        
        .then(function(products){
           let placeholder = document.querySelector("#section-box-data");
           let out = "";
           for(let item of products){
        
              out += `
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
                      <p class="current-hour">${item.timeframes.monthly.current}</p>
                      <p class="previous-hour">${item.timeframes.monthly.previous}</p>
                      </div>
                      </div>
                      </div>
                      `;
        
           }
         
           placeholder.innerHTML = out;
        });
        
        })
