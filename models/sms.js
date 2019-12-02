


const accountSid = (process.env.SMS_accountSid)
const authToken = (process.env.SMS_authToken)
const client = require('twilio')(accountSid, authToken)

const sendWelcomeSms = (name, number) => {
	client.messages.create({
		body: `${name}, Welcome to LifeStyle Store.`,
		from: '+13218004066',
		to: `+91${number}`
	})
}

const sendSuccessOrder = (name, ordername, quantity, price, number) => {
	client.messages.create({
		body: `${name},your order for ${ordername}, Quantity-${quantity} for Price-Rs ${price} is successfully placed.`,
		from: '+13218004066',
		to: `+91${number}`
	})
}

module.exports = { sendWelcomeSms, sendSuccessOrder }
