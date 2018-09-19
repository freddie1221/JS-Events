(function(exports){
  function CalculatorController(){
    this._calculatorModel = new CalculatorModel();
    this._calculatorView = new CalculatorView();
  }

  CalculatorController.prototype.setEventListeners = function(){
    document.getElementById('square-button')
      .addEventListener('click', this.squareNumber.bind(this));
    document.getElementById('half-button')
      .addEventListener('click', this.halfNumber.bind(this));
    document.getElementById('percent-button')
      .addEventListener('click', this.calculatePercentage.bind(this));
  }

  CalculatorController.prototype.squareNumber = function(){
    let value = document.getElementById('square-input').value;
    let result = this._calculatorModel.square(value);
    this.displayResult(result);
  }

  CalculatorController.prototype.halfNumber = function(){
    let value = document.getElementById('half-input').value;
    let result = this._calculatorModel.half(value);
    this.displayResult(result);
  }

  CalculatorController.prototype.calculatePercentage = function(){
    let fraction = document.getElementById('percent1-input').value;
    let whole = document.getElementById('percent2-input').value;
    let result = this._calculatorModel.calculatePercentage(fraction, whole);
    this.displayResult(result);
  }

  CalculatorController.prototype.displayResult = function(result) {
    document.getElementById('output')
      .innerHTML = this._calculatorView.buildOutput(result);
  }

  exports.CalculatorController = CalculatorController
})(this);
