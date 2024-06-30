  
        $(window).ready(function () {
            $.get('http://localhost:3000/search-suggestions').then(function(data){
               selectedItem = generateAutoComplete('#buy-search', {
                data, //fetch from API
                multiple: false,  onClick: function (selectedItem) {
                console.log('selected', selectedItem)
                const selectedData = data.find(item => item.id === selectedItem);
                if(selectedData){
                    userSearchValue.push({
                        id: selectedData.id,
                        label: selectedData.label
                    })
                    rerenderSelectedItems();
                }
                console.log('userSearchValue:', userSearchValue);
               ;
            }});
            let userSearchValue = [];    
            
            const searchBox = $('.search-box');
            const input = searchBox.find('input');            
            const results = searchBox.find('.results');
            const selectedItems = searchBox.find('.selected-items');   
            const recentSearch = $('.search-wrapper .recent-search');    
            const resultList =  results.find('ul');         
            //change input placeholder 
            input.attr('placeholder','Search suburb, postcode or state');
            let userInput = '';

          
            function generateRandomId(){
                const time = Date.now().toString(36);
                const num = Math.random().toString(36).substr(2, 5);;
                return time + num;
            }
           
            input.on('keyup', function (e) {
            userInput = e.target.value;
            const randomId = generateRandomId();
          
            resultList.append(`<div class="search-for" data-id="${randomId}">Search for: ${userInput}</div>`)            
            let searchFor = searchBox.find('.search-for'); 
            
            searchFor.on('click', function(){
                //if userInput is already in the UserInputValue array, it will not append or push into array
                if (!userSearchValue.find(item => item.label === userInput)){
            // selectedItems.append(`
            //  <div class="selected-item" data-id=${randomId}>
            //         ${userInput}
            //         <button class="delete-item">
            //             <svg class="CK__Icon--medium Pill__FatCross-sc-eiw3o3-0 hQjktV" viewBox="0 0 16 16" fill="none"
            //                 xmlns="http://www.w3.org/2000/svg">
            //                 <path fill-rule="evenodd" clip-rule="evenodd"
            //                     d="M13.854 2.854a.5.5 0 0 0-.708-.708L8 7.293 2.854 2.146a.5.5 0 0 0-.708.708L7.293 8l-5.147 5.146a.5.5 0 0 0 .708.708L8 8.707l5.146 5.147a.5.5 0 0 0 .708-.708L8.707 8l5.147-5.146Z"
            //                     fill="currentColor"></path>
            //             </svg>
            //         </button>
            //     </div> 
            // `)   
                userSearchValue.push({
                    id: randomId,
                    label: userInput
                });   
                console.log(userSearchValue); 
                
            }
            rerenderSelectedItems()      
            // deleteSearchFor()
            input.val('');
            results.hide();
            })           
        }) 
      
        function rerenderSelectedItems(){
            selectedItems.html('');  
            userSearchValue.forEach(item => {
                selectedItems.append(`
             <div class="selected-item" data-id=${item.id}>
                    ${item.label}
                    <button class="delete-item">
                        <svg class="CK__Icon--medium Pill__FatCross-sc-eiw3o3-0 hQjktV" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.854 2.854a.5.5 0 0 0-.708-.708L8 7.293 2.854 2.146a.5.5 0 0 0-.708.708L7.293 8l-5.147 5.146a.5.5 0 0 0 .708.708L8 8.707l5.146 5.147a.5.5 0 0 0 .708-.708L8.707 8l5.147-5.146Z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </div> 
            `)  
            });
            deleteSearchFor()
            
        }
        // delete user Input search for selection
        function deleteSearchFor(){                 
            const deletedItem = $('.delete-item');  
            deletedItem.on('click', function(e){
            event.stopPropagation();
            const selectedItem = $(this).parent();
            const dataId = selectedItem.data('id');
            const index = userSearchValue.findIndex(item => item.id === dataId);
            if(index !== -1){   
                userSearchValue.splice(index, 1);
                console.log("after delete" + userSearchValue);
                selectedItem.remove();
            }           
    })  
    }           
  
    
      
    //handle when user click outside the input    
     // Click handler to focus on input when click everywhere on search box
     searchBox.on('click', function(event) {
        event.stopPropagation();
        input.focus();
       if(input.is(':focus') && input.val().trim() === '' && userSearchValue.length === 0){
        recentSearch.show();
       }else{
        recentSearch.hide();
       }       
    });   

    input.on('input', function() {
    if (input.is(':focus') && input.val().trim() === '' && userSearchValue.length === 0) {
        recentSearch.show();
    } else {
        recentSearch.hide();
    }
});   
    // Blur handler to hide results and clear input value
    $(document).on('click', function(event) {
      //checks if there are no elements matching event.target that are descendants of .search-box.
        if (!searchBox.is(event.target) && searchBox.has(event.target).length === 0) {
            results.hide();
            recentSearch.hide(); // Hide .results element
            input.val(''); // Clear input value
        }
    });     
    })   
});
// {
//     "result": [
//       "repeat(1,10)",
//       {      
//           "country": "country()"      
         
//       }
//     ]
//   }
      