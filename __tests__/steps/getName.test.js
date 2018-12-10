import getName from "../../src/steps/getName";

describe('getName', function () {
  let stdin;

  beforeEach(function () {
    stdin = require('mock-stdin').stdin();
  });

  it('Should ask for folder and create one', async () => {
    // Execution
    process.nextTick(function mockResponse() {
      stdin.send('my-folder');
      stdin.send(null);
    });

    const call = await getName();

    // Assertions
    expect(call).toBe("my-folder");
  });
});
