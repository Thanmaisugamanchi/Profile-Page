function togglebtn(){
    const button = document.getElementById("btn");
    const number_of_followers =document.getElementById("followers");
    if(button.textContent === "Follow"){
         button.textContent="Following";
        number_of_followers.textContent = "8,151"
    }
    else{
        button.textContent ="Follow"
        number_of_followers.textContent = "8,150"
    }
}