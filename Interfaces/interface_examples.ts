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

/*interface inter_one{
    var_one:string;
}

interface  inter_two extends inter_one{
    var_two:string;
}

var obj:inter_two={
    var_one:"Hello_1",
    var_two:"Hello_2"
};

document.write(obj.var_one+"..."+obj.var_two);*/


interface inter_one{
    var_one:string;
}

interface inter_two{
    var_two:string;
}

interface inter_three extends inter_one,inter_two{
    var_three:string;
}

var obj:inter_three={
    var_one:"d3",
    var_two:"reactJS",
    var_three:"underscoreJS"
};

console.log(obj.var_one+"..."+obj.var_two+"..."+obj.var_three);

