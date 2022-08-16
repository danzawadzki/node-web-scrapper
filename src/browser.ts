import puppeteer, { Browser } from 'puppeteer'

const startBrowser = async (): Promise<Browser | undefined> => {
	let browser
	try {
		console.log('Opening the browser......')
		browser = await puppeteer.launch({
			headless: false,
			args: ['--disable-setuid-sandbox'],
			ignoreHTTPSErrors: true,
		})
	} catch (err) {
		console.log('Could not create a browser instance => : ', err)
	}
	return browser
}

export default startBrowser
