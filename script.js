
let c = [3, 'hello', true];
c[2] = 999;

console.log( c );
let out = document.getElementById('out');
let str = '';
for (let i = 0; i< c.length; i++){
      str +=c[i]+'<br> ';
};
out.innerHTML = str;