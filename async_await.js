const getVal = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      let error = false
      if (!error) {
        resolve({'val': 'Sunil'})
      } else {
        reject('le ja')
      }
    })
  })
}

async function outerGetVal() {
  const val = await getVal()
  return val
}

outerGetVal().then((item) => {console.log(item.val)})
