const btn=document.getElementById('btn');
const color=document.getElementById('color')
  const container=document.getElementById('container')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


btn.addEventListener('click',result)

function result(){
 let clr='#'
  for(i=1;i<=6;i++){
   clr += some()
  }
  color.innerText=clr;
 container.style.backgroundColor=clr;
}
function some(){
  let ran=Math.floor(Math.random()*hex.length)
  return   hex[ran]

}
