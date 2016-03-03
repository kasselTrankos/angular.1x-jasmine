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
    spyOn(controller, 'init').and.callFake(function(value) {
      controller.soCaller(1)
      return value;
    });
  }));
  it('length equal as 10', function(){
    expect(controller.friends).toBeDefined()
    console.log(controller.friends[0]);;
    expect(controller.friends[0]).toEqual({name:'John', age:25, gender:'boy'});
    expect(controller.friends.length).toEqual(10);
  })
  it('controller is defined', function(){
    controller.init();
    expect(controller.init.calls.count()).toEqual(1);
    expect(controller.init).toBeDefined();
  })
  it('soCaller have called from init', function(){
    controller.init();
    //controller.soCaller(1);
    expect(controller.soCaller).toHaveBeenCalledWith(1);
    expect(controller.soCaller.calls.count()).toBe(1);

  });
  it('isCalled is true', function(){
    expect(controller.isCalled).toBeDefined();
    expect(controller.soCaller(1)).toBe(1);
    expect(controller.isCalled).toBe(true);
  });
  it('makeTest given 20 return 30', function(){
    var r = controller.makeTest(20);
    expect(r).toEqual(30);
  });
  it("controller is defined", function() {
    expect(controller).toBeDefined();
  });
});
///
