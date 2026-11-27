const video=document.querySelector('#garage-loop'), button=document.querySelector('#motion');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let userPaused=false;
async function playMotion(){
  if (!video.getAttribute('src')) video.src=video.dataset.src;
  try {await video.play();} catch {}
  button.textContent=video.paused?'Play motion':'Pause motion';
}
button.hidden=false;
button.addEventListener('click',()=>{
  if (video.paused){userPaused=false;void playMotion();}
  else {userPaused=true;video.pause();button.textContent='Play motion';}
});
reduced.addEventListener('change',()=>{
  if (reduced.matches){video.pause();button.textContent='Play motion';}
  else if(!userPaused)void playMotion();
});
if (!reduced.matches && !navigator.connection?.saveData) void playMotion();
else button.textContent='Play motion';
for(const copy of document.querySelectorAll('[data-copy]')){
  copy.addEventListener('click',async()=>{
    const status=document.querySelector('#copy-status');
    try {await navigator.clipboard.writeText(copy.dataset.copy);status.textContent='Copied.';}
    catch {status.textContent='Copy the address shown above.';}
  });
}
