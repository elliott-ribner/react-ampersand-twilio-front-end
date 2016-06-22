import Model from 'ampersand-model';
import xhr from 'xhr';
import app from '../app'
import ConvosCollection from './convos-collection';

export default Model.extend({
  props: {
    _id: 'string',
    email: 'string',
    token: 'string'
  },
  collections: {
    convos: ConvosCollection
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
        console.log('Error occured', err);
      } else {
        let responseBody = JSON.parse(body);
        oldAttributes.token = responseBody.token;
        oldAttributes.email = attributes.email;
        this.set(oldAttributes);
        console.log('Success: token returned and stored');
      }
    }.bind(this));
  },
  login(attributes) {
    const oldAttributes = this.getAttributes({props: true, session: false});
    let  loginObject = JSON.stringify(attributes)
    xhr({
      url: 'http://localhost:4000/api/authenticate',
      body: loginObject,
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    }, function(err, req, body) {
      if (err) {
        return console.log('Error occured', err)
      } 
      let responseBody = JSON.parse(body);
      if (responseBody.success) {
        oldAttributes.token = responseBody.token;
        oldAttributes.email = attributes.email;
        this.set(oldAttributes);
        console.log('login successful - ');
        return responseBody;
      } else {
        return responseBody;
      }
    }.bind(this));
  }
})