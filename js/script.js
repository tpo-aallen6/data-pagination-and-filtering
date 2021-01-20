/*
Treehouse Techdegree: Adam Allen
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" 
of nine students
*/
const studentsPerPage = 9;

function showPage(list, page) {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;
   let studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = ``;

      for (let i = 0; i < list.length; i++) {

         if (i >= startIndex && i < endIndex) {
            studentList.insertAdjacentHTML('beforeend', `
            <li class="student-item cf">
            <div class="student-details">
              <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
              <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
              <span class="email"${list[i].email}</span>
            </div>
            <div class="joined-details">
              <span class="date">Joined ${list[i].registered.date}</span>
            </div>
            </li>
            `);
         }
      }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   let numOfPages = Math.ceil(list.length / studentsPerPage);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = ``;

      for (let i = 1; i <= numOfPages; i++) {
         let button =  `<li>
                           <button type="button">${i}</button>
                        </li>`
         linkList.insertAdjacentHTML('beforeend', button);
         document.querySelector('li button').className = 'active';
      }
   
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });

}

// Call functions
showPage(data, 1);
addPagination(data);