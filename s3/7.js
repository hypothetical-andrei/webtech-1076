const sampleArray = [1,2,3,4,5,6,7,8]

const sampleTransformation = (x) => x ** 2

const map = (a, t) => {
  const result = []
  for (const element of a){
    result.push(t(element))
  }
  return result
}

console.log(map(sampleArray, sampleTransformation))

const samplePredicate = (e) => e > 3

const filter = (a, p) => {
  const result = []
  for (const element of a) {
    if (p(element)) {
      result.push(element)
    }
  }
  return result
}

console.log(filter(sampleArray, samplePredicate))

console.log(map(['cat', 'dog', 'bear', 'mouse'], (e) => e.length))

console.log(filter(['cat', 'dog', 'bear', 'mouse'], (e) => e.length > 3))