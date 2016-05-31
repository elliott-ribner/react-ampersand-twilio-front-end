import Model from 'ampersand-model';
import xhr from 'xhr';
import $ from 'jquery';
//import qs from 'qs';

export default Model.extend({
  props: {
    _id: 'string',
    email: 'string',
    token: 'string'
  },
  register(attributes) {
    //query = qs.parse(query);
    xhr({
      url: "http://localhost:4000/api/newuser",
      body: attributes,
      method: 'POST',
      json: true
    }, function(err, req, body){
      console.log('hello')
      if (err) {
        console.log(err);
      } else {
        console.log(body);
      }
    });
   // $.ajax({
   //      url: "http://localhost:4000/api/newuser",
   //      type: "POST",
   //      data: attributes,
   //      dataType: "json",
   //      success: function (result) {
   //          switch (result) {
   //              case true:
                    
   //                  break;
   //              default:
   //                  console.log(result);
   //          }
   //      },
   //      error: function (xhr, ajaxOptions, thrownError) {
   //        alert(xhr.status);
   //        alert(thrownError);
   //      }
   //  });
   
  }
})