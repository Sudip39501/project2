const student ={
    name : "sudip",
    age :21,
    object : this,
    greet1 : function(){
        const printthis = ()=>{
            console.log(this);
        }
        printthis();
    },
    greet2: function(){
        console.log(this);
        callback = () =>{
            console.log(this);
        }
        callback();
    },
    normal: function(){
        console.log(this);
    },
    arrow :()=>{
        console.log(this);
    }
}