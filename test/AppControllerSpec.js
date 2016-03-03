describe("App Controller", function() {
  var scope, controller;
  beforeEach(angular.mock.module('ats.app'));
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('AppCtrl', {
      '$scope': scope
    });


  }));

  it('makeTest given 20 return 30', function(){
    var r = controller.makeTest(20);
    expect(r).toEqual(30);
  });
  it("controller is defined", function() {
    expect(controller).toBeDefined();
  });
  it('soCaller is called on init', function(){
    spyOn(controller, 'soCaller');
    controller.init();
    expect(controller.soCaller).toHaveBeenCalled();
  });
  it('soCaller is true', function(){
    var r = controller.soCaller(2);
    expect(r).toBe(142);
  });
});
///
