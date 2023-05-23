function validate() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.forms["myform"]["name"].value;
    if (name == "") {
        alert("Please enter the name");
        return false;
    }else if(!regName.test(name)){
        alert('Enter First and Last name');
        return false;
    }

    var email = document.forms["myform"]["email"].value;
    if (email == "") {
        alert("Please enter the email");
        return false;
    } else {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        var x = re.test(email);
        if (x) {
        } else {
            alert("Email id not in correct format");
            return false;
        }
    }

    var comment = document.forms["myform"]["comment"].value;
    if (comment.length > 150) {
        alert("the Comment must be below 150 characters");
        return false;
    } else if (comment.length < 1) {
        alert("You must type something");
        return false;
    }
}