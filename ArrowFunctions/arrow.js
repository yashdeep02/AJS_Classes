/*
var my_fun = function () {
  return "Welcome to Anonymous Function !";
};

document.write(my_fun());*/
/*
var my_fun = ()=> document.write("Welcome to Arrow/lamda/anony,ous function !");
my_fun();


var my_fun = (x:number)=>{
    x+=100;
    document.write("<h1>"+x+"</h1>");
}
my_fun(100);



var my_fun = (x)=>{
    if(typeof x == "number"){
        document.write("Number"+"<br>");
    }else if(typeof x == "string"){
        document.write("String Data"+"<br>");
    }else if(typeof x == "boolean"){
        document.write("Boolean Data");
    }
}


my_fun(100);
my_fun("Hello");
my_fun(true);

*/
function my_fun(arg1, arg2) {
    document.write(arg1);
    document.write(arg2);
}
//my_fun(100);
my_fun(100, 200);
