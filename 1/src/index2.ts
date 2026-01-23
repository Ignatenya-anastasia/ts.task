// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

// interface obj{
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: obj[] = [
//  { id: 1, title: 'Часы', count: 10, price: 500 },
//  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//  { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]


// function find(a: obj[]): void{
// const res: obj[] = arr.filter((el) => el.count > 10);
// console.log(res);
// }

// const result = find(arr);


// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке


// interface obj{
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: obj[] = [
//  { id: 1, title: 'Часы', count: 10, price: 500 },
//  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//  { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function check(a: obj[]): obj[]{
//     return arr.reverse();
// }
// const res = check(arr);
// console.log(...res);


// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3


// interface obj{
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: obj[] = [
//  { id: 1, title: 'Часы', count: 10, price: 500 },
//  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//  { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function findEl(a: obj[]): obj[]{
//     return arr.filter((el) => el.count % 3 == 0)
// }

// const res = findEl(arr);
// console.log(res);


// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...


// interface obj{
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: obj[] = [
//  { id: 1, title: 'Часы', count: 10, price: 500 },
//  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//  { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function findSum (a: obj[]): number{
//     return arr.map((el) => el.count * el.price).reduce((sum, el) => (sum + el), 0);
// }

// const res = findSum(arr);
// console.log(res);


// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

// interface obj{
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: obj[] = [
//  { id: 1, title: 'Часы', count: 10, price: 500 },
//  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//  { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function findMax(a: obj[]): obj[]{
//     const max = arr.reduce((sum, el) => (el.price > sum ? (sum = el.price) : sum), 0);
//     return arr.filter((el) => el.price === max);
// }

// const res = findMax(arr);
// console.log(res);


// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

// interface obj{
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: obj[] = [
//  { id: 1, title: 'Часы', count: 10, price: 500 },
//  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//  { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function findPrice(a: obj[]): number{
//     return arr.reduce((sum, el) => (sum += el.price), 0) / arr.length;
// }
// const res = findPrice(arr);
// console.log(res);


// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

// interface obj{
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: obj[] = [
//  { id: 1, title: 'Часы', count: 10, price: 500 },
//  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//  { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function findNum(a: obj[]): obj[]{
//     const num =  arr.map((el) => el.price * el.count).reduce((sum, el) => (el > sum ? (sum = el) : sum), 0);
//     return arr.filter((el) => el.count * el.price === num);

// }

// const res = findNum(arr);
// console.log(res);


// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту

// const str: string[] = [
//     'firs@mail.com',
//     'second@mail.com',
//     'firs@mail.com',
//     'second@mail.com',
// ];

// const reg = /^[a-z]+@[a-z]+\.com/;

// function find(a: string[]): void{
//     try{
//         a.forEach((el) => {
//             if(!reg.test(el)) throw  new Error('please correct');
//         });
//         const newArr = [];
//         for(let i = 0; i < a.length; i++){
//             if(!newArr.includes(a[i])){
//                 newArr.push(a[i]);
//             }
//         }
//         console.log(newArr);
        
//     } catch(error){
//         console.log(error);
        
//     }
// }
//     find(str)



// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

// interface obj {
//     name: string;
//     value: number;
// };

// const obj: obj[] = [ {name: 'width', value: 10}, {name: 'height', value: 20} ] ;

// function find(a: obj[]): void{
//     const newObj = [];
//     obj.forEach((el) => {
//         newObj[el.name] = el.value
//     })

//     console.log(newObj);
    
// }

// find(obj)

// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

// function f(a: number, b: number): number{
//     return a + b
// }

// const res = f(2, 3);
// console.log(res);

// function f(a: number, b?: number): number | ((b: number) => number){
//     if(b !== undefined) {
//         return a + b
//     }
//     else {
//         return (b: number) => a + b
//     }
// }

// console.log(f(2, 3));
// console.log(f(2)(3));



