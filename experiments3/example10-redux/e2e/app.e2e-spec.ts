import { Example10ReduxPage } from './app.po';

describe('example10-redux App', function() {
  let page: Example10ReduxPage;

  beforeEach(() => {
    page = new Example10ReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
