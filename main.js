nameOne = document.querySelector('.name-one');
nameTwo = document.querySelector('.name-two');
buttonOne = document.querySelector('.clear-one');
buttonTwo = document.querySelector('.clear-two');


// session Storage

sessionStorage.setItem('name','ali');
nameOne.innerText = sessionStorage.getItem('name');
// buttonOne 
buttonOne.addEventListener('click',()=>{
    sessionStorage.removeItem('name');
});

// Local Storage

localStorage.setItem('name','alie');
nameTwo.innerText = localStorage.getItem('name');
// buttonTwo 
buttonTwo.addEventListener('click',()=>{
    localStorage.removeItem('name');
});


// cookies

document.cookie = 'name=Ghazale expires='+new Date(2024,12,16).toUTCString();
//add new cookie
document.cookie = 'lastname=Taheri expires='+new Date(2024,12,16).toUTCString();

console.log(document.cookie);