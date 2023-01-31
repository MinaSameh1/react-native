describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).not.toBeVisible()
  })

  it('should show  ', async () => {
    await expect(element(by.id('text'))).toBeVisible()
  })
})
