let testFile =  require("./rivraddon.js");;

global.console = {
    log: jest.fn()
  }
 
  describe('Tests rivraddon', () => {
    test('should console a message', () => {
      const output ="SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics";
      window.rivraddon.analytics.enableAnalytics();
      expect(global.console.log).toHaveBeenCalledWith(
        output
      )
    })

  })