var valor = {productos: [{
		name: 'Amatista',
		price: 180.35,
		description: 'Cuarzo Amatista, color violeta característico',
		canPurchase: false,
		soldOut: false,
		images: [
			{
				full: 'images/amatista-full.jpg',
				thumb: 'images/amatista-thum.jpg',
			},
		]
	},
	{
		name: 'Ojo de Gato',
		price: 398.95,
		description: 'La alexandrita, tambien conocida como alexandrite o alejandrita, es asociada con el signo astrologico de acuario.',
		canPurchase: true,
		soldOut: true,
		images: [
			{
				full: 'images/cat-eye-full.jpg',
				thumb: 'images/cat-eye-thum.jpg',
			},
		]

	}]}

//eval( "var objeto="+valor );
console.log(valor);	