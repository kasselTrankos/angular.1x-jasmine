describe("App Controller", function() {
  var scope, controller;
  beforeEach(angular.mock.module('ats.app'));
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('AppCtrl', {
      '$scope': scope
    });
    spyOn(controller,'soCaller').and.callFake(function(value) {
      controller.isCalled = true;
      return value;
    });

  }));
  it('soCaller have called from init', function(){
    controller.init();
    expect(controller.soCaller).toHaveBeenCalledWith(1);
    expect(controller.soCaller.calls.count()).toBe(1);

  });
  it('isCalled is true', function(){
    
    expect(controller.soCaller(1)).toBe(1);
    expect(controller.isCalled).toBe(true);
  });

  it("controller is defined", function() {
    expect(controller).toBeDefined();
  });
});
