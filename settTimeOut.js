const getVal = () => {
  setTimeout(()=> {
    return {'val': 'Sunil nhi h'}
  })
};

let first = getVal()
console.log(first.val)
