$(document).ready( function() {
	new Vue ({
	el: '#app',
	data: {
		showH2: true,
		numbers: []
	},
	methods: {
		addNumber(){
			let rnd = Math.floor(Math.random() * 11) + 23;
			this.numbers.push(rnd);
		},
		sum(){
			let sum = 0;

			for (let i = 0; i < this.numbers.length; i++) { // Цикл берёт верхний sum, и, если i меньше длинны масссива numbers
				sum += this.numbers[i] + 2;					// то прибавляет к sum число, которое в массиве, индекс равен i, он будет 
			}												// идти с 0 и +1 каждый раз, как появляется число при клике.
				{ 
					return sum;
			}
		}
	}

});

});