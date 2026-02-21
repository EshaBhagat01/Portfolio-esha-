// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link=>{
 link.addEventListener('click', e=>{
  e.preventDefault();
  document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
 });
});

// Animate skill bars
window.addEventListener('scroll', ()=>{
 let skills = document.querySelectorAll('.progress-bar');
 let trigger = window.innerHeight + window.scrollY;
 skills.forEach(skill=>{
   let parentTop = skill.parentElement.getBoundingClientRect().top + window.scrollY;
   if(trigger > parentTop + 50){
     skill.style.width = skill.classList.contains('html') ? '90%' :
                         skill.classList.contains('css') ? '85%' :
                         skill.classList.contains('js') ? '75%' :
                         skill.classList.contains('react') ? '70%' : '0';
   }
 });
});