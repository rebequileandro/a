"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Button = function Button(_ref) {
  var type = _ref.type,
    size = _ref.size,
    label = _ref.label,
    backgroundColor = _ref.backgroundColor,
    disabled = _ref.disabled,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    disabled: disabled,
    onClick: onClick,
    className: "btn-xnodui  btn-xnodui--".concat(size, " btn-xnodui--").concat(type ? type : "primary"),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, label);
};
var _default = exports["default"] = Button;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
var _Button = _interopRequireDefault(require(".src/atoms/Button/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
