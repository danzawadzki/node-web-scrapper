import { Browser } from 'puppeteer'

import pageScraper from './pageScraper'

async function scrapeAll(browserInstance: Promise<Browser | undefined>) {
	let browser
	try {
		browser = await browserInstance
		await pageScraper.scraper(browser)
	} catch (err) {
		console.log('Could not resolve the browser instance => ', err)
	}
}

export default (browserInstance: Promise<Browser | undefined>) => scrapeAll(browserInstance)
