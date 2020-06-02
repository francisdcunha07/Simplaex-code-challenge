let testFile = require("./rivraddon.js");;

global.console = {
  log: jest.fn()
}

describe('Tests rivraddon', () => {
  test('should console a message', () => {
    const output = "SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics";
    window.rivraddon.analytics.enableAnalytics();
    expect(global.console.log).toHaveBeenCalledWith(
      output
    );
  })
});

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  readyState: 4,
  onreadystatechange: jest.fn(),
  setRequestHeader: jest.fn()
};
window.XMLHttpRequest = jest.fn(() => mockXHR);

describe("Testing the track event using Xhr", function () {
  test("Should post event to tracker", function (done) {
    const reqPromise = window.rivraddon.analytics.trackPbjsEvent({ "eventType": "Purchase" });
    mockXHR.onreadystatechange();
    reqPromise.then(res => {
      done();
    }).catch(e => {
      expect(mockXHR.open).toBeCalledWith('POST', 'https://tracker.simplaex-code-challenge.com');
      expect(mockXHR.setRequestHeader).toBeCalledWith('Content-Type', 'application/json;charset=UTF-8');
      expect(e).toBe("Some Error Occurred");
      done();
    });
  });
});