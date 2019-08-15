
class List{
    constructor(name,date){
        this.name=name;
        this.date=date;
        this.container=[];

    };

    static createTask(content,date,ifDone){
        const task = {
            number: 0,
            content: content,
            date:date,
            completed:ifDone
        };
        return task
    }
    addTask(content){
        const list = this.container;
        const dateOfCreated=date();
        const ifDone="no done"
        const task = List.createTask(content, dateOfCreated,ifDone);
        this.container.push(task);
        let newIndex = 1; 
        list.map(x => { x.number = newIndex, newIndex++ }) 
    };
    deleteTask(index){
        delete this.container[index-1]
        const list=this.container;
        let newIndex=1;
        list.map(x => { x.number = newIndex, newIndex++})
    };
    dateModifying(index,newDate){
        const list = this.container;
        list[index].date = newDate;
    };
    markTask(index){
        const list = this.container;
        list[index - 1].completed = list[index - 1].completed=="done"?"no done":"done"

    }
    showName(){
        console.log(`${this.name}:${this.date}`)   
    };
    showList(){
        this.container.forEach(x => console.log(x.number, x.content, x.date, x.completed))
        return this.container;
    };
    elementsList(){
        return this.container;
    }
    

}

const date = () => {
    var date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    day = day <= 10 ? '0'+ day : day;
    month=month<=10 ? '0'+month:month;
    hour = hour <= 10 ? '0' + hour : hour;
    minute = minute <= 10 ? '0' + minute : minute;
    second = second <= 10 ? '0' + second : second;
    const ListCreatedDate = `{(${hour}:${minute}:${second})-${day}.${month}.${year}}`;
    return ListCreatedDate

}

const main=()=>{
    window.alert("Hi, it's to do apps. Press ok to continue.");
    let run=true;
    let ListName=prompt("Please give name for List")
    ListName = ListName == "" ? "List created" : ListName;
    const dateOfCreatedList = date();
    const listOne = new List(ListName, dateOfCreatedList);
    listOne.showName()
    
    while(run==true){
        const action = parseInt(prompt("Please choose action.1-add a task  2-delete  a task 3-modifying of task date  4-mark as completed or unrealized a task 0-exit"),10);
        let list = listOne.elementsList();
        switch(action){
            case 1: 
                const contentTask = prompt("Give a task");
                listOne.showName()
                listOne.addTask(contentTask);
                listOne.showList();
                break;
            case 2:
                const taskIndex=parseInt(prompt("Choose number a task"));
                 list = listOne.elementsList();
                if (taskIndex <= list.length && taskIndex!=0){
                    listOne.deleteTask(taskIndex);
                    listOne.showName();
                    listOne.showList();
                }else{
                    window.alert("the task with this number doesn't exist");  
                }
                break;
                
            case 3:
                const taskIndexMod = parseInt(prompt("Choose number a  task"));
                 list = listOne.elementsList();
                if (taskIndexMod <= list.length && taskIndexMod != 0) {
                    const newDate=prompt("Give newDate");
                    listOne.dateModifying(taskIndexMod,newDate)
                    listOne.showName()
                    listOne.showList();
                }else {
                    window.alert("the task with this number doesn't exist");
                };
                break;
            case 4:
                const taskIndexdone = parseInt(prompt("Choose number a task"));
                 list = listOne.elementsList();
                if (taskIndexdone <= list.length && taskIndexdone != 0){
                    listOne.markTask(taskIndexdone);
                    listOne.showName();
                    listOne.showList();
                }else {
                    window.alert("the task with this number doesn't exist");
                };
                break
            case 0:
                run=false;
                break;

                
        }
        
    }

}
main()