async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    document.getElementById("user-container").innerHTML = "";

    const userList = document.createElement("ul");

    users.forEach((user) => {
      const list = document.createElement("li").textContent = user;
      userList.appendChild(list);
    })

    dataContainer.appendChild(userList);

  } catch (error) {
    dataContainer.innerHTML = "";

    dataContainer.textContent = "Failed to load user data.";
  }
}


document.addEventListener("DOMContentLoaded", fetchUserData);