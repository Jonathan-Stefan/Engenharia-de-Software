const CalculatorMock = require('./CalculatorMock');

// Cria uma swatich de testes
describe('Calculator', () => {
  // Variavel para armazenar a instancia da calculadora em cada teste
  let calculator;

  // Função que sera executada antes de cada teste para garantir independencia entre os testes
  beforeEach(() => {
    calculator = new CalculatorMock();
  });

  test('should display initial value of 0', () => {
    expect(calculator.getDisplay()).toBe('0');
  });

  test('should add numbers correctly', () => {
    calculator.handleButtonClick('1');
    calculator.handleButtonClick('+');
    calculator.handleButtonClick('2');
    calculator.handleButtonClick('=');
    expect(calculator.getDisplay()).toBe('3');
  });

  test('should subtract numbers correctly', () => {
    calculator.handleButtonClick('5');
    calculator.handleButtonClick('-');
    calculator.handleButtonClick('3');
    calculator.handleButtonClick('=');
    expect(calculator.getDisplay()).toBe('2');
  });

  test('should multiply numbers correctly', () => {
    calculator.handleButtonClick('4');
    calculator.handleButtonClick('*');
    calculator.handleButtonClick('2');
    calculator.handleButtonClick('=');
    expect(calculator.getDisplay()).toBe('8');
  });

  test('should divide numbers correctly', () => {
    calculator.handleButtonClick('8');
    calculator.handleButtonClick('/');
    calculator.handleButtonClick('2');
    calculator.handleButtonClick('=');
    expect(calculator.getDisplay()).toBe('4');
  });

  test('should clear display', () => {
    calculator.handleButtonClick('8');
    calculator.handleButtonClick('C');
    expect(calculator.getDisplay()).toBe('0');
  });

  test('should display error message on division by zero', () => {
    const calculator = new CalculatorMock();
    calculator.handleButtonClick('5');
    calculator.handleButtonClick('/');
    calculator.handleButtonClick('0');
    calculator.handleButtonClick('=');
    expect(calculator.getDisplay()).toBe('Cannot divide by zero');
});

});
