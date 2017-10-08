let data:number = 100;
let str:string = "Data From DataBase....!";
let flag:boolean = true;

function fun_one(arg1:number,arg2:number){
    return fun_two(arg1,arg2);
}

function fun_two(arg1,arg2){
    return arg1+arg2;
}