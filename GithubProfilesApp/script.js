const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();

    createUserCard(respData);
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <img src="${user.avatar_url}" alt="${user.name}"/>
            <div class="card-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <b>Followers</b></li>
                    <li>${user.following} <b>Following</b></li>
                    <li>${user.public_repos} <b>Repos</b></li>
                </ul>
                <a href="${user.html_url}"><i class="fa-solid fa-link"></i> Github Profile</a>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});