const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, {threshold:0.15});
revealEls.forEach(el=>io.observe(el));


const bars = document.querySelectorAll('.profile-item');
const barIo = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const span = e.target.querySelector('.profile-bar > span');
      span.style.width = e.target.dataset.fill + '%';
      barIo.unobserve(e.target);
    }
  });
}, {threshold:0.4});
bars.forEach(b=>barIo.observe(b));


const rail = document.getElementById('rail');
const sections = document.querySelectorAll('section.entry[data-index]');
sections.forEach(sec=>{
  const marker = document.createElement('div');
  marker.className = 'case-rail-num';
  marker.textContent = sec.dataset.index;
  marker.dataset.target = sec.dataset.index;
  rail.appendChild(marker);
});
const railNums = document.querySelectorAll('.case-rail-num');
const railIo = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    const idx = e.target.dataset.index;
    const marker = document.querySelector('.case-rail-num[data-target="'+idx+'"]');
    if(marker) marker.classList.toggle('active', e.isIntersecting);
  });
}, {threshold:0.5});
sections.forEach(s=>railIo.observe(s));