// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь

// interface fir{
//     width: number;
//     height: number;
//     getArea(): number;
// }

// class Rectangle implements fir{
//     width: number = 3;
//     height: number = 4;

//     getArea(): number {
//         return this.width * this.height
//     }

// }

// const rectangle = new Rectangle();
// console.log(rectangle.getArea());


// 2. Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
// multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
// выполните несколько операций.

// interface sec{
//     add(a: number, b: number): number;
//     subtract(a: number, b: number): number;
//     multiply(a: number, b: number): number;
//     divide(a: number, b: number): number;
// }

// class Calculator implements sec{
//     add(a: number, b: number): number {
//         return a + b; 
//     }
//     subtract(a: number, b: number): number {
//         return a - b;
//     }

//     multiply(a: number, b: number): number {
//         return a * b;
//     }

//     divide(a: number, b: number): number {
//         return a / b;
//     }
// }

// const calculator = new Calculator();
// console.log(calculator.add(3, 4));
// console.log(calculator.subtract(3, 4));
// console.log(calculator.multiply(3, 4));
// console.log(calculator.divide(3, 4));


// 3. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
// (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
// окружности. Площадь круга: π * r^2

// interface fir{
//     radius: number;
//     getArea(): number;
// };

// class CircleR implements fir{
//     radius: number = 6;
//     getArea(): number {
//         return this.radius ** 2 * 3.14;
//     }
// }

// const circleR = new CircleR();
// console.log(circleR.getArea());


// 4. Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
// продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
// displayProductInfo().

// interface cl{
//     product: obj[];
//     displayProductInfo(): obj[];
// }

// interface obj{
//     price: number;
//     title: string;
// }

// class Product implements cl{
//     product: obj[] =[
//         {
//             price: 10,
//             title: 'pr1'
//         },
//         {
//             price: 22,
//             title: 'pr2'
//         },
//         {
//             price: 25,
//             title: 'pr3'
//         }
//     ];

//     displayProductInfo(): obj[] {
//         return this.product.filter((el) => el.price > 20)
//     }
// }

// const product = new Product();
// console.log(product.displayProductInfo());


// 5. Создайте класс Library, который содержит список книг. Каждая книга представляет собой
// объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
// методы:
// addBook(book) — добавление книги в библиотеку.
// removeBookByTitle(title) — удаление книги по названию.
// getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
// getBooksByYear(year) — получение всех книг, выпущенных в определенный год.
// getBooksByGenre(genre) — получение всех книг в определенном жанре.

// interface obj{
//     title: string;
//     author: string;
//     year: number;
//     genre: string;
// }

// interface cl{
//     obj: obj[];
//     addBook(book: string): obj[];
//     removeBookByTitle(title: string): obj[];
//     getBooksByAuthor(author: string): obj[];
//     getBooksByYear(year: number): obj[];
//     getBooksByGenre(genre: string): obj[];
// }

// class Library implements cl{
//     obj: obj[] = [
//         {
//             title: 'name1',
//             author: 'author1',
//             year: 2000,
//             genre: 'genre1'
//         },
//         {
//             title: 'name2',
//             author: 'author2',
//             year: 2001,
//             genre: 'genre2'
//         },
//         {
//             title: 'name3',
//             author: 'author3',
//             year: 2003,
//             genre: 'genre3'
//         }
//     ];

//     addBook(book: string): obj[] {
//         this.obj.push({
//             title: 'name4',
//             author: 'author4',
//             year: 2004,
//             genre: 'genre4'
//         });
//         return this.obj;
        
//     }

//     removeBookByTitle(title: string): obj[] {
//         return this.obj.filter((el) => el.title !== title)
//     };

//     getBooksByAuthor(author: string): obj[] {
//         return this.obj.filter((el) => el.author == author)
//     };

//     getBooksByGenre(genre: string): obj[] {
//         return this.obj.filter((el) => el.genre == genre)
//     }

//     getBooksByYear(year: number): obj[] {
//         return this.obj.filter((el) => el.year == year)
//     }
// }

// const library = new Library()
// console.log(library.addBook('name4'));
// console.log(library.getBooksByAuthor('author1'));
// console.log(library.getBooksByGenre('genre1'));
// console.log(library.getBooksByYear(2000));
// console.log(library.removeBookByTitle('title1'));



// 6. Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
// содержать только метод:
// getMode() — находит и возвращает моду массива чисел (самое часто встречающееся число).

// interface cl{
//     getMode(): void
// }

// class NumberStats implements cl{
//     getMode(): void {
//         let arr = [1, 1, 1, 2, 3, 4];
//         let obj = {};

//         arr.forEach((el) => {
//             if(obj[el]){
//                 obj[el] += 1
//             } else{
//                 obj[el] = 1
//             }
//         })
//         let max = 0;
//         let num;
//         for(let key in obj){
//             if(obj[key] > max){
//                 max = obj[key];
//                 num = key;
//             }
//         }
//         console.log(num);
//     }
// }

// const numberStats = new NumberStats();
// numberStats.getMode()

// 7. Создайте класс NumberOperations, который должен включать сам массив и методы для
// работы с массивом чисел:
// getMax() — возвращает максимальное число из массива.
// getMin() — возвращает минимальное число из массива.
// getSum() — вычисляет сумму всех чисел в массиве.
// getAverage() — вычисляет среднее значение чисел в массиве.
// getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
// sortAscending() — сортирует массив по возрастанию.
// sortDescending() — сортирует массив по убыванию.

// interface iNumberOperations{
//     arr: number[];
//     getMax(): number;
//     getMin(): number;
//     getSum(): number;
//     getAverage(): number;
//     getAboveAverage(): number[];
//     sortAscending() : number[];
//     sortDescending(): number[];
// }

// class NumberOperations implements iNumberOperations{
//     arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//     getMax(): number {
//         return Math.max(...this.arr);
//     }
//     getMin(): number {
//         return Math.min(...this.arr);
//     }
//     getSum(): number {
//         return this.arr.reduce((sum, el) => (sum += el), 0)
//     }
//     getAverage(): number {
//         return this.getSum() / this.arr.length;
//     }
//     getAboveAverage(): number[] {
//         const num = this.getAverage();
//         return this.arr.filter((el) => el > num);
//     }
//     sortAscending(): number[] {
//         return [...this.arr].sort((a, b) => a - b);
//     }
//     sortDescending(): number[] {
//         return [...this.arr].sort((a, b) => b - a);
//     }
// }

// const numberOperations = new NumberOperations();
// console.log(numberOperations.getMax());
// console.log(numberOperations.getMin());
// console.log(numberOperations.getSum());
// console.log(numberOperations.getAverage());
// console.log(numberOperations.getAboveAverage());
// console.log(numberOperations.sortAscending());
// console.log(numberOperations.sortDescending());



// 8. Создайте класс Sentence, который работает с предложением. Класс должен содержать один
// метод:
// getLongestWord() — находит и возвращает самое длинное слово в предложении.


// interface iSentence{
//     getLongestWord(): void;
// }

// class Sentence implements iSentence{
//     getLongestWord(): void {
//         let str = 'hello today is beutiful day';
//         const max = str.split(' ').reduce((max, el) => el.length > max ? (max = el.length) : max, 0);
//         const fill = str.split(' ').filter((el) => el.length == max);
//         console.log(fill);
        
//     }
// }

// const sentence = new Sentence()
// sentence.getLongestWord()


// 9. Создайте класс ListFilter, который работает с массивом чисел. Класс должен содержать один
// метод:
// getEvenNumbers() — возвращает все четные числа из массива.

// interface iListFilter{
//     getEvenNumbers(): number[];
// }

// class ListFilter implements iListFilter{
//     getEvenNumbers(): number[] {
//         let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//         return arr.filter((el) => el % 2 == 0);
//     }
// }
// const listFilter = new ListFilter();
// console.log(listFilter.getEvenNumbers());

// 10. Создайте класс ArrayMerger, который сливает два отсортированных массива в один
// отсортированный массив используя метод: mergeSortedArrays()
// Входные данные: [1, 3, 5], [2, 4, 6]
// Выходные данные: [1, 2, 3, 4, 5, 6]

// interface iArrayMerger{
// mergeSortedArrays(): number[];
// }

// class ArrayMerger implements iArrayMerger{
//     mergeSortedArrays(): number[] {
//         let arr1 = [1, 2, 3];
//         let arr2 = [4, 5, 6];

//         return [...arr1, ...arr2]
//     }
// }

// const arrayMerger = new ArrayMerger();
// console.log(arrayMerger.mergeSortedArrays());


// 11. Создайте класс PrimeNumberGenerator и метод generatePrimes(limit), который генерирует
// все простые числа до заданного предела.
// Входные данные: 10
// Выходные данные: [2, 3, 5, 7]
// Входные данные: 20
// Выходные данные: [2, 3, 5, 7, 11, 13, 17, 19]

// interface iPrimeNumberGenerator {
//     generatePrimes(limi: number): number[]
//     checkNum(num: number): boolean;
// }

// class PrimeNumberGenerator implements iPrimeNumberGenerator{
//     arr: number[] = [];
//     checkNum(num: number): boolean {
//         for(let i = 2; i <= num; i++){
//             if(num % i !== 0 || num == 2){
//                 return true;
//             } else break;
//         }
//     }

//     generatePrimes(limi: number): number[] {
//         for(let i = 2; i <= limi; i++){
//             this.checkNum(i) === true ? this.arr.push(i) : null;

//         }
//         return this.arr;
//     }
// }

// const primeNumberGenerator = new PrimeNumberGenerator();
// console.log(primeNumberGenerator.generatePrimes(20));


// 12. Создайте класс ShoppingCart, который будет содержать список товаров. Каждый товар — это
// объект с такими полями, как name, price и quantity. Класс должен содержать следующие
// методы:
// addItem(item) — добавление товара в корзину.
// removeItem(itemName) — удаление товара из корзины по названию.
// updateItemQuantity(itemName, newQuantity) — обновление количества товара в корзине.
// getTotalPrice() — вычисление общей суммы корзины.
// getItemsAbovePrice(minPrice) — возвращает список товаров, цена которых выше заданного
// порога

// interface obj{
//     name: string;
//     price: number;
//     quantity: number;
// }

// interface iShoppingCart{
//     arr: obj[];
//     addItem(item: obj): void;
//     removeItem(itemName: string): void;
//     updateItemQuantity(itemName: string, newQuantity: number): void;
//     getTotalPrice(): void;
//     getItemsAbovePrice(minPrice: number): void;
// }

// class ShoppingCart implements iShoppingCart{
// arr: obj[] = [
//     {
//         name: 'name1',
//         price: 500,
//         quantity: 10
//     },
//     {
//         name: 'name2',
//         price: 600,
//         quantity: 20
//     },
//     {
//         name: 'name3',
//         price: 700,
//         quantity: 30
//     }
// ]

// addItem(item: obj = Object()): void {
//     item.name = 'name4';
//     item.price = 800
//     item.quantity = 40
// }

// removeItem(itemName: string): void {
//     const res = this.arr.filter((el) => el.name !== itemName)
// }

// updateItemQuantity(itemName: string, newQuantity: number): void {
//     this.arr.forEach((el) => el.name === itemName ? (el.quantity = newQuantity) : null)
// }

// getTotalPrice(): void {
//     const res = this.arr.reduce((sum, el) => (sum += el.price), 0);
// }
// getItemsAbovePrice(minPrice: number): void {
//     const res = this.arr.filter((el) => el.price >= minPrice)
// }
// }

// const shoppingCart = new ShoppingCart();
// console.log(shoppingCart.addItem());
// console.log(shoppingCart.removeItem('name1'));
// console.log(shoppingCart.updateItemQuantity('name2', 900));
// console.log(shoppingCart.getTotalPrice());
// console.log(shoppingCart.getItemsAbovePrice(800));


