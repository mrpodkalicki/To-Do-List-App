class List{
    constructor(name=`List created ${date}`,date){
        this.name=name;
        this.date=date;
    };
    show(){
        return console.log(`${this.name}:${this.date}`)
    };
    
}

class Task{
    constructor(number,name,date){
        List.call(this,name,date)
        this.number=number;
    }
}

const main=()=>{
    var date = new Date();
    window.alert("Hi, it's to do apps. Press ok to continue.");
    let run=true;
    const firstListName=prompt("Please give name for List")
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    let ListCreatedDate = `${day}-${month}-${year}`;
    const listOne = new List(firstListName, ListCreatedDate);
    console.log(listOne.show());

    while(run==true){
        let count=1;
        const action = parseInt(prompt("Please choose action.1-add task  2-delete task 0-exit"),10);
        switch(action){
            case 1: 
                const day=date.getDate();
                const month = date.getMonth();
                const year=date.getFullYear();
                let ListCreatedDate=`${day}-${month}-${year}`
                const contentTask = prompt("Give a task");
                const task = new Task(count, contentTask, ListCreatedDate);
                console.log(task.show());
                    
                break;
            case 0:
                run=false;
                break;

                
        }
    }

}
main()