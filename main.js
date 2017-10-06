$(function () {
    var $list = $(".bl-list");
    var $remainingList = $(".remaining-elements");
    var $buyingList = $(".buying-elements");
    var ONE_ROW_HTML = $(".one-row-template").html();
    var PR_LBL_ELEM_HTML = $(".product-label-elem").html();

    function addItem(title){
        var $node = $(ONE_ROW_HTML);
        var $span = $(PR_LBL_ELEM_HTML);
        var quantity = 1;
        var $quantity_label = $node.find(".bl-label");

        $node.find(".bl-product").text(title);
        $span.find(".title").text(title);

        $node.find(".bl-plus").click(function () {
            quantity += 1;
            if(quantity>=1)
                $node.find(".bl-minus").css('background-color','#FF0000');
            $quantity_label.text(quantity);
            $span.find(".orange").text(quantity);
        });

        $node.find(".bl-minus").click(function () {
            if(quantity>1){
                quantity -= 1;
                if(quantity==1)
                    $node.find(".bl-minus").css('background-color','#ef9e9e');
                $quantity_label.text(quantity);
                $span.find(".orange").text(quantity);
            }
        });

        $node.find(".bl-delete").click(function () {
            $node.hide();
            $span.hide();
        });

        $node.find(".bl-buy").click(function () {
            $node.addClass("is-bought");
            $node.find(".bl-label").addClass("single-label");
            $node.find(".bl-count").addClass("single-label");
            $buyingList.append($span);
        });

        $node.find(".bl-unbuy").click(function () {
            $node.removeClass("is-bought");
            $node.find(".bl-label").removeClass("single-label");
            $node.find(".bl-count").removeClass("single-label");
            $remainingList.append($span);
        });

        $node.find(".bl-product").click(function () {
            if(!($node.hasClass("is-bought"))){
                $node.find(".bl-product").hide();
                $node.find(".edit").show();
                $node.find(".edit").focus();
                $node.find(".edit").val(title);
            }
        });

        $node.find(".edit").focusout(function () {
            $node.find(".bl-product").show();
            $node.find(".edit").hide();

            title = $node.find(".edit").val();
            $node.find(".bl-product").text(title);
            $span.find(".title").text(title);
        });

        $node.find(".one-row-template.bl-bought").click(function () {
            $node.find(".bl-buttons.bl-bought").classList.add(" bought-elem");
            $node.find(".bl-buttons.bl-bought").className.add(" bought-elem");
        });

        $list.append($node);
        $remainingList.append($span);

    }

    addItem("Помідори");
    addItem("Яблуки");
    addItem("Сир");

    var $new_input = $(".input-name").bind("enterKey",function(e){
        var new_name = $new_input.val();
        if(new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    });
    $(".button-add").click(function () {
        var new_name = $new_input.val();
        if(new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    });

    $new_input.keyup(function (e) {
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });

});