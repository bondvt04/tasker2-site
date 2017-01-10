import { Example6TwoPage } from './app.po';

describe('example6-two App', function() {
  let page: Example6TwoPage;

  beforeEach(() => {
    page = new Example6TwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
