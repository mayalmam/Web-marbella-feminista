(function(){
'use strict';
const root=document.getElementById('educacion');if(!root)return;
const stageNames={primaria:'Primaria',secundaria:'Secundaria',bachillerato:'Bachillerato'};
const stages={
primaria:{context:'Primaria · Observar lugares, reconocer los cuidados cotidianos y expresar descubrimientos con dibujos y palabras.',route:'Propuesta inicial: seleccionar pocas paradas cercanas y trabajar una pregunta de observación en cada una. La duración y el nivel se acordarán con el centro.',detective:'En pequeños grupos, buscad una fuente, una plaza y un lugar de encuentro. ¿Quién usa estos espacios y cómo podríamos cuidarlos? Se puede responder con un dibujo.',phases:{antes:'Conversar sobre qué es cuidar y qué lugares del barrio compartimos. Dibujar lo que el grupo espera encontrar en el paseo.',durante:'Observar con calma una plaza o una fuente. Dibujar un detalle y contar qué personas utilizan ese espacio.',despues:'Crear un mural colectivo con dibujos y preguntas. Compartir una idea para hacer la ciudad más acogedora.'}},
secundaria:{context:'Secundaria · Relacionar espacio público, trabajo y cuidados, y distinguir entre observación y documentación histórica.',route:'Propuesta inicial: elegir un eje temático y contrastar lo observado con fuentes seleccionadas. Acordar con el centro la selección de paradas y el itinerario.',detective:'Observad nombres de calles, placas y usos de una plaza. ¿Qué historias aparecen y cuáles echáis en falta? Separad lo que veis de lo que necesitaría una fuente documental.',phases:{antes:'Plantear una pregunta sobre mujeres y espacio público. Elegir fuentes de consulta y distinguir hechos, interpretaciones y dudas.',durante:'Registrar usos, placas y elementos urbanos sin atribuirles historias no documentadas. Reunir observaciones y preguntas.',despues:'Contrastar las observaciones con fuentes y elaborar una propuesta de mejora o una breve pieza divulgativa con referencias.'}},
bachillerato:{context:'Bachillerato · Investigar patrimonio y memoria desde una perspectiva de género, con atención a las fuentes y sus límites.',route:'Propuesta inicial: formular una investigación breve y comparar relatos, fuentes y presencia de las mujeres en el espacio público. El profesorado concretará alcance, paradas y evaluación.',detective:'Analizad qué relatos transmite un lugar y cómo se han construido. ¿Qué fuentes permiten sostenerlos? Identificad ausencias, contradicciones y cuestiones abiertas.',phases:{antes:'Definir una pregunta de investigación y una selección de fuentes primarias y secundarias. Revisar autoría, fecha, contexto y límites.',durante:'Documentar el lugar y formular hipótesis diferenciadas de los hechos comprobados. Anotar dudas y referencias para contrastar.',despues:'Redactar una interpretación argumentada con fuentes y límites explícitos. Compartirla y revisar qué nuevas preguntas deja abiertas.'}}
};
const routes=[{id:'ruta-uno',range:'01–05',name:'Del Cortijo al centro histórico',idea:'Trabajo, plazas y participación ciudadana.'},{id:'mapa-agua',range:'05–09',name:'Agua, cuidados y memoria social',idea:'El agua, la salud y las redes de cuidados.'},{id:'ruta-tres',range:'09–13',name:'De la plaza al mar',idea:'Espacio público, diversidad y transformación de la ciudad.'}];
const questions=[
{q:'Una pista: aquí está el Ayuntamiento. ¿Qué lugar vamos a investigar para hablar de participación ciudadana?',options:['Plaza de los Naranjos – Ayuntamiento','El Fuerte','Cortijo de Miraflores'],answer:0,feedback:'La Plaza de los Naranjos reúne el Ayuntamiento y el espacio público. Puede ayudarnos a preguntar cómo participa la ciudadanía en la vida de la ciudad.'},
{q:'Una pista: agua y cuidados cotidianos. ¿Qué parada del recorrido nos invita a explorar este tema?',options:['Avenida del Mar','Fuente – Ermita de Santiago','Calle Miguel Cano – Alameda'],answer:1,feedback:'La parada 05 propone investigar el agua y los cuidados. La identificación de la fuente vinculada a Los Caños está pendiente de contraste documental.'},
{q:'Una pista: del campo a la ciudad. ¿Dónde comenzaríamos a investigar el trabajo agrícola?',options:['Plaza de la Iglesia','El Fuerte','Cortijo de Miraflores – El Trapiche'],answer:2,feedback:'El primer recorrido propone comenzar en el Cortijo de Miraflores para investigar la presencia de las mujeres en el trabajo agrícola. Sus vínculos concretos deben documentarse.'}
];
let stage='primaria',phase='antes',question=0,opener=null;
function setText(id,text){const node=document.getElementById(id);if(node)node.textContent=text;}
function make(tag,text,className){const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;}
function renderWorksheet(){
setText('edu-worksheet-stage',stageNames[stage]);
const content=document.getElementById('edu-worksheet-content');content.replaceChildren();
for(const key of ['antes','durante','despues']){const h=make('h4',key==='despues'?'Después':key[0].toUpperCase()+key.slice(1));const p=make('p',stages[stage].phases[key]);content.append(h,p);}
}
function renderPhase(){setText('edu-phase-content',stages[stage].phases[phase]);root.querySelectorAll('[data-phase]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.phase===phase)));}
function renderStage(){
root.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.stage===stage)));
setText('edu-stage-context',stages[stage].context);setText('edu-route-intro',stages[stage].route);setText('edu-detective',stages[stage].detective);
setText('edu-teacher-intro','Etapa seleccionada: '+stageNames[stage]+'. Estas orientaciones son una propuesta de trabajo que debe concretarse y validarse con el profesorado.');
renderWorksheet();renderPhase();
}
const optionList=root.querySelector('.education-route-options');
routes.forEach((r,i)=>{const card=make('article');card.append(make('small','RECORRIDO '+(i+1)+' · '+r.range),make('h3',r.name),make('p',r.idea));const a=make('a','Ver recorrido general →','municipal-button outline');a.href='#'+r.id;card.append(a);optionList.append(card);});
function openPanel(name,source){
if(source)opener=source;
const panel=document.getElementById('edu-'+name);if(!panel)return;
root.querySelectorAll('.education-panel').forEach(p=>p.hidden=p!==panel);
root.querySelectorAll('[data-edu-open]').forEach(b=>{b.setAttribute('aria-controls','edu-'+b.dataset.eduOpen);b.setAttribute('aria-expanded',String(b.dataset.eduOpen===name));});
const title=panel.querySelector('h2');title?.focus({preventScroll:true});
panel.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
root.querySelectorAll('[data-edu-open]').forEach(b=>{b.setAttribute('aria-controls','edu-'+b.dataset.eduOpen);b.setAttribute('aria-expanded','false');b.addEventListener('click',()=>openPanel(b.dataset.eduOpen,b));});
root.querySelectorAll('[data-edu-close]').forEach(b=>b.addEventListener('click',()=>{b.closest('.education-panel').hidden=true;root.querySelectorAll('[data-edu-open]').forEach(x=>x.setAttribute('aria-expanded','false'));opener?.focus();}));
root.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',()=>{stage=b.dataset.stage;renderStage();}));
root.querySelectorAll('[data-phase]').forEach(b=>b.addEventListener('click',()=>{phase=b.dataset.phase;renderPhase();}));
function renderQuestion(){
const q=questions[question];setText('edu-game-question',q.q);setText('edu-game-feedback','');const box=document.getElementById('edu-game-options');box.replaceChildren();
q.options.forEach((label,i)=>{const b=make('button',label);b.type='button';b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>{box.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));setText('edu-game-feedback',i===q.answer?'¡Pista resuelta! '+q.feedback:'Esa opción abre otra historia. Vuelve a leer la pista y prueba con otro lugar.');});box.append(b);});
}
document.getElementById('edu-next-question').addEventListener('click',()=>{question=(question+1)%questions.length;renderQuestion();document.getElementById('edu-game-question').tabIndex=-1;document.getElementById('edu-game-question').focus();});
document.getElementById('edu-print').addEventListener('click',()=>{document.body.classList.add('education-print');window.print();});
window.addEventListener('afterprint',()=>document.body.classList.remove('education-print'));
function navState(){
let key=location.hash.slice(1)||'inicio';if(['ruta-uno','mapa-agua','ruta-tres','mapa'].includes(key)||key.startsWith('parada-'))key='recorrido';
document.querySelectorAll('.municipal-nav a').forEach(a=>{if(a.hash==='#'+key)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
}
window.addEventListener('hashchange',()=>{navState();if(location.hash==='#educacion')requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'instant'}));});
window.addEventListener('load',()=>{if(location.hash==='#educacion')window.scrollTo({top:0,behavior:'instant'});});
document.addEventListener('click',e=>{if(e.target.closest('.segment,.ruta-cerrar'))requestAnimationFrame(navState);});
renderStage();renderQuestion();navState();
})();