module.exports = {
  'Demo test': browser => {
    
    browser
      .url(browser.launchUrl)
      .end(() => done())
    
  }
}
