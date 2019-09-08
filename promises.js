
const getVal = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      let error = true
      if (!error) {
        resolve({'val': 'Sunil'})
      } else {
        reject('le ja')
      }
    })
  })
}

getVal()
  .then(item => {
    console.log(item.val)
})
  .catch(error => {
    console.log(error)
  })
