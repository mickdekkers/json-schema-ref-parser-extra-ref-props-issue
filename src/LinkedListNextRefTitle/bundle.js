const $RefParser = require('json-schema-ref-parser');
const parser = new $RefParser();
const fs = require('fs');

parser
    .bundle(__dirname + '/LinkedList.schema.json')
    .then((schema) => JSON.stringify(schema, null, 4))
    .then(
        (schema) =>
            new Promise((resolve, reject) =>
                fs.writeFile(
                    __dirname + '/LinkedList.bundled.schema.json',
                    schema,
                    'utf8',
                    (error) => (error ? reject(error) : resolve()),
                ),
            ),
    )
    .then(
        () => console.log('LinkedList with title on next ref bundled (valid)'),
        console.error,
    );
