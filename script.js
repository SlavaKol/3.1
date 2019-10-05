let str = "урок-3-был слишком легким";
console.log(str.toUpperCase());
let newstr = str.replace(/-/g, " ");
console.log(newstr);
let newstr2 = newstr.replace("легким", "");
console.log(newstr2);
let newstr3 = newstr2.replace(newstr2.substr(newstr2.length - 3), "oo");
console.log(newstr3);
arr = [20, 33, 1, "Человек", 2, 3];
