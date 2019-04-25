
anime({
  targets: '.card',
  keyframes: [
    {opacity: 0},
    {translateX: -1000},
    {translateX: 0},
    {opacity: 1},
  ],
  duration: 2000,
  delay: anime.stagger(1000)
  
});

anime({
  targets: '#createdBy',
  translateY: [-300, 0],
  opacity: [0, 1],
  duration: 2000,
  delay: 4000
})

const personal = document.querySelector('.personal');
const projects = document.querySelector('.projects');
const professional = document.querySelector('.professional');


personal.addEventListener('click', openPersonal )
projects.addEventListener('click', openProjects )
professional.addEventListener('click', openProfessional )

function openPersonal(){
personal.classList.add('grow');
projects.classList.add('shrink');
professional.classList.add('shrink');
personal.classList.remove('shrink');
projects.classList.remove('grow');
professional.classList.remove('grow');
}

function openProjects(){
projects.classList.add('grow');
personal.classList.add('shrink');
professional.classList.add('shrink');
projects.classList.remove('shrink');
personal.classList.remove('grow');
professional.classList.remove('grow');
}

function openProfessional(){
professional.classList.add('grow');
personal.classList.add('shrink');
projects.classList.add('shrink');
professional.classList.remove('shrink');
projects.classList.remove('grow');
personal.classList.remove('grow');
}