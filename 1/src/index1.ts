// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// const sumNum = arr.reduce((sum, el) => (el % 2 == 0 ? (sum += el) : sum), 0);
// console.log(sumNum);


// 2. Создайте массив строк и выведите на экран все элементы, которые содержат букву 'a'.

// const arr: string[] = ['apple', 'banana', 'cat', 'tree'];
// const findEl = arr.filter((el) => el.includes('a'));
// console.log(findEl);


// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел массива

// const arr: number[] = []

// for(let i = 0; i <= 10; i++){
//     arr.push(Math.floor(Math.random() * 10))
// }
// const res = arr.reduce((sum, el) => (sum += el), 0)
// console.log(res);


// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

// const arr: string[] = ['cat', 'dog', 'morning', 'hello!'];

// const check = arr.some((el) => (el.length > 5 ? true : false));
// console.log(check);


// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const check = arr.filter((el) => el % 2 != 0 && el % 3 == 0);
// console.log(check);


// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.

// const arr: string[] = ['hi', 'my', 'name', 'is', 'nast'];
// let str: string = '';
// for(let i = 0; i < arr.length; i++){
//     str += arr[i]
// }
// console.log(str);

// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 


// const arr: number[] = [];

// for(let i = 0; i < 5; i++){
//     arr.push(Math.floor(Math.random() * 100))
// }
// console.log(arr);


// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

// const arr: string[] = ['toot', 'hi', 'civic'];
// const arrCheck = arr.some((el) => {
//     return el == el.split('').reverse().join('') ? true : false
// })

// console.log(arrCheck);


// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

// const arr: Array<string | number> = [1, 2, 2, 'hi', 'hi', 'good'];
// const newArr: Array<string | number> = [];

// for(let i = 0; i < arr.length; i++){
//     arr.indexOf(arr[i]) == i ? newArr.push(arr[i]) : null;
// }
// console.log(newArr);


// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

// const arr: string[] = ['hi', 'good', 'day'];
// const letters: string[] = ['i', 'o', 'a', 'y'];

// let newStr: string[] = [];

// arr.forEach((el) => {
//     const findElem = el.split('').filter((elem) => letters.includes(elem)).join('')
//     newStr.push(findElem)
// })

// console.log(newStr);


// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

// const arr: string[] = ['fhfh@mail.com', 'dhhd@hdh.com', 'dhhd@hfh.com'];

// const check: boolean = arr.every((el) => /^[a-z]+@[a-z]+\.com+$/.test(el) ? true : false);
// console.log(check);


// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumNum: number = arr.reduce((sum, el, i) => (i % 2 != 0 ? (sum += el) : sum), 0);
// console.log(sumNum);


// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

// const arr: number[] = [1, 2, 3, 4, 5, 6];

// const check: string[] = arr.map((el) => (el % 2 == 0 ? 'чёт' : 'нечёт'));
// console.log(check);


// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

// let str: string = 'qqqqjjjll';
// const obj: any = {};

// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]]){
//         obj[str[i]] += 1;
//     } else {
//         obj[str[i]] = 1
//     }
// }

// console.log( obj);


// let max: number = 0;
// let letter: string = ''

// for(let key in obj){
//     if(obj[key] > max){
//         max = obj[key];
//         letter = key;
//     }
// }

// console.log(letter);


// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

// const arr: string[] = ['hschool', 'company'];
// let newArr = [];

// arr.forEach((el) => {
//     newArr.push(`!${el}`)
// })

// console.log(newArr);


// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
// let res: boolean;
// for(let i = 0; i < arr.length; i++){
//     arr[i] > arr[i] - 1 ? (res = true) : (res = false)
// }
// console.log(res);


// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

// const arr: number[] = [4, 3, 7, 2];
// let num = 0;

// for(let i = 0; i < arr.length; i++){
//     for(let l = 0; l < arr.length; l++){
//         arr[i] - arr[l] > num ? (num = arr[i] - arr[l]) : num
//     }
// }

// console.log(num);


// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

// interface obj{
//     name: string;
//     author: string;
//     description: string;
// }

// const book: obj[] = [
//     {
//         name: 'Мастер и Маргарита',
//         author: 'Булгаков',
//         description: 'random text'
//     },

//     {
//         name: 'Преступление и наказание',
//         author: 'Достоевский',
//         description: 'random text'
//     }
// ];

// const check = book.filter((el) => el.author == 'Булгаков');
// console.log(check);


// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)
// interface obj{
//     title: string;
//     author: string;
//     price: number;
// }

// const books: obj[] = [
//   { title: "Преступление и наказание", author: "Фёдор Достоевский", price: 59 },
//   { title: "1984", author: "Джордж Оруэлл", price: 45 },
//   { title: "Так говорил Заратустра", author: "Фридрих Ницше", price: 62},
//   { title: "Бытие и время", author: "Мартин Хайдеггер", price: 8 },
//   { title: "Капитал", author: "Карл Маркс", price: 7 }
// ];

// const check = books.filter((el) => el.price > 50);
// console.log(check);


// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)
// interface obj{
//     title: string;
//     author: string;
//     count: number;
// }
// const books: obj[] = [
//   { title: "Преступление и наказание", author: "Фёдор Достоевский", count: 599 },
//   { title: "1984", author: "Джордж Оруэлл", count: 450 },
//   { title: "Так говорил Заратустра", author: "Фридрих Ницше", count: 620 },
//   { title: "Бытие и время", author: "Мартин Хайдеггер", count: 890 },
//   { title: "Капитал", author: "Карл Маркс", count: 750 }
// ];

// let sum: number = 0;
// let res: obj;
// for(let i = 0; i < books.length; i++){
//     books[i].count > sum ? (sum = books[i].count) : sum;
// }

// for(let i = 0; i < books.length; i++){
//     books[i].count == sum ? (res = books[i]) : null;
// }

// console.log(res);


// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// const str: string = 'wensday was sunny day';

// const words = str.split(' ');

// let maxLen = 0;

// for(let word of words){
//     if(word.length > maxLen){
//         maxLen = word.length;
//     }
// }
// console.log(maxLen);


// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
// interface obj{
//     name: string;
//     salary: number;
// }

// const employees: obj[] = [
//   { name: "Анна", salary: 60000 },
//   { name: "Борис", salary: 75000 },
//   { name: "Виктория", salary: 82000 },
//   { name: "Глеб", salary: 68000 },
//   { name: "Дарья", salary: 71000 }
// ];

// const res = employees.reduce((sum, el) => (sum += el.salary), 0)

// console.log(res / employees.length);


// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...
// interface  obj {
//     name: string;
//     price: number;
//     quantity: number;
// }
// const products: obj[] = [
//   { name: "Ноутбук", price: 50000, quantity: 2 },
//   { name: "Мышь", price: 1500, quantity: 10 },
//   { name: "Клавиатура", price: 3000, quantity: 5 },
//   { name: "Монитор", price: 25000, quantity: 3 }
// ];


// interface newArr{
//     name: string;
//     fullPrice: number;
// }
// let newArr = [];

// products.forEach((el) => {
//     newArr.push({
//         name: el.name,
//         fullPrice: el.price * el.quantity
//     })
// })

// console.log(newArr);

