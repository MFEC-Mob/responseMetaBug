export default {
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async login () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')	
		try {
			await ApiLogin.run()
			console.log('response', ApiLogin)
			
			// const response = await ApiLogin.run()			
			// console.log('response meta', ApiLogin)
			// console.log('response data', response)
			
			// await fetch('http://poc-api.talance.tech/api/v1/authorize/login', {
				// method: 'POST',
				// headers: {
					// "Content-Type": "application/json",
				// },
				// body: JSON.stringify({
					// email: usernameInput.text,
					// password: passwordInput.text
				// }),
			// }).then((response) => {
				// console.log('success', response.json())
			// }).catch((error) => {
				// console.error('error', error)				
			// })
		} catch (e) {
			console.error(e)
		}
	},
	async login2 () {
		try {
			const response = await ApiLogin2.run()
			console.log('response2 data', response)
			console.log('responseMeta', ApiLogin2)
			// console.log('statusCode', ApiLogin2.responseMeta.statusCode)
			//	use async-await or promises
			//	await storeValue('varName', 'hello world')
		} catch (e) {			
			// console.log('response2 data', response)
			console.log('responseMeta', ApiLogin2)
			console.log('statusCode', ApiLogin2.responseMeta.statusCode)
		
		}
		
	},
	async fetch_login () {
        const response = await fetch("http://poc-api.talance.tech/api/v1/authorize/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:usernameInput.text,
                password:passwordInput.text,
            }),
        });
        console.log(response);
				console.log(response.json());
    },
	
	
}