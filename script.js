const palindrome = document.querySelector(".palindrome");
const checkBtn = document.querySelector(".check-btn");
const input = document.querySelector("#input");

let message = document.createElement("p");
    message.innerHTML="Enter text Only!";
    message.setAttribute("class","pop");
    palindrome.appendChild(message);



checkBtn.addEventListener("click", checkInput);

function checkInput(){

    let inputContent = input.value;
    inputContent.trim();
    let cleanText = inputContent.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(cleanText);

    if(cleanText === ""){
        message.innerHTML=`Enter a letter`;
    }

    let palindromeCheck = cleanText.split("").reverse("").join("");
    console.log(palindromeCheck)
    
    if (cleanText === palindromeCheck){
        message.innerHTML= `YES! ${cleanText} is a Palindrome`;
        console.log(cleanText);
        console.log(palindromeCheck);
        message.style.backgroundColor="#01bd5f"

    }else{
        message.innerHTML= `NO! ${cleanText} is a Palindrome`;
        message.style.backgroundColor="#f52a3b"
        message.style.color = "white";
    }
    
    
}
