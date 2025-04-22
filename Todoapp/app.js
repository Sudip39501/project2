let todo = [];
let oparation = prompt("Enter the operation you want to perform :");
 while(oparation != 'quit'){
    if(oparation == 'list'){
        console.log('--------------');
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log('--------------');
    }
    else if(oparation == 'add'){
        task = prompt("Enter the task :");
        todo.push(task);
        console.log("Task added succesfully");
    }
    else if(oparation == 'remove'){
        let index = prompt("Write index of task you want to remove ");
        todo.splice(index,1);

    }
    else{
        console.log("wrong command you type here");
    }
    oparation = prompt("Enter the operation you want to perform :");
 }
 console.log("Your are quiting");