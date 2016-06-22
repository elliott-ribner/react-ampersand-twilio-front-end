import Model from 'ampersand-model'
import StepCollection from './step-collection'
export default Model.extend({
  props: {
    id: 'number',
    owner: 'string',
    code: 'string',
    phoneNumber: 'string',
    defaultResponse: 'string'
  },
  collections: {
    steps: StepCollection
  }
})