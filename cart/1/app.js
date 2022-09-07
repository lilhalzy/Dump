let data = {}
let result = {}

let trolley = document.querySelector('#trolley')

const addData = (item) => {
  if (item.name in data) {
    data[item.name].amount++;
  } else {
    data[item.name] = {
      price: item.price,
      amount: 1,
    };
  }

  calcResult()
  trolleyRender()
}

const calcResult = () => {
  result = 0

  for(let n in data) {
    result += data[n].price * data[n].amount
  }
}

const trolleyRender = () => {
  for(let key in data) {
    let div_item = document.createElement('div')
    let div_btn = document.createElement('div')
    let btn = document.createElement('button')
    btn.append('Remove')
    div_item.classList.add('second-padding')
    btn.classList.add('remove')
    div_btn.append(btn)
    
    div_item.innerText = `${key}(${data[key].amount}x)`

    trolley.append(div_item)
    trolley.append(div_btn)
  }
}
