(() => {
 const tabs=[document.querySelector('#tab-library'),document.querySelector('#tab-guide')];
 const panels=[document.querySelector('#library'),document.querySelector('#guide')];
 const tablist=document.querySelector('.bay-tabs');
 tablist.setAttribute('role','tablist');
 function select(i,focus=false){
   tabs.forEach((tab,j)=>{
     tab.setAttribute('aria-selected',String(i===j));
     tab.tabIndex=i===j?0:-1;
     panels[j].hidden=i!==j;
   });
   if(focus)tabs[i].focus();
 }
 tabs.forEach((tab,i)=>{
   tab.setAttribute('role','tab');
   tab.setAttribute('aria-controls',panels[i].id);
   panels[i].setAttribute('role','tabpanel');
   panels[i].setAttribute('aria-labelledby',tab.id);
   tab.addEventListener('click',e=>{e.preventDefault();select(i);history.replaceState(null,'','#'+panels[i].id);});
   tab.addEventListener('keydown',e=>{
     const next={ArrowLeft:(i+1)%2,ArrowRight:(i+1)%2,ArrowUp:(i+1)%2,ArrowDown:(i+1)%2,Home:0,End:1}[e.key];
     if(next!==undefined){e.preventDefault();select(next,true);history.replaceState(null,'','#'+panels[next].id);}
   });
 });
 function checkHash(){
   if(location.hash==='#guide')select(1);
   else if(location.hash==='#library')select(0);
 }
 select(location.hash==='#guide'?1:0);
 window.addEventListener('hashchange',checkHash);
 const film=document.querySelector('#tour'), toggle=document.querySelector('#tour-toggle'),label=document.querySelector('#media-label');
 const cover=document.querySelector('.cover');
 const copy=document.querySelector('#copy-example'), example=document.querySelector('#example-url'),copyStatus=document.querySelector('#copy-status');
 if(navigator.clipboard){
   copy.hidden=false;
   copy.addEventListener('click',async()=>{
     try{await navigator.clipboard.writeText(example.href);copyStatus.textContent='Example URL copied.';}
     catch{copyStatus.textContent='Couldn’t copy. Open the example and copy the browser address.';}
   });
 }
 toggle.setAttribute('role','button');
 toggle.setAttribute('aria-controls','tour');
 toggle.setAttribute('aria-expanded','false');
 toggle.addEventListener('keydown',e=>{if(e.key===' '){e.preventDefault();toggle.click()}});
 toggle.addEventListener('click',e=>{
   e.preventDefault();
   const show=film.hidden;
   film.hidden=!show;cover.hidden=show;
   toggle.textContent=show?'Back to cover':'Watch the trailer';
   toggle.setAttribute('aria-expanded',String(show));
   label.textContent=show?'Gameplay trailer · Spawn Garage':'Cover illustration';
   if(show)film.play().catch(()=>{});else film.pause();
 });
})();
