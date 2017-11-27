    
function makeGrid(x, y) {

    $("table").empty();
    var y = $("#input_height").val();
    var x = $("#input_width").val();

    for (var rows = 0; rows < x; rows++) { 
     $("#pixel_canvas").append("<tr></tr>");
    };
    for (var columns = 0; columns < x; columns++) {
      $("tr").append("<td class='datatable'></td>");   
    };

    $("table tr td").click(function() {
    $(this).css('background', $(colorPicker).val());

    });
};
