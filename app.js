const userList = document.querySelector('#user-list');
const userForm = document.querySelector('#user-form');
const searchForm = document.querySelector('#search-form');
const userSelect = document.querySelector('#user-select');
const postList = document.querySelector('#post-list');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const usernameInput = document.querySelector('#username-input');
  const nameInput = document.querySelector('#name-input');
  const emailInput = document.querySelector('#email-input');
  const webpageInput = document.querySelector('#webpage-input');
  const ageInput = document.querySelector('#age-input');

  const newUser = {
    id: usuarios.length + 1,
    username: usernameInput.value,
    name: nameInput.value,
    email: emailInput.value,
    webpage: webpageInput.value,
    age: ageInput.value
  };
  usuarios.push(newUser);
  renderUserList();
  userForm.reset();
});
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input').value;
  const filteredUsers = usuarios.filter(user => user.username === searchInput);
  renderUserList(filteredUsers);
});

userSelect.addEventListener('change', () => {
  const selectedUserId = userSelect.value;
  const selectedUser = usuarios.find(user => user.id === parseInt(selectedUserId));
  renderPostList(selectedUser);
});

function renderUserList(users = usuarios) {
  userList.innerHTML = '';
  users.forEach(user => {
    const userRow = `
      <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        <td>${user.age}</td>
      </tr>
    `;
    userList.innerHTML += userRow;
  });
}

function renderPostList(user) {
  postList.innerHTML = '';
  const filteredPosts = posts.filter(post => post.userId === user.id);
  filteredPosts.forEach(post => {
    const postItem = `
      <li>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </li>
    `;
    postList.innerHTML += postItem;
  });
}

function init() {
  renderUserList();
  usuarios.forEach(user => {
    const userOption = `<option value="${user.id}">${user.username}</option>`;
    userSelect.innerHTML += userOption;
  });
}

init();