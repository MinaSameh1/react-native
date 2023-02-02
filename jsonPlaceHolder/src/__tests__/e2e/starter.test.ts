import { by, device, expect, element } from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should not have welcome screen', async () => {
    await expect(element(by.id('welcome'))).not.toBeVisible()
  })

  it('should show text', async () => {
    await expect(element(by.text('this is home'))).toBeVisible()
  })
})
