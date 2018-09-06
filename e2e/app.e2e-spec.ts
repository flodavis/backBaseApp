import { BackbaseAppPage } from './app.po';

describe('backbase-app App', function() {
  let page: BackbaseAppPage;

  beforeEach(() => {
    page = new BackbaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
