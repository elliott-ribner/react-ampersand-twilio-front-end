import Collection from 'ampersand-rest-collection'
import Step from './step'

export default Collection.extend({
  model: Step,
  create(name,body,expectedResponse) {
    let myStep = new Step({name, body, expectedResponse});
    return myStep
  }
})