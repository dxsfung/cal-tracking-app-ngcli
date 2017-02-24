import { UsingNgPage } from './app.po';

describe('using-ng App', function() {
  let page: UsingNgPage;

  beforeEach(() => {
    page = new UsingNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
