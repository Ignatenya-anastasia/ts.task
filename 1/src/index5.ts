// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника.
// Формула для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49

// abstract class Shape {
//     abstract calculateArea(a: number, b:number): number;
// }

// class Rectangle extends Shape{

//     calculateArea(a: number, b:number): number {
//         return a * b
//     }
// }

// const rectangle = new Rectangle();
// console.log(rectangle.calculateArea(4, 3));


// 2. Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
// Затем создайте два дочерних класса:
// • Dog
// • Cat
// Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
// возвращая соответствующий звук животного.
// Входные: Dog().makeSound() → Результат: "Гав-гав"
// Объяснение: Метод makeSound() для объекта класса Dog должен вернуть звук собаки.
// Входные: Cat().makeSound() → Результат: "Мяу"
// Объяснение: Метод makeSound() для объекта класса Cat должен вернуть звук кошки.

// abstract class Animal{
//     abstract makeSound(): string;
// }

// class Dog extends Animal{
// makeSound(): string {
//     return "Гав-гав"
// }
// }

// class Cat extends Animal{
//     makeSound(): string {
//         return "Мяу"
//     }
// }

// const dog = new Dog();
// console.log(dog.makeSound());

// const cat = new Cat();
// console.log(cat.makeSound());


// 3. Создайте интерфейс iAccount со следующими методами:
// • balance: хранит цисловое значение баланса света
// • getBalance(): возвращает текущий баланс счета
// • deposit(amount: number): пополняет счет на указанную сумму
// • withdraw(amount: number): снимает указанную сумму со счета
// Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все
// методы интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если
// средств недостаточно, выбрасывайте ошибку.

// interface iAccount{
//     balance: number;
//     getBalance(): number;
//     deposit(amount: number): number;
//     withdraw(amount: number): number;
// }

// class Account implements iAccount{
//     balance: number = 1000;

//     getBalance(): number {
//         return this.balance;
//     }

//     deposit(amount: number): number {
//         this.balance += amount;
//         return this.balance;
//     }

//     withdraw(amount: number): number {
//         if(amount <= 0){
//             throw new Error('недостаточно средств')
//         }
//         this.balance -= amount;
//         return this.balance;
//     }
// }

// const account = new Account();
// console.log(account.getBalance());
// console.log(account.deposit(30));
// console.log(account.withdraw(300));


// 4. Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
// метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
// (Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
// реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
// транспортных средств (например, через console.log).

// abstract class Vehicle{
//     abstract start(): void;
//     abstract stop(): void;
// }

// class Car extends Vehicle{
//     start(): void {
//         console.log('car started')

//     }
//     stop(): void {
//         console.log('car stoped');

//     }
// }

// class Motorcycle extends Vehicle{
//     start(): void {
//         console.log('Motorcycle started');

//     }

//     stop(): void {
//         console.log('Motorcycle stoped');

//     }
// }

// const car = new Car()
// const motorcycle = new Motorcycle()
// car.start();
// car.stop()

// motorcycle.start();
// motorcycle.stop()


// 5. Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
// • fruits: массив объектов, где каждый объект имеет свойства id, title
// (название) и price (цена)
// Затем создайте дочерний класс Apple (Яблоко), который наследует
// Fruit. В классе Apple реализуйте метод getAppleInfo(), который
// должен возвращать информацию о яблоке из массива fruits, где title
// равно "яблоко".

// Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша",
// "price": 45} ]
// → Результат: {"id": 1, "title": "яблоко", "price": 50}
// Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: null

// interface iFruit{
//     id: number;
//     title: string;
//     price: number;
// }


// abstract class Fruit{
//     abstract array: iFruit[];

// }

// class Apple extends Fruit{
//     array: iFruit[] = [{"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price": 45}]
//     getAppleInfo(): iFruit[]{

//         return this.array.filter((el) => el.title === 'яблоко')
//     }
// }

// const apple = new Apple()
// console.log(apple.getAppleInfo());


// 6. Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
// isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation.
// Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
// Validation должен принимать параметры email, date, path и инициализировать их как поля класса.

// interface iValidation{
//     isValidEmail(): boolean;
//     isValidDate(): boolean;
//     isValidPath(): boolean;
// }

// class Validation implements iValidation{
//     email;
//     date;
//     path;
//     constructor(email: string, date: string, path: string){
//         this.email = email;
//         this.date = date;
//         this.path = path;
//     }

//     isValidEmail(): boolean {
//         const check = /^[a-z]+@[a-z]\.[a-z]+/;
//         return check.test(this.email);
//     }
//     isValidDate(): boolean {
//         const check = /^[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}/;
//         return check.test(this.date);
//     }
//     isValidPath(): boolean {
//         const check = /^\\[a-z]+\\[a-z]+\\[a-z]+/;
//         return check.test(this.path);
//     }
// }

// const validation = new Validation('example@mail.com', '2023-09-10', '/usr/local/bin');
// console.log(validation.isValidEmail());
// console.log(validation.isValidDate());
// console.log(validation.isValidPath());


// Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.


// interface iArrayAnalyzer{
//     arr: number[];
//     getAverage(): number;
//     getMax(): number;
//     getMin(): number;
// }

// class ArrayAnalyzer implements iArrayAnalyzer{
//     arr: number[] = [10, 20, 5, 30, 15];

//     getAverage(): number {
//         return this.arr.reduce((sum, el) => sum + el, 0) / this.arr.length;
//     }

//     getMax(): number {
//         return this.arr.reduce((max, el) => (max > el ? (max = el) : el), 0)
//     }

//     getMin(): number {
//         return this.arr.reduce((min, el) => (min < el ? (min = el) : min), 0)
//     }
// }

// const arrayAnalyzer = new ArrayAnalyzer();
// console.log(arrayAnalyzer.getAverage());
// console.log(arrayAnalyzer.getMax());
// console.log(arrayAnalyzer.getMin());



// 8. Создайте класс StringManipulator, который будет иметь три метода:
// • reverseString(str) — разворачивает строку,
// • isPalindrome(str) — проверяет, является ли строка палиндромом,
// • countVowels(str) — подсчитывает количество гласных букв в строке

// interface iStringManipulator{
//     reverseString(str: string): string;
//     isPalindrome(str: string): boolean;
//     countVowels(str: string): number;
// }

// class StringManipulator implements iStringManipulator{
//     reverseString(str: string): string {
//         return  str.split('').reverse().join('')
//     }
//     isPalindrome(str: string): boolean {
//         return str ===  str.split('').reverse().join('');
//     }

//     countVowels(str: string): number {
//         let vowels: string[] = ['a', 'e', 'o'];

//         let strSpl = str.split('');
//         let sum = 0;
//         for(let i = 0; i < str.length; i++){
//             if(vowels.includes(strSpl[i])){
//                 sum++
//             }
//         }
//         return sum;
//     }
// }

// const stringManipulator = new StringManipulator();
// console.log(stringManipulator.countVowels('hello'));


// 9. Создайте интерфейс iPwd, который описывает метод showPwd. Реализуйте класс Pwd, который
// будет содержать метод showPwd, возвращающий случайно сгенерированный пароль из 8 цифр.
// Создайте класс Validation, который наследуется от Pwd и переопределяет метод showPwd,
// вызывая метод родительского класса через super и дополняя его выводом результата в консоль.

// interface  iPwd{
//     showPwd(): number[];
// }

// class Pwd implements iPwd{
//     showPwd(): number[] {
//         let pasword = [];
//         for(let i = 0; i < 8; i++){
//             pasword.push(Math.floor(Math.random() * 10))
//         }
//         return pasword
//     }
// }

// class Validation extends Pwd{
//     showPwd(): number[] {
//         const newPassword = super.showPwd();
//         console.log(newPassword);
//         return newPassword;

//     }
// }


// const validation = new Validation();
// validation.showPwd()


// 10. Создайте абстрактный класс University, который содержит:
// • абстрактный метод getStudentById(id: number),
// • поле students — массив объектов студентов.
// Реализуйте класс Student, который наследуется от University и реализует метод getStudentById,
// возвращающий объект студента по его ID.

// interface iObj {
//     id: number;
//     name: string;
// }
// interface iCl {
//     getStudents(id: number): number;
//     students: iObj[];
// }
// abstract class University implements iCl {
//     abstract getStudents(id: number);
//     students: iObj[] = [
//         { id: 1, name: "Alice" },
//         { id: 2, name: "Bob" },
//         { id: 3, name: "Charlie" },
//     ];
// }

// class Student extends University {
//     getStudents(id: number) {
//         return this.students.filter((el: iObj) => el.id === id);
//     }
// }

// const student = new Student();
// const res = student.getStudents(2);
// console.log(res);

// 11. Создайте класс Counter и интерфейс класса iCounter. У класса должно быть:
// • Приватное свойство count.
// • Публичный Метод increment — увеличивает значение счётчика на 1 и возвращает .
// • Публичный Метод decrement — уменьшает значение счётчика на 1 и возвращает .

//     interface iCounter {
//     increment(): number;
//     decrement(): number;
// }
// class Counter implements iCounter {
//     private count: number = 2;
//     public increment(): number {
//         return (this.count -= 1);
//     }
//     public decrement(): number {
//         return (this.count += 1);
//     }
// }

// const counter = new Counter();
// const res = counter.increment();
// const res2 = counter.decrement();
// console.log(res);
// console.log(res2);


// 12. Необходимо реализовать класс QuoteGenerator, добавить интерфейс класса iQuoteGenerator,
// который содержит список приватных цитат arr и публичный метод getRandomQuote() для
// получения случайной цитаты из массива.

// class QuoteGenerator {
//     private arr: Array<string> = [
//         "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
//         "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
//         "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
//         "Believe you can and you're halfway there. — Theodore Roosevelt",
//         "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
//         "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
//         "It does not matter how slowly you go as long as you do not stop. — Confucius",
//         "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
//         "The best way to predict the future is to create it. — Peter Drucker",
//         "You miss 100% of the shots you don't take. — Wayne Gretzky",
//     ];
//     public getRandomQuote(): string {
//         return this.arr[Math.round(Math.random() * this.arr.length)];
//     }
// }

// const quoteGenerator = new QuoteGenerator();
// const res = quoteGenerator.getRandomQuote();
// console.log(res);

// 13. Создайте интерфейс INumberStats, который описывает следующие методы:
// • getEvenNumbers(): number[] — возвращает массив всех чётных чисел.
// • getAverage(): number — возвращает среднее значение всех чисел.
// • getPositiveNumbersCount(): number — возвращает количество положительных чисел в
// массиве.
// Создайте класс NumberStats, который реализует интерфейс INumberStats.
// Класс должен принимать массив чисел number[] в конструкторе и реализовывать все методы
// интерфейса. Также добавьте инкапсуляцию: скрывайте внутренний массив чисел, позволяя
// работать с ним только через методы класса.

// interface INumberStats {
//     getEvenNumbers(): number[];
//     getAverage(): number;
//     getPositiveNumbersCount(): number;
// }

// class NumberStats implements INumberStats {
//     private arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     constructor() {
//         console.log(
//             this.getEvenNumbers(),
//             this.getAverage(),
//             this.getPositiveNumbersCount()
//         );
//     }
//     getEvenNumbers(): number[] {
//         return this.arr.filter((el: number) => el % 2 == 0);
//     }
//     getAverage(): number {
//         return (
//             this.arr.reduce((sum: number, el: number) => (sum += el), 0) /
//             this.arr.length
//         );
//     }
//     getPositiveNumbersCount(): number {
//         return this.arr.reduce(
//             (sum: number, el: number) => (el > 0 ? (sum += 1) : sum),
//             0
//         );
//     }
// }

// const numberArray = new NumberStats();


// 14. Создайте класс User, содержащий 1 поле массива User[], где каждый объект:
// • Name = string
// • Age = number
// • Gender = 'male' | 'female'
// Создайте класс UserFilter, наследующийся от User и реализует методы:
// • filterByAge(min: number, max: number): User[] — возвращает пользователей с возрастом от
// min до max включительно
// • filterByGender(gender: 'male' | 'female'): User[] — возвращает пользователей с заданным полом

// interface obj {
//     name: string;
//     age: number;
//     gender: string;
// }
// class User {
//     arr: obj[] = [
//         { name: "Nikita", age: 23, gender: "male" },
//         { name: "Artem", age: 27, gender: "male" },
//         { name: "Darya", age: 19, gender: "female" },
//     ];
// }

// class UserFilter extends User {
//     filterByAge(min: number, max: number): Array<obj> {
//         return this.arr.filter((el: obj) => el.age > min && el.age < max);
//     }
//     filterByGender(gender: "male" | "female"): Array<obj> {
//         return this.arr.filter((el: obj) => el.gender === gender);
//     }
// }
// const userFilter = new UserFilter();
// const res1 = userFilter.filterByAge(20, 26);
// const res2 = userFilter.filterByGender("female");
// console.log(res1);
// console.log(res2);


// 15. Создайте класс TextAnalyzer и интерфейс класса iTextAnalyzer, который принимает строку в
// конструкторе.
// Реализуйте методы:
// • getUniqueWords() — возвращает массив уникальных слов в заданной строке,
// отсортированных по алфавиту (метод sort)
// • getWordFrequency() — возвращает объект, в котором ключ — слово, значение — количество
// вхождений



// 16. Создайте интерфейс IChecker, описывающий методы:
// • hasNumbers(): boolean — строка содержит хотя бы одну цифру
// • hasUpperCase(): boolean — строка содержит хотя бы одну заглавную букву
// • hasSymbols(): boolean — строка содержит хотя бы один специальный символ (!@#$%^&*())
// Создайте класс StringChecker, который реализует интерфейс и принимает строку в
// конструкторе.
// Каждый метод должен использовать регулярные выражения для выполнения проверок.

// interface IChecker {
//     setStr(str: string): void;
//     getStr(): string;
//     hasNumbers(): boolean;
//     hasUpperCase(): boolean;
//     hasSymbols(): boolean;
// }

// class StringChecker implements IChecker {
//     private str: string = ''
//     setStr = (str: string) => (this.str = str);
//     getStr = () => this.str;

//     hasNumbers(): boolean {
//         return /[0-9]/.test(this.getStr());
//     }
//     hasUpperCase(): boolean {
//         return /[A-Z]/.test(this.getStr());
//     }
//     hasSymbols(): boolean {
//         return /[\!\@\#\$\%\^\&\*\(\)]/.test(this.getStr());
//     }
// }

// const stringChecker = new StringChecker();
// stringChecker.setStr("Hello my name is Nikita Hello is 123 ");

// console.log(stringChecker.hasNumbers());
// console.log(stringChecker.hasUpperCase());
// console.log(stringChecker.hasSymbols());


