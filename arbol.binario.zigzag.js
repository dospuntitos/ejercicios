//Primer nivel
const tree = { key: 'a' };

//Segundo nivel
tree.left = { key: 'b' }
tree.right = { key: 'c' }

//Tercer nivel
tree.left.left = { key: 'd' }
tree.left.right = { key: 'e' }
tree.right.left = { key: 'f' }
tree.right.right = { key: 'g' }

//Cuarto nivel
tree.left.left.left = { key: 'h' }
tree.left.left.right = { key: 'i' }
tree.left.right.left = { key: 'j' }
tree.left.right.right = { key: 'k' }
tree.right.left.left = { key: 'l' }
tree.right.left.right = { key: 'm' }
tree.right.right.left = { key: 'n' }
tree.right.right.right = { key: 'o' }

const fromUp = (nodes) => {

    var stack = [];
    var currentLevel = [];
    var levels = [];
    var currentNode = 0;
    var maxLevelSize = 1;
    var noLeft = false;
    var noRight = false;

    stack.push(nodes);
    while (stack.length > 0) {

        var node = stack.shift();
        currentNode++;

        currentLevel.push(node.key);

        if (node.left){
            stack.push(node.left);
            noLeft = false;
        }
        else noLeft = true;
        if (node.right){
            stack.push(node.right);
            noRight = false;
        }
        else noRight = true;

        if (maxLevelSize === currentNode){
            levels.push(currentLevel);
            currentLevel = [];
            maxLevelSize = (maxLevelSize * 2) - (noLeft ? 1 : 0) - (noRight ? 1 : 0);
            currentNode = 0;
        }

    }

    return levels;

}

const printTree = (tree) =>{

    var fullString = ""; 
    var toLeft = false;

    for (let i = 0; i < tree.length; i++) {
        const level = tree[i];
        
        var levelString = "";

        if (toLeft){

            for (let x = level.length - 1; x >= 0; x--) {
                const char = level[x];
                levelString += char;
            }
            
        }
        else{
            
            for (let x = 0; x < level.length; x++) {
                const char = level[x];
                levelString += char;
            }

        }

        fullString += levelString + "\n";
        toLeft = !toLeft;

    }

    return fullString;
}

var res = fromUp(tree);
console.log(printTree(res));