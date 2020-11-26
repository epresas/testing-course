import { AnswersComponent } from './answers.component';

const renderAnswerComponent = () => {
  const array = ['España', 'China', 'Francia', 'Venezuela'];
  const capital = 'Madrid';
  const div = document.createElement('div');

  return new AnswersComponent(div, array, capital);
}

describe('Rendering Answers component', () => {
  let answersComponent;
  // Crea una instancia unica del componente para utilizarlo en todos los tests
  beforeEach(() => {
    answersComponent = renderAnswerComponent();
  });

  it('should render answers', () => {
    expect(answersComponent.answerButtons.length).toBe(4);
		answersComponent.answerButtons.forEach((button) => {
			expect(button.tagName).toBe('BUTTON');
		});
  });

  it('should disable buttons', () => {
    const buttons = answersComponent.answerButtons;
    answersComponent.disableAllButtons(buttons, 'Madrid');
    expect(buttons[0].hasAttribute('disabled')).toBe(true);
  });

  it('is enabled by default', () => {
    expect(answersComponent.answerButtons[0].hasAttribute('disabled')).toBe(false);
  })
})
