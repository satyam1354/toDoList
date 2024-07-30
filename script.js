
let taskname = document.querySelector("#taskname");
let tasklist = document.querySelector("#tasklist");
  let task=[]

taskname.addEventListener('keypress',function(e){
 if(e.key=="Enter"){
     let obj={};
     obj.title = taskname.value;
     obj.title = taskname.value;
     obj.id = taskname.id;
    task.push(taskname.value); 
    console.log(task)
    addDom();
    taskname.value="";
 }
})

function addDom(){
 // let li = document.createElement('li');
 // li.innerText = taskname.value;
 // tasklist.append(li);
  let taskdiv = document.createElement("div");
  let span = document.createElement("span");
   span.innerText = task.title;//taskname.value


}