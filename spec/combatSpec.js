'use strict';

describe('robot specs', function () {
  it('should define a robot function', function() {
    expect(Robot).toBeDefined();
  });
  it('should define 3 types of Robot functions', function () {
    expect(Drone).toBeDefined();
    expect(Bipedal).toBeDefined();
    expect(ATV).toBeDefined();
  });
});

xdescribe('robot model specs', function() {
  it('should define 6 specific robot models', function () {
    expect(Megachine).toBeDefined();
    expect(Bladey).toBeDefined();
    expect(ThreeLegs).toBeDefined();
    expect(StoneHands).toBeDefined();
    expect(PewPew).toBeDefined();
    expect(WhirrrMachine).toBeDefined();
  });
});
