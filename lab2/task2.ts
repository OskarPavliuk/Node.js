function areAnagrams(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount: Record<string, number> = {};
  
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
  
    return true;
  }
  
  console.log(areAnagrams("dog", "god")); // true
  console.log(areAnagrams("hawai", "hello")); // false