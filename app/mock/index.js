var mockServer =
    require('node-mock-server');

var path =
    require('path');



mockServer({

    restPath:
    path.join(__dirname,
        '/rest'),

    dirName:
    __dirname,

    title: 'Api mock server',

    version:
    2,

    urlBase:
    'http://localhost:9000',

    port: 9000,

    urlPath:
    '',


    headers: {

        'Global-Custom-Header':
        'Global-Custom-Header'

    },



    swaggerImport: {

        protocol:
        'http',

        authUser:
        undefined,

        authPass:
        undefined,

        host: 'petstore.swagger.io',

        port: 80,

        path: '/v2/swagger.json',

        dest: path.join(__dirname,
            '/mock/rest'),

        replacePathsStr:
        '/v2/{baseSiteId}',

        createErrorFile:
        true,

        createEmptyFile:
        true,

        overwriteExistingDescriptions:
        true

    }
});