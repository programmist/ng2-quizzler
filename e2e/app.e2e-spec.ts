import { Ng2QuizzlerPage } from './app.po';

describe('ng2-quizzler App', function() {
  let page: Ng2QuizzlerPage;

  beforeEach(() => {
    page = new Ng2QuizzlerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
