$(document).ready(function () {
    // Listen for checkbox change event
    $('.form__check__input').change(function () {
        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // Change the background color of the parent div
            $(this).closest('.form__check').css('background-color', '#9947E2');
        } else {
            // Revert the background color of the parent div to the default
            $(this).closest('.form__check').css('background-color', '');
        }
    });
}); 