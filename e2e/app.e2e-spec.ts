import { NixcvPage } from './app.po';

describe('nixcv App', function() {
  let page: NixcvPage;

  beforeEach(() => {
    page = new NixcvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
