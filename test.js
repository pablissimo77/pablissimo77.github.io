var element = document.createElement("iframe"); 
element.style.display = "none";
element.setAttribute('src','https://pablissimo77.github.io/test.html');
element.setAttribute('id', 'myframe');
document.body.appendChild(element);
// var f = document.getElementById('myframe').contentWindow.document.getElementById('test')

var iframe = document.getElementById('myframe');
var innerDoc = (iframe.contentDocument) 
               ? iframe.contentDocument 
               : iframe.contentWindow.document;

var f = innerDoc.getElementById("test");


console.log('f', f);
alert(f.innerHTML);
