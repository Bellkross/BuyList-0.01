$(function () {
    var $list = $(".bl-list");
    var ONE_ROW_HTML = $(".one-row-template").html();

    function addItem(title){
        var $node = $(ONE_ROW_HTML);
        var quantity = 1;
        var $quantity_label = $node.find(".bl-label");

        $node.find(".bl-product").text(title);

        $node.find(".bl-plus").click(function () {
            quantity += 1;
            $quantity_label.text(quantity);
        });

        //$node.find(".bl-minus").prop("disabled", true);

        $node.find(".bl-minus").click(function () {
            if(quantity>1){
                quantity -= 1;
                $quantity_label.text(quantity);
            }
        });

        $node.find(".bl-delete").click(function () {
            $node.hide();
        });

        $node.find(".bl-buy").click(function () {
            $node.addClass("is-bought");
        });

        $node.find(".bl-unbuy").click(function () {
            $node.removeClass("is-bought");
        });

        $node.find(".bl-product").click(function () {
            $node.find(".bl-product").hide();
            $node.find(".edit").show();
            $node.find(".edit").val(title);
        });

        $node.find(".edit").focusout(function () {
            $node.find(".bl-product").show();
            $node.find(".edit").hide();

            title = $node.find(".edit").val();
            $node.find(".bl-product").text(title);
        });

        $node.find(".one-row-template.bl-bought").click(function () {
            $node.find(".bl-buttons.bl-bought").classList.add(" bought-elem");
            $node.find(".bl-buttons.bl-bought").className.add(" bought-elem");
        });

        $list.append($node);

    }

    addItem("Помідри");
    addItem("Яблуки");
    addItem("Сир");

    var $new_input = $(".input-name");
    $(".button-add").click(function () {
        var new_name = $new_input.val();
        if(new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    });

});