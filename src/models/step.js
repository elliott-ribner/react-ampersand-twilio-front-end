import Model from 'ampersand-model'
import xhr from 'xhr'

export default Model.extend({
  props: {
    name: 'string',
    body: 'string',
    expectedResponse: 'string'
  }
})