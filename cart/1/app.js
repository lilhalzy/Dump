let data = {}

function addData(item) {
  if (item.name in data) {
    data[item.name].amount++;
  } else {
    data[item.name] = {
      price: item.price,
      amount: 1,
    };
  }
}
