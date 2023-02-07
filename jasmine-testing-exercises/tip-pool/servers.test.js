describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    allServers = {}; // Clear up Object list.
    serverTbody.innerHTML = ''; // clean up server in tbody element from HTML.
    serverId = 0; // Reset: Set ID = 0 after you test this.
  });
});
