const name =document.getElementById('name');
const password =document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
    //error message object that icudes all the error masseges
    let messages =[];
    //checking for errors

    if(name.value === '' | name.value == null){
        messages.push('Name is requires');
    }
    if(password.value.length <= 6){
        messages.push('Password must be longer then 6');
    }

    if(password.value == password){
        messages.push('Password cannot be password');
    }
    if(messages.length > 0){
    //prevents the page from loading
    e.preventDefault();

    //take our error element add to innetText and join it with the massage from the push usinga comma
    errorElement.innerText = messages.join(', ');
    }  
})
