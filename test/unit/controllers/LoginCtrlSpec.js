'use strict';

var chai = require('chai');

var LoginCtrlModule = require('../../../app/js/controllers/LoginCtrl.js');

describe("Unit: Testing LoginCtrl", function() {
  var $scope = {};
  var LoginService = { Login: function() {}};
  var PeopleService = { Get: function() {}};
  var $state = { go: function() {}};
  var $stateParams = { redirectTo: {}};
  var $window = { sessionStorage: { setItem: function() {}} };

  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    LoginCtrlModule($scope, LoginService, PeopleService, $state, $stateParams, $window);
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should set error on bad login', function() {
    debugger;
    var stub = sandbox.stub(LoginService, 'Login');
    stub.returns({ then: function(callback) {
      callback({ Succeded: false, Message: 'Login failed'});
    }});

    $scope.login = { username: 'user', password: 'password'};
    $scope.doLogin();
    expect($scope.error).to.equal('Login failed');
  });

  it('should set currentUser on correct login', function() {
    var loginStub = sandbox.stub(LoginService, 'Login');
    loginStub.returns({ then: function(callback) {
      callback({ Succeded: true});
    }});
    var person = {
      Id: 1,
      CompanyId: 1,
      FirstName: 'John',
      LastName: 'Smith',
      Email: 'jsmith@fake.com'
    };
    var peopleStub = sandbox.stub(PeopleService, 'Get');
    peopleStub.returns({ then: function(callback) {
      callback(person);
    }});
    var mockWindow = sandbox.mock($window.sessionStorage);
    mockWindow.expects('setItem').withArgs('currentUser', JSON.stringify(person)).once();
    $scope.login = { username: 'user', password: 'password'};
    $scope.doLogin();
    mockWindow.verify();
  });

  it('should redirect to $stateParams.redirectTo if exists', function() {
    var loginStub = sandbox.stub(LoginService, 'Login');
    loginStub.returns({ then: function(callback) {
      callback({ Succeded: true});
    }});
    var peopleStub = sandbox.stub(PeopleService, 'Get');
    peopleStub.returns({ then: function(callback) {
      callback({});
    }});
    $stateParams.redirectTo = 'someplace';
    var mockState = sandbox.mock($state);
    mockState.expects('go').withArgs($stateParams.redirectTo).once();
    $scope.login = { username: 'user', password: 'password'};
    $scope.doLogin();
    mockState.verify();
  });

  it('should redirect to home.dashboard if no redirectTo', function() {
    var loginStub = sandbox.stub(LoginService, 'Login');
    loginStub.returns({ then: function(callback) {
      callback({ Succeded: true});
    }});
    var peopleStub = sandbox.stub(PeopleService, 'Get');
    peopleStub.returns({ then: function(callback) {
      callback({});
    }});
    $stateParams.redirectTo = "";
    var mockState = sandbox.mock($state);
    mockState.expects('go').withArgs('home.dashboard').once();
    $scope.login = { username: 'user', password: 'password'};
    $scope.doLogin();
    mockState.verify();
  });
});
