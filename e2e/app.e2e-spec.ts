import { AdminlteAngularPage } from './app.po';

describe('adminlte-angular App', function() {
  let page: AdminlteAngularPage;

  beforeEach(() => {
    page = new AdminlteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
