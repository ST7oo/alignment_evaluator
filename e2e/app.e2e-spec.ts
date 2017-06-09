import { AlignmentEvaluatorPage } from './app.po';

describe('alignment-evaluator App', () => {
  let page: AlignmentEvaluatorPage;

  beforeEach(() => {
    page = new AlignmentEvaluatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
