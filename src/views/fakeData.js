import {setDataToStorage} from "../service/storageServices";

const fakeData = [
	{
		id: Math.random(),
		name: 'Toy',
		description: 'ABCXYZASDSADJASKDJASKDSAJKDSAJDK',
		price: 500,
		category: ['toy', 'bdsm']
	}, {
		id: Math.random(),
		name: 'Knife',
		description: 'ASDSADSADSADSADASDASDSADSADSADSADSADASDSADASDASDSA',
		price: 10000,
		category: ['knife', 'kitchen']
	}, {
		id: Math.random(),
		name: 'Wallet',
		description: 'ASDASDASDASDSADSADSADSADASD',
		price: 2000,
		category: ['wallet']
	}, {
		id: Math.random(),
		name: 'Knife',
		description: 'ASDSADSADSADSADASDASDSADSADSADSADSADASDSADASDASDSA',
		price: 10000,
		category: ['knife', 'kitchen']
	},
]

setDataToStorage('products', fakeData);