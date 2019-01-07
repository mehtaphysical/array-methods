const { map, filter } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('doubles each item in an array', () => {
        const doubled = [2, 4, 6].map(ele => {
          return ele * 2;
        });

        expect(doubled).toEqual([4, 8, 12]);
      });
    });

    describe('filter', () => { });

    describe('findIndex', () => { });

    describe('reduce', () => { });

    describe('every', () => { });
  });

  describe('implementation', () => {
    describe('map', () => {
      it('can double every item in an array', () => {
        const results = map([2, 4, 6], ele => {
          return ele * 2;
        });

        expect(results).toEqual([4, 8, 12]);
      });

      it('can double every item an skip holes', () => {
        const arr = [2, 4, , 6];
        const results = map(arr, ele => ele * 2);
        expect(results).toEqual([4, 8, , 12]);
      });
    });

    describe('filter', () => {
      it('can filter out odd numbers', () => {
        const evens = filter([1, 2, 3, 4], ele => {
          return ele % 2 === 0;
        });

        expect(evens).toEqual([2, 4]);
      });
    });
  });
});
