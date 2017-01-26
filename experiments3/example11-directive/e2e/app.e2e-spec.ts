import { Example11DirectivePage } from './app.po';

describe('example11-directive App', function() {
  let page: Example11DirectivePage;

  beforeEach(() => {
    page = new Example11DirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
