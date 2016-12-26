import { Example3Page } from './app.po';

describe('example3 App', function() {
  let page: Example3Page;

  beforeEach(() => {
    page = new Example3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
