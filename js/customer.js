
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


          document.getElementById( 'loader' ).style.display= 'flex'; // show Loading Effect

                        // pass the customer data to API pos System
                            $.ajax ({

                                    url: 'http://localhost:8001/api/v1/customers',
                                    data: JSON.stringify( customerData ),
                                    contentType: 'application/json',
                                    method: 'POST',
                                    success: (response)=>{
                                        console.log(response);
                                        toastr.success('Successfully Created.') // error, info, warning
                                            document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
                                    },
                                    error: (error)=>{
                                        document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
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

    document.getElementById( 'loader' ).style.display= 'flex'; // show Loading Effect

    // Get the customer data in API pos System
    $.ajax ({

        url: 'http://localhost:8001/api/v1/customers/list?page=0&size=10&searchText=',
        contentType: 'application/json',
        method: 'GET',
        success: (response)=>{
            console.log(response);
                document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
        },
        error: (error)=>{
            document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
            console.error( 'This is an Error', error );
            toastr.error('Error.') // error, info, warning
        }
    });

}