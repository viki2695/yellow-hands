
    function myFunction(){
        var data={};
        
        var uname = document.getElementById('email');
        data.first_name=first.value;
        var pass = document.getElementById('password');
        data.last_name = second.value;
        
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