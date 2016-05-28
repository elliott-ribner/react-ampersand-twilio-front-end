import Model from 'ampersand-model';
import xhr from 'xhr';
import $ from 'jQuery';
export default Model.extend({
  props: {
    _id: 'string',
    email: 'string',
    token: 'string'
  },
  register(attributes) {
    xhr({
      url: "https://twlio-staging.herokuapp.com/api/newuser",
      body: attributes,
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    }, (err, req, body) => {
      if (err) {
        console.log(err);
      } else {
        console.log(body);
      }
    });


  }
})