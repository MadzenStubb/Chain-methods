let chain = ["Mores", "Vegaz", "Armando", "Brendan"];
// let chain2 = "";

document.write(chain + "<br><br>");

// let result = chain.reverse();
// chain.unshift()
// chain.shift()
// chain.pop()
// chain.sort()
// let result = chain.indexOf("Brendan");
// document.write(result + "<br><br>");

// let result = chain.filter( chain => document.write(chain + "<br>"))
// let result = chain.forEach( chain => document.write(chain + "<br>"))
let result = chain.filter(chain => chain.length > 7)

document.write(result);
