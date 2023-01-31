$(document).ready(function() {
    const registerBtn = $("#register_btn");
    const hireBtn = $("#hire_btn");

    var registrationForm = $("#registration_form");
    var hiringForm = $("#hiring_form");

    registerBtn.on('click', function () {
        registerBtn.css('borderBottom', '3px solid #023246');
        hireBtn.css('border', 'none');

        registrationForm.css('transform', 'translateX(0%)');
        hiringForm.css('transform', 'translateX(101%)');
    });

    hireBtn.on('click', function () {
        hireBtn.css('borderBottom', '3px solid #023246');
        registerBtn.css('border', 'none');

        registrationForm.css('transform', 'translateX(101%)');
        hiringForm.css('transform', 'translateX(0%)');
    });
});