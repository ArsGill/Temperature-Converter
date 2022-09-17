const cel = document.getElementById("celcius");
const fah = document.getElementById("fahrenheit");
const kel = document.getElementById("kelvin");


// for celcius to fahrenheit and kelvin
cel.addEventListener("input", function(){
        
       let c= this.value;
       let f= (c * 9/5)+32;
       let k= c + 273.15;
       if(!Number.isInteger(f))
       {
        f= f.toFixed(4);
       }
    
       fah.value=f;
       kel.value=k;

});


// For Fahrenheit to Celcus and kelvin
fah.addEventListener("input", function(){
        
    let f= this.value;
    let c= (f - 32) * 5/9;
    let k= (f - 32) * 5/9 + 273.15;
    if(!Number.isInteger(c))
       {
        c= c.toFixed(4);
       }   
       
    cel.value=c;
    kel.value=k;

});


/// for kelvin to fahrenheit and celcius

kel.addEventListener("input", function(){
        
    let k= this.value;
    let c= k - 273.15;
    let f= (k - 273.15) * 9/5 + 32;
    if(!Number.isInteger(c))
       {
        c= c.toFixed(4);
       }   
    cel.value=c;
    fah.value=f;

});










