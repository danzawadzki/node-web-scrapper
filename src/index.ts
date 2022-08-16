import startBrowser from './browser'
import scraperController from './pageController'

let browserInstance = startBrowser()
scraperController(browserInstance)
