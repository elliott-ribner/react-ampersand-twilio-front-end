import Collection from 'ampersand-rest-collection'
import Convo from './convo'

export default Collection.extend({
  model: Convo,
  create(defaultResponse, phoneNumber, owner) {
    let myModel = new Convo({defaultResponse, phoneNumber, owner});
    return myModel
  }
});

