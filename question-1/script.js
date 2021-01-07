let txtField = document.getElementById('text-input');
txtField.addEventListener('change', _ => {
	const tmp = Number(txtField.value).toFixed(0);
	txtField.value = tmp >= 0 ? tmp : 1;

	calculation();
});

let selectorField = document.getElementById('selector-input');
selectorField.addEventListener('change', _ => {
	calculation();
});

const calculation = _ => {
	const number = parseInt(txtField.value);
	const mode = selectorField.value;
	let result = mode == '1' ? isPrime(number) : isFibo(number);

	let answerField = document.getElementById('result');
	answerField.innerHTML = result;
}

const isPrime = number => {
	for (let i = 2, s = Math.sqrt(number); i <= s; i++)
		if (number % i === 0) return false;
	return number > 1;
}

const isFibo = number => {
	let fib = [0, 1];
	let index = 0;
	let result = fib.includes(number);

  while (result == false && fib[0] + fib[1] <= number) {
		let tmp = fib[0] + fib[1];

		fib[index] = tmp;
		index = 1 - index;

		if (tmp == number) return true;
	}
  return result;
}