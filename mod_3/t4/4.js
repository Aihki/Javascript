'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

students.forEach(student => {
  const school = document.createElement("option")
  school.value = student.id
  school.textContent = student.name
  document.querySelector("#target").appendChild(school)
})