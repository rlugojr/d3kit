import * as d3Kit from './main.js';

describe('d3Kit', () => {
  it('should exist', () => {
    expect(d3Kit).to.exist;
  });

  it('should have CanvasSkeleton', () => {
    expect(d3Kit.CanvasSkeleton).to.exist;
  });

  it('should have SvgSkeleton', () => {
    expect(d3Kit.SvgSkeleton).to.exist;
  });

  // it('should have Chartlet', () => {
  //   expect(d3Kit.Chartlet).to.exist;
  // });

  it('should have helper', () => {
    expect(d3Kit.helper).to.exist;
  });

  it('should have LayerOrganizer', () => {
    expect(d3Kit.LayerOrganizer).to.exist;
  });
});
