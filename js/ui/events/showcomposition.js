

const compositionModal=document.getElementById('compositionModal')
const closeCompositionModal= document.getElementById('closeCompositionModal')
export function ShowComposition(compo){

    closeCompositionModal.addEventListener('click',()=>{
        compositionModal.classList.add('hidden')
    })
    compositionModal.classList.remove('hidden')
    const terrainPostes = {
    GB: document.getElementById('GK'),
    LB: document.getElementById('LB'),
    RB: document.getElementById('RB'),
    CB1: document.getElementById('CB1'),
    CB2: document.getElementById('CB2'),
    LM: document.getElementById('LM'),
    CM1: document.getElementById('CM1'),
    CM2: document.getElementById('CM2'),
    RM: document.getElementById('RM'),
    ST1: document.getElementById('ST1'),
    ST2: document.getElementById('ST2')


};
Object.keys(terrainPostes).forEach((el)=>{
    const post =terrainPostes[el]
   
    const player=compo.find((pl)=>{
      return  pl.position===String(el)
    })

    post.querySelector('div').textContent=player.number
    post.querySelector('span').textContent=player.name
})



}