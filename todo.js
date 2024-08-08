
let taskname = document.querySelector("#taskname");
let add = document.querySelector('#add');
let tasklist = document.querySelector("#tasklist");
let id=1;
let tasks=[];

taskname.addEventListener('keypress',function(e){
 if(e.key=="Enter"){
  let obj = {};
  obj.title = taskname.value;
  obj.status = 'Pending';
  obj.id = id;
  id++;
  tasks.push(obj);
  addDom(obj);
  taskname.value = "";
  console.log(obj);
  console.log(tasks);

 }
})

function addDom(task){
  let taskdiv = document.createElement('div');
  //taskdiv.setAttribute('id',task.id);
  let span = document.createElement('span');
  span.innerText = task.title;
  let ckb = document.createElement('input');
  ckb.setAttribute('type','checkbox');

  ckb.addEventListener('click',function(){
    console.log(ckb.checked); 
    let newstatus= "";
    if(ckb.checked){
        newstatus = "Completed";
        span.style.textDecoration = "line-through";
    }
    else{
      newstatus = "Pending";
      span.style.textDecoration = "none";
    }

  tasks = tasks.map((item)=>{
       if(item.id ==task.id)
           item.status = newstatus;
      return item;
  })
  console.log(tasks);
})

let delbtn = document.createElement("button");
delbtn.innerText = "DEL";
delbtn.addEventListener('click',function(){
  taskdiv.remove();
  tasks = tasks.filter(item=>{
    if(item.id!=task.id)
      return true;
  })
  console.log(tasks);
})



 
  taskdiv.append(span);
  taskdiv.append(ckb);
  taskdiv.append(delbtn);
  tasklist.append(taskdiv);
}

