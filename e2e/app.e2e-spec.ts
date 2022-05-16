import { HowdyFormPage } from './app.po';

describe('howdy-form App', function() {
  let page: HowdyFormPage;

  beforeEach(() => {
    page = new HowdyFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
