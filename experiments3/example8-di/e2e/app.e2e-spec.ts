import { Example8DiPage } from './app.po';

describe('example8-di App', function() {
  let page: Example8DiPage;

  beforeEach(() => {
    page = new Example8DiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
