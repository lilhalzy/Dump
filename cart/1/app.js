let data = {}
let result = {}

function addData(item) {
  if (item.name in data) {
    data[item.name].amount++;
  } else {
    data[item.name] = {
      price: item.price,
      amount: 1,
    };
  }

  calcResult()
}

const calcResult = () => {
  result = 0

  for(let n in data) {
    result += data[n].price * data[n].amount
  }
}
