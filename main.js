const text = document.getElementById("username");
const button = document.getElementById("search-btn");
const status = document.getElementById("status");
const profilecard = document.getElementById("profile-card");
const repolist = document.getElementById("repo-list");


button.addEventListener("click" , handleSearch);

text.addEventListener("keydown" , function(e){
    if(e.key === "Enter"){
        handleSearch();
    }
})

async function handleSearch() {
    status.textContent = "";
    status.classList.remove("error");

    const username = text.value.trim();
    
    if(username === ""){
        status.textContent = "Enter username";
        status.classList.add("error")
    }
    else{
        status.textContent = "Searching.....";
        button.disabled = true ;
        const response = await fetch("https://api.github.com/users/" + username);
        const data = await response.json();
        console.log(data);
        
        if (!response.ok){
            status.classList.add("error")
            status.textContent = "User not found";
            button.disabled = false;
        }
        else {
            status.textContent = "";
            profilecard.classList.remove("hidden");
            profilecard.innerHTML = `
                <img src="${data.avatar_url}" alt="avatar"></img>
                <div class = "profile-info">
                    <h2> ${data.name}</h2>
                    <p>${data.bio}</p>
                    <a href = "${data.html_url}" target="_blank"> View Profile </a>
                </div>
                `;
        }
        button.disabled = false ;

    }
} 
    