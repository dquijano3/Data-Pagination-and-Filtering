const itemsPerPage = 9; // Number of students to display per page

function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      const student = list[i];
      const studentItem = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
          </div>
        </li>
      `;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  }
}

function addPagination(list) {
  const numOfPages = Math.ceil(list.length / itemsPerPage);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for (let i = 1; i <= numOfPages; i++) {
    const button = `
      <li>
        <button type="button">${i}</button>
      </li>
    `;
    linkList.insertAdjacentHTML('beforeend', button);
  }

  const firstButton = linkList.querySelector('button');
  firstButton.classList.add('active');

  linkList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const buttons = linkList.querySelectorAll('button');
      buttons.forEach((button) => {
        button.classList.remove('active');
      });

      event.target.classList.add('active');
      const page = parseInt(event.target.textContent);
      showPage(list, page);
    }
  });
}

// Call the showPage and addPagination functions initially
showPage(data, 1);
addPagination(data);