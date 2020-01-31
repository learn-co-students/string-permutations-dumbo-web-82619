function findAllPermutations(string) {
  let results = []
  
  if (string.length === 1) {
    results.push(string)
    return results
  }
  
  for (let i = 0; i < string.length; i++) {
    let targetChar = string[i]
    let remChars = string.slice(0, i) + string.slice(i + 1)
    let innerPermutations = findAllPermutations(remChars)

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(targetChar + innerPermutations[j])
    }
  }
  return results
}
