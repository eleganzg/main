import { EleganzPage } from './app.po';

describe('eleganz App', () => {
  let page: EleganzPage;

  beforeEach(() => {
    page = new EleganzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
