(Задача 1)
Наш код працює наступним чином:
1) Код визначає функцію add, яка приймає числовий аргумент num. Вона створює замикання, щоб зберігати поточну суму sum.
2) Функція innerAdd приймає наступне число nextNum і додає його до суми sum. Якщо nextNum не є необов'язковим аргументом, функція повертає саму себе (innerAdd), що дозволяє викликати її послідовно з новими аргументами. Коли nextNum є undefined, функція повертає поточну суму sum.
3) Функція add повертає ще одну функцію, яка перевіряє кількість аргументів. Якщо немає аргументів, вона повертає поточну суму sum. Якщо є аргументи, вона повертає функцію innerAdd з першим аргументом.

(Задача 2)
Наш код працює наступним чином:
1) У цій функції ми спочатку перевіряємо, чи мають рядки однакову довжину. Якщо ні, то вони не можуть бути анаграмами, тому повертаємо false.
2) Далі ми створюємо об'єкт charCount, який використовується для підрахунку кількості входжень кожного символу в перший рядок str1. Проходимося по символам str1 і збільшуємо лічильник для кожного символу в charCount.
3) Потім ми перевіряємо, чи кожен символ другого рядка str2 є ключем в charCount та чи його значення більше 0. Якщо ні, то рядки не є анаграмами, і повертаємо false. Якщо так, зменшуємо значення лічильника для символу.
4) Якщо ми успішно пройшли через всі символи другого рядка str2, та для кожного символу ми змогли знайти відповідний лічильник і зменшити його, то рядки є анаграмами, і повертаємо true.

(Задача 3)
Наш код працює наступним чином:
1) У цій функції ми перевіряємо, чи переданий об'єкт obj є примітивним типом (не об'єктом або null). Якщо так, то повертаємо його без змін.
2) Якщо obj є масивом, ми викликаємо deepClone рекурсивно для кожного елемента масиву та повертаємо клонований масив.
3) Якщо obj є об'єктом, ми створюємо новий порожній об'єкт cloneObj. Потім ми ітеруємо через кожний ключ у вхідному об'єкті obj та присвоюємо клоноване значення для кожного ключа у cloneObj, викликаючи deepClone рекурсивно для кожного значення.
4) На кінці повертаємо глибоко клонований об'єкт cloneObj.

(Задача 4)
Наш код працює наступним чином:
1) Функція-обгортка wrapper отримує функцію func як вхідний параметр. Вона створює об'єкт cache для зберігання кешованих значень, використовуючи Map.
2) При кожному виклику функції cachedCalc ми перетворюємо масив аргументів args в рядок cacheKey за допомогою JSON.stringify(). Якщо cache містить cacheKey, ми повертаємо кешоване значення з cache.
3) Якщо cache не містить cacheKey, ми викликаємо оригінальну функцію func(...args) для обчислення результату. Результат зберігається у cache під cacheKey, і ми повертаємо його.
4) У прикладі вище ми визначаємо функцію calc, яка додає три числа. Потім ми створюємо кешовану версію функції за допомогою wrapper(calc). Після цього ми викликаємо cachedCalc з різними аргументами, перевіряючи, чи значення обчислюється або отримується з кешу.
