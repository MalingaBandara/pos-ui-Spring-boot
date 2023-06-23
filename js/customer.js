
let publicId = undefined; //  undefined means null value

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

                url = 'http://localhost:8001/api/v1/customers'; // default url
                method = 'POST';  // default method

                    // check the method:  if 'publicID' variable has a value the method is 'Update' (PUT)
                    if ( publicId ) {
                        url = 'http://localhost:8001/api/v1/customers?id=' + publicId;
                        method = 'PUT'
                    }

                            // pass the customer data to API pos System
                                $.ajax ({

                                        url: url,
                                        data: JSON.stringify( customerData ),
                                        contentType: 'application/json',
                                        method:  method,
                                        success: (response)=>{
                                            console.log(response);
                                            toastr.success('Successfully..!') // error, info, warning

                                                publicId = undefined // remove value of publicId variable (null)
                                                    $( '#name' ).val( '' ); // remove text in text field
                                                    $( '#address' ).val( '' ); // remove text in text field
                                                    $( '#salary' ).val( 0 ); // remove text in text field

                                                $( '#saveOrUpdateButton' ).text( 'Save Customer' ); // reset button

                                            loadData( page, size ); // load table data

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


let page = 0;
let size = 10;


// Load all customer data
const loadData =  ( page, size )=> {

    document.getElementById( 'loader' ).style.display= 'flex'; // show Loading Effect

    // Get the customer data in API pos System
    $.ajax ({

        url: 'http://localhost:8001/api/v1/customers/list?page=0&size=10&searchText=',
        contentType: 'application/json',
        method: 'GET',
        success: (response)=>{
            console.log(response);

           /*// set data into table view
                    for ( let tempData of response.data.list ) {

                        let tBody = document.getElementById( 't-body' );
                        let row = tBody.insertRow();

                            let cel1 = row.insertCell();
                            let cel2 = row.insertCell();
                            let cel3 = row.insertCell();
                            let cel4 = row.insertCell();
                            let cel5 = row.insertCell();
                            let cel6 = row.insertCell();

                            // add delete button into the row
                                let btn = document.createElement( 'button' );
                                btn.textContent = 'Delete';
                            cel6.appendChild( btn );

                                // add button action
                                btn.addEventListener( 'click', ()=> {
                                    alert( 'delete' );
                                } )

                            cel1.textContent = `${tempData.publicId}`;
                            cel2.textContent = `${tempData.name}`;
                            cel3.textContent = `${tempData.address}`;
                            cel4.textContent = `${tempData.salary}`;
                            cel5.textContent = `${tempData.activeState}`;


                    }*/

                    // set data into table view
                    let data = response.data.list;

                        // display all inside 'data' list
                        displayData( data );

                //add pagination
                /*$( '#pagination-context' ).pagination({

                   dataSource: response.data.dataCount,
                    pageSize: size,
                    pageNumber: page,
                    callback: function ( data, pagination ) {

                       page = pagination.pageNumber;
                       loadData( page, size )

                    }

                });*/



            document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
        },
        error: (error)=>{
            document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
            console.error( 'This is an Error', error );
            toastr.error('Error.') // error, info, warning
        }
    });

}


// method for load data
function displayData ( data) {

    $( '#t-body' ).empty(); // refresh table body (fetch with API DB)

    data.forEach( (record) => {

        let btnDelete = $('<button>').text( 'Delete Customer' ); // button for delete
        btnDelete.addClass( 'btn' ); //add css class
        btnDelete.addClass( 'btn-danger' ); //add css class
        btnDelete.addClass( 'btn-sm' ); //add css class

        let btnUpdate = $('<button>').text( 'Update Customer' ); // button for Update
        btnUpdate.addClass( 'btn' ); //add css class
        btnUpdate.addClass( 'btn-warning' ); //add css class
        btnUpdate.addClass( 'btn-sm' ); //add css class

        // delete button action
        btnDelete.click ( ()=> {
            if ( confirm( 'Are you suer?' ) ){
                    deleteCustomer( record.publicId );
            }
        } )

        // update button action
        btnUpdate.click ( ()=> {
            setDataForUpdateCustomer( record );
        } )

        let row = $( '<tr>' ); // row

        let cell1 = $('<td>').text( record.publicId );  // publicId cell
        let cell2 = $('<td>').text( record.name );     // Name cell
        let cell3 = $('<td>').text( record.address ); // Address cell
        let cell4 = $('<td>').text( record.salary ); // Salary cell
        let cell5 = $('<td>').text( record.activeState ); // Active State cell
        let cell6 = $('<td>').append( btnDelete ) // Delete Button cell
        let cell7 = $('<td>').append( btnUpdate ) // Update Button cell

        row.append( cell1, cell2, cell3, cell4, cell5, cell6, cell7 ); // append cells into the row

        $( '#t-body' ).append( row ); // append row to the table


    } )
}


function deleteCustomer (id) {

    document.getElementById( 'loader' ).style.display= 'flex'; // show Loading Effect

    // delete the customer data to API pos System
    $.ajax ({

        url: 'http://localhost:8001/api/v1/customers?id=' + id ,
        contentType: 'application/json',
        method: 'DELETE',
        success: (response)=>{
            toastr.success('Successfully Deleted.') // error, info, warning
                loadData( page , size ) // load data
        },
        error: (error)=>{
            document.getElementById( 'loader' ).style.display= 'none'; // hide Loading Effect
            console.error( 'This is an Error', error );
            toastr.error('Error.') // error, info, warning
        }
    });

}




function setDataForUpdateCustomer (data) {

    publicId = data.publicId;

    let btn = $( '#saveOrUpdateButton' ); // catch Save Customer Button

        btn.removeClass( 'btn-primary' ); // remove button style ( Remove Save Customer button style )
        btn.addClass( 'btn-success' ); // Add button style ( Add Save Customer button style )
        btn.text ( 'Update Custom : (' + data.publicId + ')' );  // Add button text

     // set values into text field
       $( '#name' ).val( data.name );
       $( '#address' ).val( data.address );
       $( '#salary' ).val( data.salary );


}