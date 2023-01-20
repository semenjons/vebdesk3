// 1. Необходимо создать html-страницу с названием 1.html, в которой 
// подключить файл 1.js (его тоже необходимо создать 
//     рядом с html-файлом).

const a = Number.parseFloat(prompt('введите температуру'));

function temp(a) 
{
   s = (9 / 5) * a + 32;
   k = Math.round(s * Math.pow(10, 2)) / Math.pow(10, 2);
    return k;
}
alert (temp(a));


