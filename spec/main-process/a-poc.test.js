describe('platform-specific tests', function () {
  if (process.platform === 'linux') {
    it('runs linux-specific tests', () => {
      fail()
    })
  } else if (process.platform === 'darwin') {
    it('runs darwin-specific tests', () => {
      fail()
    })
  } else {
    it('runs windows-specific tests', () => {
      fail()
    })
  }
})
