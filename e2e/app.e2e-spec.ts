import { BeerBrosPage } from './app.po';

describe('beer-bros App', function() {
  let page: BeerBrosPage;

  beforeEach(() => {
    page = new BeerBrosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
