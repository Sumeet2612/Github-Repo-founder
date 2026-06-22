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

function handleSearch() {
    
    
}