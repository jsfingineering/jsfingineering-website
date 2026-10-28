const nav=document.querySelector('.navlinks'), menu=document.querySelector('.menu');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const orb=document.querySelector('.orb');
if(orb){window.addEventListener('pointermove',e=>{orb.style.left=e.clientX+'px';orb.style.top=e.clientY+'px'})}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
