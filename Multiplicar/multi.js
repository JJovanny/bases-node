
const {tablas,listarTabla} = require('../Multiplicar/app');
const {argv} = require('../Config/yargs');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(res => console.log('multiplicacion exitosa'))
        .catch(err = console.log(err)); 
        break;

    case 'crear':
    tablas(argv.base, argv.limite).then(archivo => console.log(`archivo creado ${archivo}`))
    .catch(err => console.log(err));
        break;

    default: console.log('comando no reconocido');
        break;
}










