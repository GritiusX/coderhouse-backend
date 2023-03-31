let obj = {};
for (let i = 1; i <= 10000; i++) {
	const num = Math.ceil(Math.random() * 20);

	if (!obj[num]) {
		//
		obj[num] = 1;
	} else {
		obj[num]++;
	}
}

console.log(obj);
