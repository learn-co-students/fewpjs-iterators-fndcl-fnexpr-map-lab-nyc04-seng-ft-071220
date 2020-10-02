const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  let f_array = tutorials.map(str => {
    let new_array = str.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    return new_array.join(' ')
  })

  return f_array
}

//iterate through the array, grab each string elements
  //split the string into another array of elements
      //iterate through the array and find the first character of that word.
                //uppercase that character.

