// 1. Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.

// interface iCreateArr{
//     arr: string[];
// };

// interface iFillArr{
//     filterLong(minLength): string[]
// }

// class CreateArr implements iCreateArr{
//     arr: string[] = ['hi', 'good', 'tell', 'to'];
// }

// class FillArr extends CreateArr implements iFillArr{
//     filterLong(minLength: any): string[] {
//         return this.arr.filter((el) => el.length > minLength)
//     }
// }

// const fillArr = new FillArr();
// console.log(fillArr.filterLong(2));


// 2. Создать базовый класс NumberArray, который хранит массив чисел и предоставляет метод
// getArray() для его получения. Создать класс-наследник FilteredNumberArray, который добавляет
// свойство threshold и метод sumAboveThreshold() — возвращает сумму чисел из массива родителя,
// больших порога.
// [1, 2, 3, 4, 5], порог 3 → sumAboveThreshold() = 9
// [10, 20, 30], порог 15 → sumAboveThreshold() = 50

// interface iNumberArray{
//     arr: number[];
//     getArray(): number[];
// }

// interface iFilteredNumberArray{
//     threshold: number;
//     sumAboveThreshold(): number;
// }

// class NumberArray implements iNumberArray{
//     arr: number[] = [1, 2, 2, 3, 3, 4];

//     getArray(): number[] {
//         return this.arr
//     }
// }

// class FilteredNumberArray extends NumberArray implements iFilteredNumberArray{
//     threshold: number = 2;
//     sumAboveThreshold(): number {
//         return this.arr.reduce((sum, el) => (el > this.threshold ? (sum += el) : sum), 0);
//     }
// }

// const filteredNumberArray = new FilteredNumberArray();
// console.log(filteredNumberArray.sumAboveThreshold());


// 3. Базовый класс StringProcessor с методом process(), который возвращает строку в верхнем регистре.
// Наследник ReversedStringProcessor переопределяет process() и возвращает перевёрнутую строку
// в большом регистре.
// "hello" → "HELLO" (родитель)
// "hello" → “OLLEH" (наследник)

// interface iStringProcessor{
// process(str: string): string;
// }



// class StringProcessor implements iStringProcessor{
//     process(str: string): string {
//         return str.toUpperCase();
//     }
// }


// class ReversedStringProcessor extends StringProcessor{
//     override process(str: string): string {
//         return super.process(str).split('').reverse().join('')
//     }
// }

// const reversedStringProcessor = new ReversedStringProcessor();
// console.log(reversedStringProcessor.process('hello'));


// 4. Создать базовый класс ObjectFilter с методом filterKeys() — возвращает все ключи объекта,
// начинающиеся с буквы "a". Создать класс-наследник FilteredObjectLength с дополнительным
// методом filterLongKeys() — возвращает ключи из родителя, длина которых больше 3.
// { age: 20, amount: 50, name: "Bob" } → ["age", "amount"] (родитель)
// { age: 20, amount: 50, name: "Bob" } → ["amount"] (наследник)

// interface iObjectFilter {
// filterKeys(obj: obj): string[]
// }

// interface obj{
//     age: number;
//     amount: number;
//     name: string;
// }


// class ObjectFilter implements iObjectFilter{
//     filterKeys(obj): string[] {
//         return Object.keys(obj).filter((el) => el.startsWith('a'));
//     }
// }

// class FilteredObjectLength extends ObjectFilter{
//     filterLongKeys(obj): string[]{
//         return this.filterKeys(obj).filter((el) => el.length >= 3)
//     }
// }

// const filteredObjectLength = new FilteredObjectLength();
// const ob = filteredObjectLength.filterLongKeys({
//     age: 20,
//     amount: 50,
//     name: 'Bob'
// })
// console.log(ob);


// 5. Базовый класс NumberFilter с методом filterEven() — возвращает только чётные числа. Наследник
// NumberFilterDivisible переопределяет метод и возвращает числа, делящиеся на заданное число n.
// [1, 2, 3, 4, 5], n=2 → [2, 4] (родитель)

// interface iNumberFilter{
//     filterEven(arr: number[], num?: number): number[];
// }

// class NumberFilter implements iNumberFilter{
//     filterEven(arr: number[], num?: number): number[] {
//         return arr.filter((el) => el % 2 == 0);
//     }
// }

// class NumberFilterDivisible extends NumberFilter{
//     override filterEven(arr: number[], num?: number): number[]{
//         return super.filterEven(arr, num).filter((el) => el % num == 0)
//     }
// }

// const numberFilterDivisible = new NumberFilter();
// console.log(numberFilterDivisible.filterEven([1, 2, 4, 8, 6], 2));


// 6. Базовый класс хранит текст. Наследник добавляет метод getWordsStartingWith(letter) —
// возвращает слова, начинающиеся с указанной буквы.

// interface cl{
//     str: string;
// }

// class Base implements cl{
//     str: string = 'hi hello good day';
// }

// class Additionally extends Base{
//     getWordsStartingWith(letter: string): string[]{
//         return this.str.split(' ').filter((el) => el.startsWith(letter))
//     }
// }

// const additionally = new Additionally();
// console.log(additionally.getWordsStartingWith('h'));


// 7. Базовый класс TextFilter с методом filterWords(text) — возвращает все слова, начинающиеся с
// заглавной буквы. Наследник LongWordFilter переопределяет метод и возвращает только слова
// длиной больше 5.
// "Hello World from TypeScript" → ["Hello", "World", "TypeScript"] (родитель)
// "Hello World from TypeScript" → ["TypeScript"] (наследник)

// interface iTextFilter{
//     filterWords(text:string): string[];
// }

// class TextFilter implements iTextFilter{
//     filterWords(text: string): string[] {
//         return text.split(' ').filter((el) => el[0] == el[0].toUpperCase())
//     }
// }

// class LongWordFilter extends TextFilter{
//     override filterWords(text: string): string[] {
//         return super.filterWords(text).filter((el) => el.length >= 5)
//     }
// }

// const longWordFilter = new LongWordFilter();
// console.log(longWordFilter.filterWords('Hello World Hi Go'));


// 8. Базовый класс ArrayUpper с методом toUpperCaseArray() — возвращает все строки в верхнем
// регистре. Наследник FilteredArrayUpper переопределяет метод и возвращает только строки
// длиной больше 3.
// [“a”, “ab”, “abc”, “abcd”] → [“A”, “AB”, “ABC”, “ABCD”] (родитель)
// [“a”, “ab”, “abc”, “abcd”] → [“ABCD”] (наследник)

// interface iBase{
//     toUpperCaseArray(text: string[]): string[];
// }

// class Base implements iBase{
//     toUpperCaseArray(text: string[]): string[] {
//         return text.map((el) => el.toUpperCase());
//     }
// }

// class Additionally extends Base{
//     override toUpperCaseArray(text: string[]): string[] {
//         return super.toUpperCaseArray(text).filter((el) => el.length > 3)
//     }
// }

// const additionally = new Additionally();
// console.log(additionally.toUpperCaseArray(['a', 'ab', 'abc', 'abcd']));


// 9. Базовый класс Multiplier с методом multiplyByTwo() — умножает все числа массива на 2. Наследник
// CustomMultiplier переопределяет метод и возвращает все четные элементы массива.

// interface iMultiplier{
//     multiplyByTwo(): number[];
// }

// class Multiplier implements iMultiplier{
//     multiplyByTwo(): number[] {
//         let arr: number[] = [1, 2, 3, 4, 5];
//         return arr.map((el) => el * 2)
//     }
// }

// class CustomMultiplier extends  Multiplier{
//     override multiplyByTwo(): number[] {
//         return super.multiplyByTwo().filter((el) => el % 2 == 0)
//     }
// }

// const customMultiplier = new CustomMultiplier();
// console.log(customMultiplier.multiplyByTwo());
