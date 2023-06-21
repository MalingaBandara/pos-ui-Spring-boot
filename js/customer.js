
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

                    // set data into table view
                    for ( let tempData of response.data.list ) {

                        let tBody = document.getElementById( 't-body' );
                        let row = tBody.insertRow();

                            let cel1 = row.insertCell();
                            let cel2 = row.insertCell();
                            let cel3 = row.insertCell();
                            let cel4 = row.insertCell();
                            let cel5 = row.insertCell();
                            let cel6 = row.insertCell();

                            cel1.textContent = `${tempData.publicId}`;
                            cel2.textContent = `${tempData.name}`;
                            cel3.textContent = `${tempData.address}`;
                            cel4.textContent = `${tempData.salary}`;
                            cel5.textContent = `${tempData.activeState}`;
                            cel6.textContent = `<button class="btn btn-danger">Delete Customer</button>`;



                    }


            document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
        },
        error: (error)=>{
            document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
            console.error( 'This is an Error', error );
            toastr.error('Error.') // error, info, warning
        }
    });

}