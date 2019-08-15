class List{
    constructor(name,date,){
        this.name=name;
        this.date=date;
        this.container=[];
    };
   
    addTask(content){
        this.content=content;
        console.log(this.container.length,"lenght")
        this.number = this.container.length+1;
        const task=`${this.number}.${this.content}:${this.date}`;
        this.container.push(task);
        return this.container
    
    }
    deleteTask(index){
        this.inex=index;
        
    }
    show(){
        console.log(`${this.name}:${this.date}`)

        console.log(this.container,"container")
    }
}

class Task extends List{
    constructor(number,name,date){
        super(name,date);
        this.number=number;
    }
}

const main=()=>{
    var date = new Date();
    window.alert("Hi, it's to do apps. Press ok to continue.");
    let run=true;
    let firstListName=prompt("Please give name for List")
    firstListName = firstListName == "" ? "List created:" : firstListName;
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    let ListCreatedDate = `${day}-${month}-${year}`;
    const listOne = new List(firstListName,ListCreatedDate);
    listOne.show();

    while(run==true){
        const action = parseInt(prompt("Please choose action.1-add task  2-delete task 0-exit"),10);
        switch(action){
            case 1: 
           
                const contentTask = prompt("Give a task");
                listOne.addTask(contentTask);
                listOne.show();

               
                break;
            case 0:
                run=false;
                break;

                
        }
        
    }

}
main()