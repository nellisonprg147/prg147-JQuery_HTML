$(document).ready(function () {

    $("#buttonOne").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
    });
    $("#buttonTwo").click(function () {
        var toAdd = $("input[name=checkListItemTwo]").val();
        $(".listTwo").append('<div class="item">' + toAdd + '</div>');
    });
    $("#buttonThree").click(function () {
        var toAdd = $("input[name=checkListItemThree]").val();
        $(".listThree").append('<div class="item">' + toAdd + '</div>');
    });

    $("#buttonOne").bind("click", function() {
        $("input[type=text], textarea").val("");
    });

    $("#buttonTwo").bind("click", function() {
        $("input[type=text], textarea").val("");
    });

    $("#buttonThree").bind("click", function() {
        $("input[type=text], textarea").val("");
    });

    $(document).on("click",".item",function () {
        $(this).remove()

    });





});