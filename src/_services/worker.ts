onmessage = (event) => {

  let sum = 0;
  console.log('I am Worker')
  for (let index = 0; index < 10000000000; index++) {
    sum += index;
    
  }
  postMessage({
    hasSum: true,
    sum: `The sum is: ${sum}`,
  })
  console.log('worker onmessage', event.data);
}