function x(){
    let a=780;
    function y(){
        let a=850;
        function z(){
            let a=256;
            function d(){
                console.log(a)
            }
            d()
        }
        z()
    }
    y()
}
x();