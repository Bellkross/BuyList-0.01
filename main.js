$(function () {
    var $list = $(".bl-list");
    var ONE_ROW_HTML = $(".one-row-template").html();

    function addItem(title){
        var $node = $(ONE_ROW_HTML);

        var quantity = 1;
        var $quantity_label = $node.find(".bl-label");


        $node.find("bl-product").text(title);


        $node.find(".bl-plus").click(function () {
            quantity += 1;
            $quantity_label.text(quantity);
        });

        $node.find(".bl-minus").click(function () {
            if(quantity>1){
            quantity -= 1;
            $quantity_label.text(quantity);
            }
        });

        $node.find(".bl-delete").click(function () {
            $node.hide();
        });

        $list.append($node);

    }

    addItem("Помідри1");
    addItem("Помідри1");
    addItem("Помідри1");

    $node.find(".bl-product").click(function () {
        $nide.find(".bl-product").hide();
        $node.find(".edit").show();
        $node.find(".edit").val(title);
    })

    $node.find(".edit").focusout(function () {
        $node.find(".bl-product").show();
        $node.find(".edit").hide();

        title = $node.find(".edit").val();
        $node.find(".bl-product").text(title);
    })


    var $new_input = $(".new-item");

    $(".add-new").click(function(){
        var new_name = $new_input.val();
        if(new_name.trim()){
            addItem(new_name);

        }
    })
});