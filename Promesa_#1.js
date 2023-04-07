//esto es una promesa de javascript.

 const Comprar =  new Promise(function(resolve, reject){
  
    const hayPollo = buscarPollo();
    if (hayPollo) {
        resolve("Si hay pollo");

    } else {
        reject("No hay pollo");
    }
    });


Comprar
.then( ()=>{
    console.log("Calentar la parrilla para el asado")}
 ,error =>{
    console.log(error),
    console.log("Balimos madre")});
    


function buscarPollo(){
    let exist = getRandomInt(1,3);
    if(exist == 1){
        return true;   
    }else{
        return false;
    } 

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }





  