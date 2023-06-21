
// save Customer Method
const createOrUpdateCustomer =  ()=> {

    // get salary data
    let salary = $( '#salary' ).val();

    // validate salary
      if ( !isNaN( salary ) ) {


          // create custom data using text filed data
              let cutomerData = {
                  name: $( '#name' ).val(),
                  address: $( '#salary' ).val(),
                  salary: parseFloat( salary )
              }

              console.log( cutomerData ); // print the data

      } else{
          alert( 'please insert a valid number' );
      }

}