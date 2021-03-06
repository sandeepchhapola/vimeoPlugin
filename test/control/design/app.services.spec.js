describe('Unit : vimeoPlugin design services', function () {
  describe('Unit: Buildfire Provider', function () {
    var Buildfire;
    beforeEach(module('vimeoPluginDesign'));
    beforeEach(inject(function (_Buildfire_) {
      Buildfire = _Buildfire_;
    }));

    it('Buildfire should exist and be an object', function () {
      expect(typeof Buildfire).toEqual('object');
    });
  });

  describe('Unit : DataStore Factory', function () {
    var DataStore, Buildfire, STATUS_MESSAGES, STATUS_CODE;
    beforeEach(module('vimeoPluginDesign'));
    beforeEach(inject(function (_DataStore_, _STATUS_CODE_, _STATUS_MESSAGES_) {
      DataStore = _DataStore_;
      Buildfire = {
        datastore: {}
      };
      Buildfire.datastore = jasmine.createSpyObj('Buildfire.datastore', ['get', 'getById', 'insert', 'update', 'save', 'delete']);
    }));

    it('DataStore should exist and be an object', function () {
      expect(typeof DataStore).toEqual('object');
    });
    it('DataStore.get should exist and be a function', function () {
      expect(typeof DataStore.get).toEqual('function');
    });
    it('DataStore.getById should exist and be a function', function () {
      expect(typeof DataStore.getById).toEqual('function');
    });
    it('DataStore.insert should exist and be a function', function () {
      expect(typeof DataStore.insert).toEqual('function');
    });
    it('DataStore.update should exist and be a function', function () {
      expect(typeof DataStore.update).toEqual('function');
    });
    it('DataStore.save should exist and be a function', function () {
      expect(typeof DataStore.save).toEqual('function');
    });
    it('DataStore.deleteById should exist and be a function', function () {
      expect(typeof DataStore.deleteById).toEqual('function');
    });
  });

  describe('Unit : ImageLibrary Factory', function () {
    var ImageLibrary, Buildfire, STATUS_MESSAGES, STATUS_CODE;
    beforeEach(module('vimeoPluginDesign'));

    beforeEach(inject(function (_ImageLibrary_, _STATUS_CODE_, _STATUS_MESSAGES_, _$q_) {
      ImageLibrary = _ImageLibrary_;
      STATUS_CODE = _STATUS_CODE_;
      STATUS_MESSAGES = _STATUS_MESSAGES_;
      Buildfire = {
        imageLib: {}
      };
      Buildfire.imageLib = jasmine.createSpyObj('Buildfire.imageLib', ['showDialog']);
    }));

    it('Buildfire should exist and be an object', function () {
      expect(typeof Buildfire).toEqual('object');
    });
    it('Buildfire.imageLib should exist and be an object', function () {
      expect(typeof Buildfire.imageLib).toEqual('object');
    });
    it('ImageLibrary should exist and be an object', function () {
      expect(typeof ImageLibrary).toEqual('object');
    });
    it('ImageLibrary.showDialog should exist and be an function', function () {
      expect(typeof ImageLibrary.showDialog).toEqual('function');
    });
  });
});