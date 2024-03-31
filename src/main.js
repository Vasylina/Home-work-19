console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')



/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
var i = 5

console.log('Значення змінної i:', i)
console.log('Префіксний інкремент:', ++i)
console.log('Постфіксний інкремент:', i++)

console.log('Значення змінної i:', i)
console.log('Постфіксний декремент:', i--)
console.log('Префіксний декремент:', --i)


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 50

myTest += myNum
console.log('+=:', myTest)

myTest -= myNum
console.log('-=:', myTest)

myTest *= myNum
console.log('*=:', myTest)

myTest /= myNum
console.log('/=:', myTest)

myTest %= myNum
console.log('%=:', myTest)

// myTest
// +=
// –=
// *=
// /=
// %=


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow
var myPi = Math.PI
console.log('myPi:', myPi)

var myRound = Math.round(89.279)
console.log('myRound:', myRound)

var myRandom = Math.random()*10
console.log('myRandom:', myRandom)

var myPow = Math.pow(3, 5)
console.log('myPow:', myPow)

/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
var strObj = {str: 'Мама мыла раму, рама мыла маму'}
strObj.length = strObj.str.length
console.log('strObj:', strObj)

/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama
var isRamaPos = strObj.str.indexOf('рама')
var isRama = strObj.str.includes('рама')
console.log('isRamaPos:', isRamaPos)
console.log('isRama:', isRama)

/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace = strObj.str.replace('мыла', 'моет')
strReplace = strReplace.replace('мыла', 'держит')
strReplace = strReplace.replace('рама', 'Рама')
console.log('strReplace:', strReplace)


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
var someStr = 'some STRING'
var upperStr = someStr.toUpperCase()
var lowerStr = someStr.toLowerCase()
console.log('someStr:', someStr)
console.log('upperStr:', upperStr)
console.log('lowerStr:', lowerStr)

