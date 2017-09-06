/*
interface my_interface{
    sub_one:string;
    sub_two:string;
    sub_three:string;
}

var impl_one:my_interface={
    sub_one:"AngularJS",
    sub_two:"NodeJS",
    sub_three:"MemSQL"
}

var impl_two:my_interface={
    sub_one:"Angular4",
    sub_two:"NodeJS",
    sub_three:"MongoDB"
};

document.write("<h1 style=color:red>"+
                impl_one.sub_one+
                "<==>"+impl_one.sub_two+
                "<==>"+impl_one.sub_three+"</h1>")

document.write("<h1 style=color:red>"+impl_two.sub_one+
    "<==>"+impl_two.sub_two+
    "<==>"+impl_two.sub_three+"</h1>")*/
var obj = {
    var_one: "d3",
    var_two: "reactJS",
    var_three: "underscoreJS"
};
console.log(obj.var_one + "..." + obj.var_two + "..." + obj.var_three);
