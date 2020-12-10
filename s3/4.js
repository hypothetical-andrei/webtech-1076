const sampleString = 'the quick,brown fox jumps over the lazy dog'

const getFrequecies = (input) => {
  const result = {}
  const words = input.split(/[\s,]/)
  for (const word of words) {
    if (word in result) {
      result[word]++
    } else {
      result[word] = 1
    }
  }

  for (const word in result) {
    result[word] /= words.length
  }

  return result
}

console.log(getFrequecies(sampleString))