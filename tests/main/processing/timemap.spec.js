import {expect} from 'chai';
import {
  Fields,
  getYearsFromGroupedTimeMap,
  processTimeMap,
  processTimeMapData
} from '../../../src/js/processing/timemap';
import fixture from './iskme-timemap-fixture.json';


describe('time map processing', () => {
  describe('fields', () => {
    it('should extract index by field name', () => {
      expect(
        new Fields(fixture).getIndexByName('urlkey')
      ).to.be.equal(1);
    });

    it('should extract value by field name', () => {
      expect(
        new Fields(fixture).getValueByName(fixture[1], 'urlkey')
      ).to.be.equal('org,iskme)/');
    });
  });

  describe('getYearsFromGroupedTimeMap', () => {
    it('should return null years for null data', () => {
      expect(getYearsFromGroupedTimeMap(null)).to.be.null;
    });

    it('should return sorted years from data', () => {
      expect(getYearsFromGroupedTimeMap({
        2003: [
          ['2003', 'org,iskme)/', 'www.iskme.org:80'],
        ],
        2004: [
          ['2004', 'org,iskme)/', 'www.iskme.org:80'],
        ],
        2005: [
          ['2005', 'org,iskme)/', 'iskme.org:80'],
          ['2005', 'org,iskme)/about-us', 'iskme.org/about-us'],
          ['2005', 'org,iskme)/about-us/about-iskme', 'iskme.org/about-us/about-iskme'],
        ],
      })).to.be.deep.equal([2003, 2004, 2005]);
    });
  });

  it('should pack null or timemap to null', () => {
    expect(processTimeMap(null)).to.be.null;
  });

  it('should group by year, dedup by urlkey and order by urlkey', () => {
    expect(processTimeMap(
      fixture,
      {
        groupBy: 'timestamp:4',
        dedupBy: 'urlkey',
        orderBy: 'urlkey',
        strip: 'original',
      },
    )).to.be.deep.equal({
      2003: [
        ['2003', 'org,iskme)/', 'www.iskme.org:80'],
      ],
      2004: [
        ['2004', 'org,iskme)/', 'www.iskme.org:80'],
      ],
      2005: [
        ['2005', 'org,iskme)/', 'iskme.org:80'],
        ['2005', 'org,iskme)/about-us', 'iskme.org/about-us'],
        ['2005', 'org,iskme)/about-us/about-iskme', 'iskme.org/about-us/about-iskme'],
      ],
    });
  });

  it('should return empty array for empty input', () => {
    expect(processTimeMapData('iskme.org', [])).to.be.deep.equal({
      allYears: [],
      yearData: [],
    });
  });

  xit('should process correctly common data', () => {
    expect(processTimeMapData('iskme.org', fixture)).to.be.deep.equal({
      allYears: ['2003', '2004', '2005'],
      yearData: [
        [
          '2003',
          'iskme.org/',
          'www.iskme.org/',
          'www.iskme.org/?',
        ],
        [
          '2004',
          'iskme.org/',
          'www.iskme.org/',
        ],
        [
          '2005',
          'iskme.org/',
          'iskme.org/about-us',
          'iskme.org/about-us/about-iskme',
          'www.iskme.org/',
          'www.iskme.org/about-us',
        ],
      ]
    });
  });
});
