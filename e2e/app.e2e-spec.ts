import { Angular2CliBoilerAdvancedPage } from './app.po';

describe('angular2-cli-boiler-advanced App', function() {
  let page: Angular2CliBoilerAdvancedPage;

  beforeEach(() => {
    page = new Angular2CliBoilerAdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
