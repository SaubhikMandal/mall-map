document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    $('#select-city').bind('pageinit', function(event) {

        repository.get_all(function(tx, results) {

            var list = $('#cityList');

            list.append('<ul>');

            for (var i = 0; i < results.rows.length; i++) {
                list.append('<li>' + results.rows.item(i).data);
            }

            list.append('</ul>');
        });
    }); 

    repository.initialize_db();
}
