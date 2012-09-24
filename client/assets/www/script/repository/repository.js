var db;

var repository = {

    /*
     * @method database initialization 
     */
    initialize_db: function() {

        db = window.openDatabase("Database", "1.0", "Mall Map", 200000);
        db.transaction(repository.create_schema, repository.db_error, repository.db_success);
    },

    /*
     * @method creates schema
     * @param tx transaction
     */
    create_schema: function(tx) {

        tx.executeSql('DROP TABLE IF EXISTS MallMap');
        tx.executeSql('CREATE TABLE IF NOT EXISTS MallMap (id unique, data)');

        tx.executeSql('INSERT INTO MallMap (id, data) VALUES (1, "Omsk")');
        tx.executeSql('INSERT INTO MallMap (id, data) VALUES (2, "Ekaterinburg")');
        tx.executeSql('INSERT INTO MallMap (id, data) VALUES (3, "Kramatorsk")');
    },

    /*
     * @method executes on database error
     * @param tx transaction
     * @param err error message
     */
    db_error: function(tx, err) {

        alert("Error processing SQL: " + err);
    },

    /*
     * @method executes on database success
     */
    db_success: function() {

    },

    /*
     * @method gets all entities from the table
     * @param onSuccess function that will be exexuted on query success, must accept two parameters: tx, results.
     * @return 
     */
    get_all: function(onSuccess) {

        db.transaction(function(tx) {

            tx.executeSql('SELECT * FROM MallMap', [], onSuccess, repository.db_error);
        },
        repository.db_error);
    },
};
