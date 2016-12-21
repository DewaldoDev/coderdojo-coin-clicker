onCoinClick = function() {
  var coinCountElement = document.getElementById('coinCount');
  var coinCount = parseInt(coinCountElement.innerHTML);

  coinCountElement.innerHTML = coinCount + 1;
};
