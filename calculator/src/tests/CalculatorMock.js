class CalculatorMock {
  constructor() {
    this.display = '0';
    this.prevValue = '';
    this.operator = '';
  }

  handleButtonClick(value) {
    if (value === 'C') {
      this.display = '0';
      this.prevValue = '';
      this.operator = '';
    } else if (value === '=') {
      try {
        this.calculateResult();
      } catch (error) {
        this.display = error.message;
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      this.prevValue = this.display;
      this.operator = value;
      this.display = '0';
    } else {
      if (this.display === '0') {
        this.display = value;
      } else {
        this.display += value;
      }
    }
  }

  calculateResult() {
    const current = parseFloat(this.display);
    const previous = parseFloat(this.prevValue);
    let result = 0;
    switch (this.operator) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        if (current === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = previous / current;
        break;
      default:
        result = current;
    }
    this.display = result.toString();
    this.prevValue = '';
    this.operator = '';
  }

  getDisplay() {
    return this.display;
  }
}

module.exports = CalculatorMock;
