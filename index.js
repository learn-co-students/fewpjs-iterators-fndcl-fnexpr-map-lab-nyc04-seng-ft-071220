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
//Mines works but it is not passing

// const titleCased = tutorials.map((tutorial) => {
//   words = tutorial.split(" ")
//   let caps = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   let got = caps.join(" ");
//   return got;
//   });
// console.log(titleCased)

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}
console.log(titleCased)
