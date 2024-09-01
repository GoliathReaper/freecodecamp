function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2]; // combine both arrays
  const uniqueArr = [...new Set(newArr)]; // remove duplicates
  const diffArr = uniqueArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
  return diffArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
