$(document).ready(function(){

    $(".devour").on('click', function(){
        var id = $(this).data('id')
        var newState = {
            devoured: 1
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newState
        }).then(function(){
            console.log("updated")
            location.reload(true);
        }
        )

    })








})