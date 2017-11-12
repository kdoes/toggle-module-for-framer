require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"toggle":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Toggle = (function(superClass) {
  extend(Toggle, superClass);

  function Toggle(options) {
    var fn, i, j, len, option, ref, ref1, ref2, ref3, ref4, ref5;
    Toggle.__super__.constructor.call(this, _.defaults(options, {
      width: 355,
      height: 40
    }));
    this.toggleOptions = (ref = options.toggleOptions) != null ? ref : ['A', 'B', 'C', 'D'];
    this.activeOption = (ref1 = options.activeOption) != null ? ref1 : this.toggleOptions[0];
    this.activeColor = new Color((ref2 = options.activeColor) != null ? ref2 : '#000000');
    this.inactiveColor = (ref3 = options.inactiveColor) != null ? ref3 : "#FFFFFF";
    this.borderColor = (ref4 = options.borderColor) != null ? ref4 : this.activeColor.alpha(.25);
    this.optionStyle = _.defaults(options.optionStyle, {
      'text-align': 'center',
      'padding-top': '8px',
      'font-size': '14px'
    });
    this.toggleContainer = new Layer({
      y: 0,
      x: 0,
      backgroundColor: '',
      height: options.height,
      width: options.width,
      parent: this
    });
    ref5 = this.toggleOptions;
    fn = (function(_this) {
      return function(option, i) {
        option = new Layer({
          width: options.width / _this.toggleOptions.length,
          height: _this.toggleContainer.height,
          parent: _this.toggleContainer,
          html: _this.toggleOptions[i],
          borderWidth: 1,
          x: options.width / _this.toggleOptions.length * i,
          name: _this.toggleOptions[i]
        });
        option.style = _this.optionStyle;
        return option.onClick(function(event, layer) {
          if (_this.activeOption !== option.name) {
            _this.activeOption = option.name;
            _this.updateToggleOptions();
            return typeof _this.changeCallback === "function" ? _this.changeCallback(option.name) : void 0;
          }
        });
      };
    })(this);
    for (i = j = 0, len = ref5.length; j < len; i = ++j) {
      option = ref5[i];
      fn(option, i);
    }
    this.updateToggleOptions();
  }

  Toggle.prototype.getActiveToggle = function() {
    return this.activeOption;
  };

  Toggle.prototype.onChange = function(opt) {
    return this.changeCallback = opt;
  };

  Toggle.prototype.updateToggleOptions = function() {
    var allOptions, i, j, len, option, results;
    allOptions = this.toggleContainer.children;
    results = [];
    for (i = j = 0, len = allOptions.length; j < len; i = ++j) {
      option = allOptions[i];
      if (option.name === this.activeOption) {
        option.color = this.inactiveColor;
        option.backgroundColor = this.activeColor;
        results.push(option.borderColor = this.activeColor);
      } else {
        option.color = this.activeColor;
        option.backgroundColor = this.inactiveColor;
        results.push(option.borderColor = this.borderColor);
      }
    }
    return results;
  };

  return Toggle;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2tkb2VzL0RvY3VtZW50cy9GcmFtZXIvVG9nZ2xlIE1vZHVsZS5mcmFtZXIvbW9kdWxlcy90b2dnbGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMva2RvZXMvRG9jdW1lbnRzL0ZyYW1lci9Ub2dnbGUgTW9kdWxlLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgS2ltIERvZXMgLSAyMDE3XG4jIGtpbWRvZXNkZXNpZ24ubmxcbiNcbiMgQSB0b2dnbGUgbW9kdWxlIHdoaWNoIGFsbG93cyB5b3UgdG8gZWFzaWx5IGNyZWF0ZSwgYW5kIGludGVyYWN0aXZlbHkgdXNlXG4jIHRvZ2dsZXMgaW4gRnJhbWVyLlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY2xhc3MgZXhwb3J0cy5Ub2dnbGUgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG5cdFx0c3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0d2lkdGg6IDM1NVxuXHRcdFx0aGVpZ2h0OiA0MFxuXHRcdEB0b2dnbGVPcHRpb25zID0gb3B0aW9ucy50b2dnbGVPcHRpb25zID8gWydBJywgJ0InLCAnQycsICdEJ11cblx0XHRAYWN0aXZlT3B0aW9uID0gb3B0aW9ucy5hY3RpdmVPcHRpb24gPyBAdG9nZ2xlT3B0aW9uc1swXVxuXHRcdEBhY3RpdmVDb2xvciA9IG5ldyBDb2xvcihvcHRpb25zLmFjdGl2ZUNvbG9yID8gJyMwMDAwMDAnKVxuXHRcdEBpbmFjdGl2ZUNvbG9yID0gb3B0aW9ucy5pbmFjdGl2ZUNvbG9yID8gXCIjRkZGRkZGXCJcblx0XHRAYm9yZGVyQ29sb3IgPSBvcHRpb25zLmJvcmRlckNvbG9yID8gQGFjdGl2ZUNvbG9yLmFscGhhKC4yNSlcblx0XHRAb3B0aW9uU3R5bGUgPSBfLmRlZmF1bHRzIG9wdGlvbnMub3B0aW9uU3R5bGUsXG5cdFx0XHQndGV4dC1hbGlnbic6ICdjZW50ZXInXG5cdFx0XHQncGFkZGluZy10b3AnOiAnOHB4J1xuXHRcdFx0J2ZvbnQtc2l6ZSc6ICcxNHB4J1xuXG5cdFx0QHRvZ2dsZUNvbnRhaW5lciA9IG5ldyBMYXllclxuXHRcdFx0eTogMFxuXHRcdFx0eDogMFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnJ1xuXHRcdFx0aGVpZ2h0OiBvcHRpb25zLmhlaWdodFxuXHRcdFx0d2lkdGg6IG9wdGlvbnMud2lkdGhcblx0XHRcdHBhcmVudDogdGhpc1xuXG5cdFx0Zm9yIG9wdGlvbiwgaSBpbiBAdG9nZ2xlT3B0aW9uc1xuXHRcdFx0ZG8gKG9wdGlvbiwgaSkgPT5cblx0XHRcdFx0b3B0aW9uID0gbmV3IExheWVyXG5cdFx0XHRcdFx0d2lkdGg6IG9wdGlvbnMud2lkdGgvQHRvZ2dsZU9wdGlvbnMubGVuZ3RoXG5cdFx0XHRcdFx0aGVpZ2h0OiBAdG9nZ2xlQ29udGFpbmVyLmhlaWdodFxuXHRcdFx0XHRcdHBhcmVudDogQHRvZ2dsZUNvbnRhaW5lclxuXHRcdFx0XHRcdGh0bWw6IEB0b2dnbGVPcHRpb25zW2ldXG5cdFx0XHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdFx0XHR4OiBvcHRpb25zLndpZHRoL0B0b2dnbGVPcHRpb25zLmxlbmd0aCppXG5cdFx0XHRcdFx0bmFtZTogQHRvZ2dsZU9wdGlvbnNbaV1cblx0XHRcdFx0b3B0aW9uLnN0eWxlID0gQG9wdGlvblN0eWxlXG5cblx0XHRcdFx0b3B0aW9uLm9uQ2xpY2sgKGV2ZW50LCBsYXllcikgPT5cblx0XHRcdFx0XHRpZiBAYWN0aXZlT3B0aW9uICE9IG9wdGlvbi5uYW1lXG5cdFx0XHRcdFx0XHRAYWN0aXZlT3B0aW9uID0gb3B0aW9uLm5hbWVcblx0XHRcdFx0XHRcdEB1cGRhdGVUb2dnbGVPcHRpb25zKClcblx0XHRcdFx0XHRcdEBjaGFuZ2VDYWxsYmFjaz8ob3B0aW9uLm5hbWUpXG5cblx0XHRAdXBkYXRlVG9nZ2xlT3B0aW9ucygpXG5cblx0Z2V0QWN0aXZlVG9nZ2xlOiAtPlxuXHRcdHJldHVybiBAYWN0aXZlT3B0aW9uXG5cblx0b25DaGFuZ2U6IChvcHQpIC0+XG5cdFx0QGNoYW5nZUNhbGxiYWNrID0gb3B0XG5cblx0dXBkYXRlVG9nZ2xlT3B0aW9uczogKCkgLT5cblx0XHRhbGxPcHRpb25zID0gQHRvZ2dsZUNvbnRhaW5lci5jaGlsZHJlblxuXHRcdGZvciBvcHRpb24sIGkgaW4gYWxsT3B0aW9uc1xuXHRcdFx0aWYgb3B0aW9uLm5hbWUgPT0gQGFjdGl2ZU9wdGlvblxuXHRcdFx0XHRvcHRpb24uY29sb3IgPSBAaW5hY3RpdmVDb2xvclxuXHRcdFx0XHRvcHRpb24uYmFja2dyb3VuZENvbG9yID0gQGFjdGl2ZUNvbG9yXG5cdFx0XHRcdG9wdGlvbi5ib3JkZXJDb2xvciA9IEBhY3RpdmVDb2xvclxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRvcHRpb24uY29sb3IgPSBAYWN0aXZlQ29sb3Jcblx0XHRcdFx0b3B0aW9uLmJhY2tncm91bmRDb2xvciA9IEBpbmFjdGl2ZUNvbG9yXG5cdFx0XHRcdG9wdGlvbi5ib3JkZXJDb2xvciA9IEBib3JkZXJDb2xvclxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FESUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDs7OztBRERsQixJQUFBOzs7QUFBTSxPQUFPLENBQUM7OztFQUNBLGdCQUFDLE9BQUQ7QUFDWixRQUFBO0lBQUEsd0NBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ0w7TUFBQSxLQUFBLEVBQU8sR0FBUDtNQUNBLE1BQUEsRUFBUSxFQURSO0tBREssQ0FBTjtJ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
