const submit = document.getElementById("submit"); //assigns the submit button to a variable

//function to submit the inputs
submit.onclick = function submitbro() {
    let password_length = document.getElementById("number_input").value;
    password_length = Number(password_length);

    let include_lowercase = document.getElementById("radio1"); //assigns the radio button to a variable

    if (include_lowercase.checked == true) {
        include_lowercase = true;
    } else {
        include_lowercase = false;
    } //checks if the radio button is ticked or not so we use it in the actual function

    let include_uppercase = document.getElementById("radio2");

    if (include_uppercase.checked == true) {
        include_uppercase = true;
    } else {
        include_uppercase = false;
    }

    let include_numbers = document.getElementById("radio3");

    if (include_numbers.checked == true) {
        include_numbers = true;
    } else {
        include_numbers = false;
    }

    let include_symbols = document.getElementById("radio4");

    if (include_symbols.checked == true) {
        include_symbols = true;
    } else {
        include_symbols = false;
    }

    //the actual function to generate the password
    function generate_password(
        password_length,
        include_lowercase,
        include_uppercase,
        include_numbers,
        include_symbols
    ) {
        const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
        const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number_chars = "0123456789";
        const symbol_chars = "!@#$%^&*()_+-=";

        let allowed_chars = ""; //will add the chars to this string based on the buttons that are ticked
        let password = ""; //if this was just declared and not an empty string it would say undefnied + the actual password 

        allowed_chars += include_lowercase ? lowercase_chars : ""; //is include_lowercase true? if yes assign lowercase_chars to allowed_chars, if not assign empty string.
        allowed_chars += include_uppercase ? uppercase_chars : "";
        allowed_chars += include_numbers ? number_chars : "";
        allowed_chars += include_symbols ? symbol_chars : "";

        if (password_length <= 0) {
            return "password length must be at least 1";
        }
        if (allowed_chars.length === 0) {
            return "at least 1 set of characters needs to be selected";
        }
        for (let i = 0; i < password_length; i++) {

            //length is 1-60, will multiply with a float from 0 to 1 and round down then store the number in random_index
            const random_index = Math.floor(Math.random() * allowed_chars.length);

            //character from allowed_chars at the index number of random_index is stored into password
            password += allowed_chars[random_index];

        } //will do this from 0-60 times depending on the password_length

        return "Your password is: " + password; //might as well call it some voodoo magic, i did not think of this on my own sadly. google had to help
    }

    let password = document.getElementById("heading1");

    password.textContent = generate_password(
        password_length,
        include_lowercase,
        include_uppercase,
        include_numbers,
        include_symbols
    );
}
