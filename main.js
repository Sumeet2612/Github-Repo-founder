const text = document.getElementById("username");
const button = document.getElementById("search-btn");
const status = document.getElementById("status");
const clear = document.getElementById("clear-btn");
const profilecard = document.getElementById("profile-card");
const repolist = document.getElementById("repo-list");


clear.addEventListener("click" , function(){
    text.value = "";
    status.textContent ="";
    status.classList.remove("error");
    profilecard.classList.add("hidden");
    repolist.innerHTML = " ";
});


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
                    <p>${data.bio || " "}</p>
                    <a href = "${data.html_url}" target="_blank"> View Profile </a>
                </div>
                `;
            const endPoint = await fetch("https://api.github.com/users/" + username + "/repos?sort=updated&per_page=10");
            const endData = await endPoint.json();
            // console.log(endData);

            repolist.innerHTML="";
            endData.forEach(repo => {
                repolist.innerHTML += `
                <div class= "repo-card">
                    <h3><a href = "${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || "No Description"}</p>
                    <div class = "repo-meta">
                        <span>⭐ ${repo.stargazers_count} </span>
                        <span>🍴 ${repo.forks_count} </span>
                        <span>💻 ${repo.language || "Unknown"} </span>
                    </div>
                </div>
                `;
            });
        }
        button.disabled = false ;
    }
} 
    