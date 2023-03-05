function findSubstring(input_str) {
  let subString=0, front = 0;
  
  let mappings = {};

  for (let rear = 0; rear < input_str.length; rear++) {
    let char = input_str[rear];

    if (mappings[char] !== undefined && mappings[char] >= front) {
      front = mappings[char] + 1;
    }

    mappings[char] = rear;
    subString = Math.max(subString, rear - front + 1);
  }

  return subString;
}

let substring = findSubstring("abcabcbb");
console.log(substring);