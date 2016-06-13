import Model from 'ampersand-model';
import xhr from 'xhr';
import app from '../app'

export default Model.extend({
  props: {
    _id: 'string',
    email: 'string',
    token: 'string'
  },
  register(attributes) {
    const oldAttributes = this.getAttributes({props: true, session: false})
    let myObject = JSON.stringify(attributes)
    xhr({
      url: "http://localhost:4000/api/newuser",
      body: myObject,
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    }, function(err, req, body){
      if (err) {
        console.log('hello')
        console.log(err);
      } else {
        let responseBody = JSON.parse(body);
        oldAttributes.token = responseBody.token;
        oldAttributes.email = attributes.email;
        this.set(oldAttributes);
        console.log('token returned and stored');
      }
    }.bind(this));
  }
})