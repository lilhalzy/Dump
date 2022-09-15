let data = {}
let result = {}

let trolley = document.querySelector('#trolley')
let showtotal = document.querySelector('#total')

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
  showTotal()
}

const showTotal = () => {
  emptyElement(showtotal)
  let p = document.createElement('p')
  p.classList.add('bold')
  p.innerText = `$${result}`
  showtotal.append(p)
}

const calcResult = () => {
  result = 0

  for(let n in data) {
    result += data[n].price * data[n].amount
  }
}

const removeItem = (itemToRemove) => {
  delete data[itemToRemove]

    calcResult();
    trolleyRender();
    showTotal();
}

const trolleyRender = () => {
  emptyElement(trolley)

  for(let key in data) {
    let div_item = document.createElement('div')
    let div_btn = document.createElement('div')
    let btn = document.createElement('button')
    btn.append('Remove')
    btn.classList.add('remove')
    btn.setAttribute('onclick', `removeItem('${key}')`)
    div_item.classList.add('second-padding')
    div_btn.append(btn)
    
    div_item.innerText = `${key}(${data[key].amount}x)`

    trolley.append(div_item)
    trolley.append(div_btn)
  }
}

const emptyElement = (element) => {
  while(element.firstChild) {
    element.removeChild(element.firstChild)
  }
}