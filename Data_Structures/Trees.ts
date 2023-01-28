class Tree {
   value: any;
   left?: Tree | null;
   right?:Tree | null;
  constructor(value:any, left?:Tree, right?:Tree) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  isLeaf(){
    return !this.left && !this.right
  }
}

function findMin(t:Tree | null | undefined):any{
  if (t?.isLeaf()){
    return t.value
  }
  return  Math.min(t?.value,findMin(t?.right),findMin(t?.left))
}
function findMax(t:Tree | null | undefined):any{
  if (t?.isLeaf()){
    return t.value
  }
  return  Math.max(t?.value,findMax(t?.right),findMax(t?.left))
}
function findLongestPath(t:Tree | null | undefined):any{
  if (t?.isLeaf()) return 1
  return  Math.max(1+findLongestPath(t?.left),1+findLongestPath(t?.right))
}
const t =new Tree(1,new Tree(2,new Tree(8),new Tree(6)),new Tree(-7,new Tree(3),new Tree(-1)))

console.log(findMin(t));
console.log(findMax(t))
console.log(findLongestPath(t))