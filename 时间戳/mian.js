//获取时间戳
var timestamp = (new Date()).valueOf();
document.getElementById("nowTime").innerHTML = "当前时间戳："+timestamp;



const form = document.getElementById("task-form")
const taskInput = document.createElement("task")
const filterInput = document.createElement("filter")
const removeBtn = document.querySelector(".delete-item secondary-content")
const clearBtn = document.querySelector(".clear-tasks btn black")
const tasksUl = document.querySelector(".collection")

//开始监听
startListen()

function startListen() {
    //1.添加记录 -- form 表单提交
    form.addEventListener("submit", addTask)

    //2.删除单个 -- 鼠标点击
    removeBtn.addEventListener("click", removeTask)

    //3.删除所有 -- 鼠标点击
    clearBtn.addEventListener("click", clearAlltasks)

    //4.筛选 -- 按键松开
    filterInput.addEventListener("keyup", filterTasks)

}

function addTask(e) {
  //获取时间戳
  var timestamp = (new Date()).valueOf();
  document.getElementById("nowTime").innerHTML = "当前时间戳："+timestamp;


  //获取备注
  const newTask = task.value
  //生成
  let li = document.createElement("li")
  li.className = "collection-item"
  li.innerHTML = `时间戳：${timestamp} ；\n 备注：${newTask}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`

  //插入
  tasksUl.prepend(li)

  //防止刷新
  e.preventDefault()

  //复制

  let transfer = document.createElement('input');
  document.body.appendChild(transfer);
  transfer.value = timestamp;  // 这里表示想要复制的内容
  transfer.focus();
  transfer.select();
  if (document.execCommand('copy')) {
      document.execCommand('copy');
  }
  transfer.blur();
  console.log('复制成功');
  document.body.removeChild(transfer);
  
  $('#copyBtn').addEventListener('click', copy);
  
}
function removeTask() {
  alert("这个X坏了")
}
function clearAlltasks() {
  li.innerHTML = ''
}
function filterTasks(e) {
  const inputText = e.target//.value

  document.querySelectorAll(".collection-item").forEach(function(taskLi){
    const item = taskLi.firstChild.textContent
    if(itme.indexOf(inputText) != -1){
      taskLi.style.display = "block"
    
    }else{
      taskLi.style.display = "none"
    }
  })
}


