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
        console.log('no prob');
        //set it here
        console.log(body);
      }
    });

  }
})