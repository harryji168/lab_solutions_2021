$('document').ready(() => {
    //#region lab 1

    $('.shape').on('mouseover', event => {
        $(event.currentTarget).addClass('highlight');
    });
    $('.shape').on('mouseleave', event => {
        $(event.currentTarget).removeClass('highlight');
    });

    $('.shape').on('click', event => {
        className = event.currentTarget.className;
        if (className.includes('small')) {
            $(event.currentTarget).hide();
        } else if (className.includes('medium')) {
            $(event.currentTarget).removeClass('medium').addClass('small');
        } else {
            $(event.currentTarget).removeClass('large').addClass('medium');
        }
    });
    //#endregion

    //#region lab 2

    $('tbody').prepend('<tr><td>0</td><td>-</td></tr>');

    // When the form's submit button is clicked, append the text input's current value to the form message.
    // $('#form-1').on('submit', (function () {
    //     $('#form-message').append(
    //         $(this)
    //             .find('input[type=text]')
    //             .val()
    //     );
    // }));

    $('#button-1').on('click', () => {
        $("#green-container").toggle();
    });
    $('#button-2').on('click', () => {
        $("#button-message").fadeOut("slow");
    });
    $('#button-3').on('click', () => {
        $("#button-message").fadeIn("slow");
    });
    $('#button-4').on('click', () => {
        $("#green-container").slideUp("slow");
    });

    //#endregion


    //#region lab 3
    $(document).keydown(function (event) {
        if (event.key === "g") {
            $('.grey').toggle();
        }
        if (event.keyCode === 32) {
            $("#green-container").append('<div class="small blue circle shape"></div>');
        }
    });

    // Make the Form Message show the number of characters remaining
    // (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").

    // $('#form-1 > input[type=text]').on('input', function () {
    //     let remaining = 14 - $(this).val().length;
    //     $('#form-message').text(`${remaining} characters remaining`);
    // });

    // actually add the form validation, if you wish

    $('#form-1 > input[type=text]').attr('maxlength', 14);
    //#endregion

    //region lab 4

    $('#form-1').submit(function (e) {
        const color = $('#form-1 > input[type=text]').val();

        // If they enter an invalid color show them an alert message telling them,
        // "Entered color is not a valid option!"
        const validColors = ['red', 'blue', 'black', 'grey'];

        if (!validColors.includes(color)) {
            alert(`Entered colour, "${color}", is not a valid option!`);
        } else {
            // All shapes matching the given color should be removed.
            $(`.shape.${color}`).remove();
        }

        // Clear the input field.
        this.reset();
        /* 
        This really clears the entire form, but since the form only has one input,
        it is equivalent.
        */
        // or
        // $('#form-1 > input[type=text]').val('');
    });
    //endregion

    //#region lab 5

    $('#form-1 input[type=text]').on('input', () => {
        // $("#form-message").text($('#form-1 input[type=text]').val())
        $("#form-message").text($('#form-1 input[type=text]').val().split('').reverse().join(''));
    });

    $('#orange-container').on('click', e => {
        $('#orange-container .red').remove();
    });

    //#endregion

});