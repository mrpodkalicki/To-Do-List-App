
class List{
    constructor(name,date){
        this.name=name;
        this.date=date;
        this.container=[];

    };

    static createTask(content,number,date){
        const task = {
            number: number,
            content: content,
            date:date
        };
        return task
    }
   
    addTask(content){
        const number = this.container.length + 1;
        const dateOfCreated=date();

        const task = List.createTask(content, number, dateOfCreated);
        this.container.push(task);  
    };
    deleteTask(index){
        delete this.container[index-1]
        const list=this.container;
        let newIndex=1;
        list.map(x => { x.number = newIndex, newIndex++})
    };
    dateModifying(index,newDate){
        const list = this.container;
        console.log(typeof (newDate))
        console.log(list[index].date)
        list[index].date = newDate;
    };
    showName(){
        console.log(`${this.name}:${this.date}`)   
    };
    showList(){
        this.container.forEach(x=>console.log(x.number,x.content,x.date))
    };
    taskDone(index){

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
        const action = parseInt(prompt("Please choose action.1-add task  2-delete task 3-modifying of task date  4-mark done task 0-exit"),10);
        switch(action){
            case 1: 
                const contentTask = prompt("Give a task");
                listOne.showName()
                listOne.addTask(contentTask);
                listOne.showList();
                break;
            case 2:
                const taskIndex=parseInt(prompt("Choose number task"));
                listOne.deleteTask(taskIndex);
                listOne.showName()
                listOne.showList();
                break;
            case 3:
                const taskIndexMod = parseInt(prompt("Choose number task"));
                const newDate=prompt("Give newDate");
                listOne.dateModifying(taskIndexMod,newDate)
                listOne.showName()
                listOne.showList();
                break;
            case 4:
                const taskIndexMod = parseInt(prompt("Choose number task"));
                break
            case 0:
                run=false;
                break;

                
        }
        
    }

}
main()