// Immediatly invoked funcion expression (IIFE)


(function chai() {
    //named iifee
    console.log(`DB conncted`);
})();

(
    (name)=>{
        //UnNammed ifee
        console.log(`db connected ${name}` );
    }
)("danish")