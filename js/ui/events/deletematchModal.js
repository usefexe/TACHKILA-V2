const deletealert=document.getElementById('deletealert')
const deleteModal=document.getElementById('deleteModal')
const confirmDelete=document.getElementById('confirmDelete')
const cancelDelete=document.getElementById('cancelDelete')
import { deleteMatch } from "../../utils/matchservice.js"
import { mtchstate } from "../../storage/localstorage.js"
import { showMatch } from "../showmatch.js"
export function confirmeDeleteModal(){
 confirmDelete.addEventListener('click',()=>{
  deleteMatch(mtchstate.matchToedit)
  deletealert.classList.remove('hidden')
  setTimeout(()=>{deletealert.classList.add('hidden')},3000)
  deleteModal.classList.add('hidden')
  mtchstate.matchToedit=null
  showMatch(                                                                                                                                   )

 })
 cancelDelete.addEventListener('click',()=>{
    deleteModal.classList.add('hidden')
     mtchstate.matchToedit=null
 })
}