
const taskContiner=document.querySelector(".task_container");

const addNewCard=()=>{
    // Taking the cards details
    const myCard={
        id:`${Date.now()}`, //  it always gives the unique value
        image:document.getElementById('imgurl').value,
        TaskTitle:document.getElementById('taskTitle').value,
        TaskType:document.getElementById('taskType').value,
        TaskDesc:document.getElementById('taskDesc').value
    }
    console.log(myCard);

    // generating html code for the card 

    const cardInfo=` <div class="col-md-6 col-lg-4 mt-3 mb-3" id=${myCard.id}>
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button class="btn btn-outline-info">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="btn btn-outline-danger">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <div class="card-body">
        <img
          src=${myCard.image}
          alt="img"
          class="card-img" 
        />
        <h5 class="card-title mt-3" >${myCard.TaskTitle}</h5>
        <p class="card-text" >
          ${myCard.TaskDesc}
        </p>
        <span class="badge bg-primary" >${myCard.TaskType}</span>
      </div>
      <div class="card-footer text-muted">
        <button class="btn btn-outline-primary" >Open Task</button>
      </div>
    </div>
  </div>`;

//   insert to dom

// taskContiner.insertAdjacentHTML("beforeend",cardInfo);
taskContiner.innerHTML=cardInfo;

// empty the modal

    document.getElementById('imgurl').value="";
    document.getElementById('taskTitle').value="";
    document.getElementById('taskType').value="";
    document.getElementById('taskDesc').value="";

    return;

};

