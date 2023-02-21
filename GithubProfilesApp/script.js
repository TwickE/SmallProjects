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
                    <li>Followers: ${user.followers}</li>
                    <li>Following: ${user.following}</li>
                    <li>Repos: ${user.public_repos}</li>
                </ul>
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