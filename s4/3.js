String.prototype.format = function (format) {
  let result = this
  for (const prop in format) {
    result = result.replace('{' + prop + '}', format[prop])   
  }
  return result
}

console.log('{name} is a {role}'.format({ name: 'andrei', role: 'teacher' }))