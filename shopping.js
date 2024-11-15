//FRIDAY UPDATE FINISH ADDING STARS RATING AND CART FUNCTIONS!!
//FRIDAY UPDATE FINISH ADDING STARS RATING AND CART FUNCTIONS!!
//FRIDAY UPDATE FINISH ADDING STARS RATING AND CART FUNCTIONS!!
let cartCount = 0;

// remove
let removeButtonHTML = "<span class='del'>Remove</span>";

// event buttons
$(document).ready(function() {
    // cart
    $(".add").on("click", function() {
        cartCount++; 
        
        if (cartCount > 0) {
            $("#empty").hide();
        }

        let itemName = $(this).attr("name");
        let itemID = $(this).attr("id");

        let cartLink = `<li class='cartItem' name='${itemID}'>${itemName} ${removeButtonHTML}</li>`;

        $("#cart").append(cartLink);

        $(this).hide();
    });

    // delegation / removing items
    $("#cart").on("click", ".del", function() {
        // parent list
        $(this).closest("li").remove();

        cartCount--;

        if (cartCount === 0) {
            $("#empty").show();
        }

        // need add button for flower
        let itemID = $(this).closest("li").attr("name");
        $("#" + itemID).show();
    });

    // stars
    $(".rating img").on("click", function() {
        // clicking for stars should work now
        let index = $(this).index();

        // all stars before clicking - staron
        $(this).prevAll().addBack().attr("src", "staron.gif");

        // staroff
        $(this).nextAll().attr("src", "staroff.gif");
    });
});
