function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div.target')
}

function deepestChild() {
  return document.getElementById('div.grand-node.innerHTML');

 	}

  function increaseRankBy(n) {
   const newRank = document.querySelectorAll('.ranked-list');
   for(var i = 0; i < newRank.length; i++){
     document.querySelectorAll(".ranked-list")[i].children[i].innerHTML;
     return parseInt(newRank) + n
 }