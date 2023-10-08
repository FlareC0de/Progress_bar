const button = document.querySelector(".button")
    text = document.querySelector(".text");

    button.addEventListener("click", () =>{
        button.classList.add("progress");
        text.innerText = "Uploading File..."

        setTimeout(() =>{
            button.classList.remove("progress"); //remove the progress after 6s
        }, 6000); //1000ms = 1s (6000 = 6s)
    });