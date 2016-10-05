
    function myFunction(){
        var data={};
        
        var first = document.getElementById('first_name');
        data.first_name=first.value;
        var second = document.getElementById('last_name');
        data.last_name = second.value;
        var mail = document.getElementById('email');
        data.email = mail.value;
        var pass = document.getElementById('password');
        data.password = pass.value;
        var mob = document.getElementById('phone');
        data.phone = mob.value;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3406/registration",
           "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "processData": false,
            "data": JSON.stringify(data),
        }


        $.ajax(settings).done(function (response) {
            alert(JSON.stringify(response));
        });
        //window.location.href ="volunteerregistration.html?role:" +role;
    }