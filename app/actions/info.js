import Action from 'candycane/dist/http/action';

export default class extends Action {
  data() {
    return {
      'request': this.request.body,
    };
  }
}
