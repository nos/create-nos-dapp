import fs from "fs-extra";

import getName from "../../src/steps/getName";

describe('getName', function () {
  let stdin;

  beforeEach(function () {
    stdin = require('mock-stdin').stdin();
  });

  it('Should ask for folder and create one', async () => {
    // Setup
    fs.existsSync.mockReturnValue(true);

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
