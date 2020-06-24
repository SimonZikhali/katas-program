function hello(){
    console.log("Hello Tshepo");
}
hello();

function evenOrOdd(num){
    if(num % 2===0){
        return 'even' 
        
    }else{
        return 'odd'
    }
}
console.log(evenOrOdd(3))

function square(n){
    var string = '';
    for (var i = 1; i <= n; i++){
    for(var d = 1; d <= n; d++){    
        string += '#';
    }
    string +='\n';
 }
 return string;
}
console.log(square(2))

function triangle(num){
    var string = " ";
    for(var i = 0; i <= num; i++){
    for(var j = 1; j < num; j++){
         string = string + " ";
    }   
     for(var k = 1; k <= i; k++){
         string = string + "#";
     }
     console.log(string)
     string = "";
    }
}
triangle(2);

function issosceleTriangle(n){
 const midpoint = Math.floor((n * 2 - 1)/2)
 for(row = 0; row < n; row++){
     var level = '';
     for(col = 0; col < n*2-1; col++){
         if(midpoint - row <= col && midpoint + row >= col){
             level += '#';
         }else{
             level += ''
         }
     }
     console.log(level)
 }
}
issosceleTriangle(4)
 
function longestwords(string){
    var words = string.split('');
    var size = 0;
    var max = [''];
    for(var i = 0;i < words.length; i++){
        if(words[i].length >= size){
            size = words[i].length;
            if(max[max.length-1].length <words[i].length){
                max = [];
                max.push(words[i])
            }else{
                max = [...max,words[i]]
            }
        }
    }
    return [...max];
}
console.log(longestwords("the quick brown fox ate my chickens"));
console.log(longestwords("once upon a time"));

var Array1 = [11,22,33];
var Array2 = [1,2,3];
var mixArray = [];
mixArray.push(Array1[0],Array2[0],Array1[1],Array2[1],Array1[2],Array2[2]);
console.log(mixArray)

function frame(array){
    function fill(string, length, char){
        return string.length < length ?
        fill(string + char , length, char) : string;
    }
    var size = array
    .map(string =>{
        return string.length;
    })
    .reduce((a, b) =>{
        return Math.max(a, b);
    })
    var line = fill("", size + 4, "*");
    array = array.map(element =>{
        return "* " + fill(element,size," ") + " *";
    })
    array.unshift(line);
    array.push(line);
    return array.join("\n");
}
console.log(frame(["Write", "good", "code", "every", "day"]));