(function(){
const mobile=matchMedia('(max-width:780px)'),routes=['ruta-uno','mapa-agua','ruta-tres'];let lastRoute='recorrido',lastHash='',lastMobile=mobile.matches;
const body=document.body,main=document.querySelector('main');
[...main.children].forEach(el=>{const id=el.id;if(id==='inicio')el.dataset.screen='inicio';else if(id==='historias')el.dataset.screen='inicio historias';else if(id==='pasaporte-entrada')el.dataset.screen='inicio';else if(id==='mapa'||id==='recorrido')el.dataset.screen='mapa';else if(routes.includes(id))el.dataset.screen='ruta';else if(id==='paradas')el.dataset.screen='ficha';else if(id==='pasaporte')el.dataset.screen='pasaporte';else if(id==='recursos')el.dataset.screen='recursos';else{el.dataset.screen='proyecto';el.classList.add('app-context');}});
const back=document.createElement('a');back.className='app-stop-back';back.href='#recorrido';back.textContent='← Volver al recorrido';document.getElementById('paradas').prepend(back);
const search=document.getElementById('history-search'),list=document.getElementById('history-list'),count=document.getElementById('history-search-count'),cards=[...list.children];
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function filter(){const q=normalize(search.value.trim());let visible=0;cards.forEach(card=>{card.hidden=q&&!normalize(card.textContent).includes(q);if(!card.hidden)visible++;});count.textContent=visible+' de '+cards.length+' historias';}
search.addEventListener('input',filter);filter();
function routeForStop(n){return n<=5?'ruta-uno':n<=9?'mapa-agua':'ruta-tres';}
function sync(scroll){const hash=location.hash.slice(1)||'inicio';let view='inicio';
if(hash==='historias'){view='historias';}
else if(hash==='mapa'||hash==='recorrido'){view='mapa';}
else if(routes.includes(hash)){view='ruta';lastRoute=hash;}
else if(/^parada-(?:[1-9]|1[0-3])$/.test(hash)){view='ficha';const n=Number(hash.split('-')[1]);if(!routes.includes(lastRoute))lastRoute=routeForStop(n);document.querySelectorAll('.stop').forEach(el=>el.classList.toggle('app-active-stop',el.id===hash));back.href='#'+lastRoute;}
else if(hash==='paradas'){view='mapa';}
else if(hash==='pasaporte'){view='pasaporte';}
else if(hash==='recursos'){view='recursos';}
else if(hash==='proyecto'){view='proyecto';}
body.dataset.view=view;body.classList.add('app-ready');
if(view!=='historias'&&search.value){search.value='';filter();}
routes.forEach(id=>{const el=document.getElementById(id);if(view==='ruta')el.hidden=id!==hash;});
document.querySelectorAll('[data-app-nav]').forEach(a=>{const active=a.dataset.appNav===(view==='ruta'||view==='ficha'?'mapa':view);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
if(view==='ruta'&&hash==='mapa-agua'&&window.__aguaResize)window.__aguaResize();
if(mobile.matches&&(scroll||hash!==lastHash))requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'instant'}));
lastHash=hash;
}
window.addEventListener('hashchange',()=>{sync(true);if(mobile.matches)setTimeout(()=>window.scrollTo({top:0,behavior:'instant'}),140);});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a){const h=a.getAttribute('href').slice(1);if(h==='paradas'&&mobile.matches){e.preventDefault();location.hash='recorrido';}requestAnimationFrame(()=>sync(true));}if(e.target.closest('.ruta-cerrar'))requestAnimationFrame(()=>sync(true));});
document.getElementById('history-all').addEventListener('click',()=>{if(mobile.matches&&body.dataset.view==='inicio')location.hash='historias';});
mobile.addEventListener('change',()=>{sync(false);if(lastMobile!==mobile.matches){lastMobile=mobile.matches;window.scrollTo({top:0,behavior:'instant'});}});
// Old section anchors may scroll after expansion; settle the mobile screen after it is revealed.
sync(false);if(mobile.matches)setTimeout(()=>window.scrollTo({top:0,behavior:'instant'}),400);
})();
