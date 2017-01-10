import { Example7RoutingPage } from './app.po';

describe('example7-routing App', function() {
  let page: Example7RoutingPage;

  beforeEach(() => {
    page = new Example7RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
