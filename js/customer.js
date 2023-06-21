
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
                                        toastr.success('Successfully Created.') // error, info, warning
                                    },
                                    error: (error)=>{
                                        console.error( 'This is an Error', error );
                                        toastr.error('Error.') // error, info, warning
                                    }
                            });

      } else{
          alert( 'please insert a valid number' );
      }

}


// Load all customer data
const loadData =  ()=> {

    // Get the customer data in API pos System
    $.ajax ({

        url: 'http://localhost:8001/api/v1/customers/list?page=0&size=10&searchText=',
        contentType: 'application/json',
        method: 'GET',
        success: (response)=>{
            console.log(response);
        },
        error: (error)=>{
            console.error( 'This is an Error', error );
            toastr.error('Error.') // error, info, warning
        }
    });

}