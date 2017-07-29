import { LoveSerialsPage } from './app.po';

describe('love-serials App', () => {
  let page: LoveSerialsPage;

  beforeEach(() => {
    page = new LoveSerialsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
