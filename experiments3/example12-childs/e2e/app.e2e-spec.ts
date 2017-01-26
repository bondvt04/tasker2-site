import { Example12ChildsPage } from './app.po';

describe('example12-childs App', function() {
  let page: Example12ChildsPage;

  beforeEach(() => {
    page = new Example12ChildsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
