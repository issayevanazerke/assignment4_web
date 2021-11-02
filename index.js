$(document).ready(function(){
	$('#calculate').on('click', function(){
		let name = $('#name').val;
		let price = $('#bid').val;

		if (name != null && price != null) {
			let education = $('#education').find(":selected").val();
			let education_split = education.split("coefficient ");
			price = price * parseFloat(education_split[1]);

			let networth = $('#net_worth').find(":selected").val();
			let networth_split = networth.split("coefficient ");
			price = price * parseFloat(networth_split[1]);

			let caste = $('#caste').find(":selected").val();
			if(caste.includes("+") == true){
				let caste_split = caste.split("+");
				price = price + parseInt(caste_split[1]);
			} else {
				let caste_split = caste.split("-");
				price = price - parseInt(caste_split[1]);
			}

			for(let i = 0; i < 4; i++){
				if($('#skills'+(i+1)).is(":checked") == true){
					price = price + parseInt($('#skills'+(i+1)).val().split("+")[1]);
				}
			}

			var ages = document.getElementsByName('age');

			ages.forEach(function(item, index) {
				if (item.checked == true) {
					item_split = item.value.split("coefficient ");
					price = price *  parseFloat(item_split[1]);
				}
			});

			for(let i = 0; i < 3; i++){
				if($('#reputation' + (i + 1)).is(":checked") == true){
					if($('#reputation' + (i + 1)).val().includes("coefficient ") == true){
						price = price * parseFloat($('#reputation' + (i + 1)).val().split("coefficient ")[1]);
					} else {
						price = price - parseInt($('#reputation' + (i + 1)).val().split("-")[1]);
					}
				}
			}

			let person = {
				bride_name: name,
				bride_price: price,
				letter_to_bride: $('#loveletter').val()
			}

			$('.result').html(`Name: ${person.bride_name} || Your price: ${person.bride_price} || Love letter: ${person.letter_to_bride}`);

		} else {
			$('.result').html('Result: Name or price field is empty');
		}
	});
});