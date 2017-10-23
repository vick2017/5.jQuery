
// Check Off Specific Todos By Clicking
$("#list").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete
    $("ul").on('click', "span", function(event){
        alert("deleting to do")
        $(this).parent().fadeOut(1000, function(){
            $(this).remove();});

            //delete effect of propogation from span->li->ul->div->body
            event.stopPropagation();});

//add new todo
// Select text box->$("input[type=text]") or $("#newTodo")

$("#newTodo").keypress(function(event){

    //grab enter stroke
    if(event.which===13){

    //store value inside text box when enter is hit!!!
    var newTodo= $(this).val();
    $(this).val("");

    // create a new li using the text saved in newTodo
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ newTodo +"</li>");
    }
})


$(".fa-plus").click(function(){
    $("#newTodo").fadeToggle();
})