'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _action = require('candycane/dist/http/action');

var _action2 = _interopRequireDefault(_action);

var _candycaneJsonapiMapper = require('candycane-jsonapi-mapper');

var _candycaneJsonapiMapper2 = _interopRequireDefault(_candycaneJsonapiMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _default = (_dec = (0, _candycaneJsonapiMapper2.default)(`list`), _dec(_class = class _default extends _action2.default {
  data() {
    const id = this.request.params.id;
    const bookshelf = this.app.make(`store`);
    const List = bookshelf.model(`list`);

    return List.where({ id: id }).fetch({ withRelated: `reminders` });
  }

  after(list) {
    if (!list) {
      this.setStatus(404);
      return this.send({
        status: 404,
        message: `Resource not found`
      });
    }

    return list;
  }
}) || _class);

exports.default = _default;