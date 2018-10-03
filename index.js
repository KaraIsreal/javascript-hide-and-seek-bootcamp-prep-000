function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div.target')
}

function deepestChild() {
  let node = document.getElementById('grand-node');
    let nextNode = node.children[0];
   	while(nextNode) {
   	  node = nextNode;
   	  nextNode = node.children[0]
   	}
    return node;
  }


  function increaseRankBy(n) {
var rank = document.querySelectorAll('.ranked-list')
for(let i = 0; i < rank.length; i++){
  var children = rank[i].children
  for(let j = 0; j < children.length; j++){
    children[j].innerHTML = parseInt(children[i].innerHTML) + n;
  }
}
 }
