const Koa = require('koa');
var cors = require('koa-cors');
const parser = require('./miniJava_parser').parser;
var fs = require('fs');
const app = new Koa();

app.use(cors())

app.use(async(ctx) => {
    input = ctx.url.toString();
    input = fs.readFileSync('./testcase/' + input.substr(1), 'utf8');
    // var input = "class BinarySearch { public static void main(String[] a){ test = (5 + 9) * 23 - 5 + 3 * 12; }}";
    var tree = parser(input);
    // console.log(tree);
    var nodeArray = [];
    function convertTree(root, parent_id){
        var ind = nodeArray.length;
        nodeArray.push({
            key: ind,
            color: '#ffffff',
            name: root.text.name
        });
        if(parent_id !== undefined && parent_id !== null)
            nodeArray[nodeArray.length-1].parent = parent_id;
        if('children' in root){
            for(var i=0; i<root.children.length; i++) {
                convertTree(root.children[i], ind);
            }
        }
    }
    convertTree(tree, null);
    var responser = {'tree': nodeArray, 'rawText': input}
    ctx.response.body = JSON.stringify(responser)
});

app.listen(3000);
