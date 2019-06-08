$(function(){
        $('#js-shopping-list-form').submit(function(e){
            event.preventDefault();
            const item = $(this).find('input').val();//grab the content within the input when the form submits
            $('#shopping-list-entry').val("");//empty out the input field
            //append the new item to the list
            $('ul').append(
                `<li><span class="shopping-item"> ${item} </span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle"><span class="button-label">check</span></button>
                <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
            )
        })
        //toggle between checked and unchecked 
        $('ul').on('click', 'button:first-child', function(e){
        $(this).closest('li').children().first().toggleClass('shopping-item__checked');
        })

        //delete an item
        $('ul').on('click', 'button:nth-child(2)',function(e){
        $(this).closest('li').remove();
    })
   })