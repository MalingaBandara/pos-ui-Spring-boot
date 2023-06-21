
// save Customer Method
const createOrUpdateCustomer =  ()=> {

    // get salary data
    let salary = $( '#salary' ).val();

    // validate salary
      if ( !isNaN( salary ) ) {


          // create custom data using text filed data
              let customerData = {
                  name: $( '#name' ).val(),
                  address: $( '#address' ).val(),
                  salary: parseFloat( salary )
              }


                        // pass the customer data to API pos System
                            $.ajax ({

                                    url: 'http://localhost:8001/api/v1/customers',
                                    data: JSON.stringify( customerData ),
                                    contentType: 'application/json',
                                    method: 'POST',
                                    success: (response)=>{
                                        console.log(response);
                                    },
                                    error: (error)=>{
                                        console.error( 'This is an Error', error );
                                    }
                            });

      } else{
          alert( 'please insert a valid number' );
      }

}