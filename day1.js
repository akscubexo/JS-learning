// DOM allows manipulation & dynamic updatn of a HTML doccument
// rep a page as an nodes and obj - so that js can interact w the page
// web API used to build websites
// DOM was designed to be independent of any prog lang,
// making the struc rep of the docc available from a single, consistent API
// even if most dev use DOM thru JS, but implement of DOM can be built thry any lang like Python
// DS of DOM- TREE
// each obj-> elem, tags, attributes, text content
// handles event handling- triggered by users
// cross browser functionality
// async communication- updates content on a web pg w/o full pg reload


// for( var i=0; i<5; i++){
//     setTimeout (function(){
//         console.log(i)
//     }, i*1000)
// }


//var - function/global scope , undef, allows redeclaration, global obj props


let name1= "Akshara"
console.log(name1.length)
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())
console.log(name1.slice(2,4))
console.log(name1.replace("Aks", "har"))
let friend= "kausi"
console.log(name1.concat("is a friend of", " ", friend, "ok"))