import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`list`)
export default class extends Action {
  data() {
    const bookshelf = this.app.make(`store`);
    const List = bookshelf.model(`list`);

    const id = this.request.params.id;
    const title = this.request.body.data.attributes.title;

    return List.where({id}).fetch()
      .then((list) => {
        list.set({title});

        return list.save();
      });
  }
}
