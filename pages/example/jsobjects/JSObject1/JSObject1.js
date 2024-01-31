export default {
	async cat_200 () {
		try {
			await Cat200.run().then()
			console.log('response', Cat200)
			console.log('responseMeta', Cat200.responseMeta)
			storeValue()
		} catch (e) {
			console.error(e)
		}
	},
	async getShiba () {
		try {
			console.log('loading start')
			Progress1.setVisibility(true)
			
			await getShiba.run()
			console.log('response', getShiba)
			console.log('responseMeta', getShiba.responseMeta)
			
			// getShiba.run().then((res) => {
				// console.log('res', res)
				// console.log('res.responseMeta', res.responseMeta)
				// console.log('getShiba.responseMeta', getShiba.responseMeta)
			// })
			
			// const response = await fetch('https://dog.ceo/api/breed/shiba/images/random')
			// const data = await response.json()
			// console.log('fetch headers', response.headers)
			// console.log('fetch status', response.status)
			// console.log('fetch ok', response.ok)
			// console.log('fetch data', data)
			console.log('loading finish')
			Progress1.setVisibility(false)
		} catch (e) {
			console.error(e)
			console.log('catch response', getShiba)
		} 
	}
}