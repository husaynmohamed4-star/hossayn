document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.querySelector('.topbar'),toggle=document.querySelector('.nav-toggle');
 toggle?.addEventListener('click',()=>nav.classList.toggle('menu-open'));
 document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('menu-open')));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
 const lb=document.querySelector('.lightbox');
 if(lb){const im=lb.querySelector('img'),cap=lb.querySelector('.lb-caption');
  document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{im.src=el.dataset.src||el.src;cap.textContent=el.dataset.title||el.alt||'';lb.classList.add('open');document.body.style.overflow='hidden'}));
  const close=()=>{lb.classList.remove('open');document.body.style.overflow=''};lb.querySelector('.lb-close')?.addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 }
 document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const v=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(x=>x.hidden=v!=='all'&&x.dataset.category!==v)}));
});
