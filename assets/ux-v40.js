(function(){
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const stops=[...document.querySelectorAll('article.stop[id^="parada-"]')];
function readStop(){
 const match=location.hash.match(/^#parada-(\d+)$/);if(!match)return;
 const stop=document.getElementById('parada-'+Number(match[1]));if(!stop)return;
 const group=document.getElementById('paradas-contenido');if(group)group.hidden=false;
 const groupButton=document.querySelector('.paradas-bloque-toggle');if(groupButton){groupButton.setAttribute('aria-expanded','true');groupButton.textContent='Ocultar las 13 paradas ↑';}
 const panel=stop.querySelector('.parada-contenido'),button=stop.querySelector('.parada-toggle');
 if(panel)panel.hidden=false;if(button){button.setAttribute('aria-expanded','true');button.textContent='Cerrar esta parada ↑';}
 stop.hidden=false;stop.classList.add('parada-abierta');
 const detail=stop.querySelector('details');if(detail)detail.open=true;
 const heading=stop.querySelector('h3');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
}
window.addEventListener('hashchange',readStop);
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#parada-"]');if(a)requestAnimationFrame(readStop);});
stops.forEach(stop=>{
 const detail=stop.querySelector('details');if(detail)detail.addEventListener('toggle',()=>{
 const help=stop.querySelector('.ux-stamp-help');if(help)help.hidden=detail.open;
 });
});
const project=document.getElementById('proyecto');
if(project){
 project.classList.remove('intro');const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent='Sobre el proyecto y su estado';
 details.append(summary);while(project.firstChild)details.append(project.firstChild);project.append(details);
 const note=document.createElement('p');note.textContent='Versión de revisión: documentación histórica, ubicaciones y accesibilidad pendientes de validación. Abre una historia para conseguir su sello.';details.insertBefore(note,summary.nextSibling);
 const resources=document.querySelectorAll('#recursos .resource');
 resources.forEach((resource,i)=>{if(i>0)details.append(resource);});
}
document.querySelectorAll('.stamp-notice').forEach(el=>el.setAttribute('role','status'));
readStop();
})();