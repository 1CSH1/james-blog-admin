import { JamesBlogAdminPage } from './app.po';

describe('james-blog-admin App', () => {
  let page: JamesBlogAdminPage;

  beforeEach(() => {
    page = new JamesBlogAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
