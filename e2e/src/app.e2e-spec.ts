import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText).toEqual(page.getParagraphText);
  });

  // TODO check it will call search API when user press Enter
  xit('check it will call search API when user press Enter', () => {
    // page.navigateTo();
    // expect(page.getParagraphText).toEqual(page.getParagraphText);
  });

  // TODO check user can navigate through the list using pagination. Total 10 items per list.
  xit('check user can navigate through the list using pagination. Total 10 items per list.', () => {
    // page.navigateTo();
    // expect(page.getParagraphText).toEqual(page.getParagraphText);
  });

  // TODO check each item will have - Full name, description, language, total stars and update date
  xit('check each item will have - Full name, description, language, total stars and update date', () => {
    // page.navigateTo();
    // expect(page.getParagraphText).toEqual(page.getParagraphText);
  });

  // TODO check if no result, notify user with appropriate message
  xit('check if no result, notify user with appropriate message', () => {
    // page.navigateTo();
    // expect(page.getParagraphText).toEqual(page.getParagraphText);
  });

});
