describe("App Controller", function() {
  var scope, controller;
  beforeEach(angular.mock.module('ats.app'));
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('AppCtrl', {
      '$scope': scope
    });
    spyOn(controller,'soCaller');
  }));
  it('have called from init', function(){
    controller.init();
    console.log(controller.soCaller.calls.count(), ' times ::::');

    expect(controller.soCaller).toHaveBeenCalledWith(1);
    expect(controller.soCaller.calls.count()).toBe(1);
  });
  it("controller is defined", function() {
    expect(controller).toBeDefined();
  });
});
