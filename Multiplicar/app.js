const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
    
        let multi = base * i;
    
   console.log(`${base} * ${i} = ${multi} `);
    
    }

}


let tablas = (num, limite = 10) => { 

return new Promise( (resolve, reject) => {

if(!Number(num)){ 
reject('sorry, only number');
return;
}
    for (let i = 1; i <= limite; i++) {
    
        let multi = num * i;
    
    data += `${num} * ${i} = ${multi} `;
    
    }

    fs.writeFile(`tablas/tabla-${num}.txt`,data, (err) => {
    
        if(err) reject(err)
        else
        resolve(`tabla-${num}.txt`);
        
        });
    
    


});

}


module.exports = {tablas, listarTabla};
   