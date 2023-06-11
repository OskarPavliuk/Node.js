function isAnagram(str1, str2) {
    // Видаляємо пробіли та перетворюємо рядки на нижній регістр
    const sortedStr1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  
    // Порівнюємо відсортовані рядки
    return sortedStr1 === sortedStr2;
  }
  
  // Приклад
  const string1 = 'dog';
  const string2 = 'god';
  console.log(isAnagram(string1, string2)); // true