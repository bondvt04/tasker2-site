import { Example4FormsPage } from './app.po';

describe('example4-forms App', function() {
  let page: Example4FormsPage;

  beforeEach(() => {
    page = new Example4FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
