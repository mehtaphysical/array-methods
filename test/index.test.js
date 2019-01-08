const {
  map,
  filter,
  reduce,
  forEach
} = require('../lib/index');

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

    describe('filter', () => {
      it('filters with holes', () => {
        const filtered = [1, 2, , 3].filter(ele => ele === 2);
        expect(filtered).toEqual([2]);
      });
    });

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

      it('can filter with holes', () => {
        const filtered = filter([1, 2, , 3], ele => ele === 2);
        expect(filtered).toEqual([2]);
      });
    });

    describe('reduce', () => {
      it('can sum an array of numbers together', () => {
        const sum = reduce([1, 2, 3], (acc, ele) => {
          return acc + ele;
        }, 0);

        expect(sum).toEqual(6);
      });

      it('can sum an array with no accumulator', () => {
        const sum = reduce([1, 2, 3], (acc, ele) => {
          return acc + ele;
        });

        expect(sum).toEqual(6);
      });

      it('can sum with holes', () => {
        const sum = reduce([1, 2, , 3], (acc, ele) => acc + ele);
        expect(sum).toEqual(6);
      });

      it('can sum when the first value is a hole', () => {
        const sum = reduce([, , 1, 2, 3], (acc, ele) => acc + ele);
        expect(sum).toEqual(6);
      });
    });

    describe('forEach', () => {
      it('squared', () => {
        let results = [];
        forEach([1, 2, 3, 4], ele => {
          results.push(ele * ele);
        });

        expect(results).toEqual([1, 4, 9, 16]);
      });
    });
  });
});
