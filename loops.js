// for loop

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === i) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`"I am ${i} strange loops."`)
    }
  }

  return array
}

// while loop

function whileLoop(number) {
  while (number > 0) {
  console.log(--number)
  }

  return 'done'
}

// do-while loop

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  array = array.slice(1)
} while (array.length > 0 && maybeTrue())

return array
}
