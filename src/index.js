import './style.css';

function todo(title, details, dueDate, priority){
    return {title, details, dueDate, priority};
};

let buttonsEvents = (() => {
    let inbox = document.getElementById('inbox');
    let today = document.getElementById('today');
    let Upcoming = document.getElementById('upcoming');
    let projects = document.getElementsByClassName('pro')[0]
    let addmain = document.getElementById('addmain')
    let btnforForm = document.getElementById('add')
    let cancel = document.getElementById('cancel')
    
    cancel.addEventListener('click', maindisplay().projectsDisplayToggle)
    inbox.addEventListener('click', maindisplay().inboxContent);
    today.addEventListener('click', maindisplay().todayContent);
    Upcoming.addEventListener('click', maindisplay().upcomingContent);
    projects.addEventListener('click', maindisplay().projectsDisplayToggle)
    addmain.addEventListener('click', maindisplay().addProjectstoDisplay)
    btnforForm.addEventListener('click', maindisplay().addsideBarForm)
    maindisplay().inboxContent()
})();

function maindisplay(){
    let main = document.getElementById('main')
    let main2= document.getElementById('main2')
    let maintasks = document.createElement('div')
    let h1 = document.createElement('h2');
    const TASKDATA = []
    
    function inboxContent(){
        main.replaceChildren();
        h1.innerText = "Inbox";
        main.appendChild(h1);
        maintaks.appendChild()
        projectform()
    };
    function todayContent(){
        main.replaceChildren();
        h1.innerText = "Today";
        main.appendChild(h1);
        projectform()
    };
    
    function upcomingContent(){
        main.replaceChildren();
        h1.innerText = "Upcoming";
        main.appendChild(h1);
        projectform()
    };

    function projectsDisplayToggle(){
        let projectsData = document.getElementById('projectData')
        projectsData.classList.toggle("display")
    }

    function projectform(){
        let btn = document.createElement('button')
        btn.id = 'addTask'
        btn.innerText = "Add Task"
        main.appendChild(btn)
        
        let addTask = document.getElementById('addTask')
        addTask.addEventListener('click', todolistForm)

        let backTask = document.getElementById('back')
        backTask.addEventListener('click', todolistForm)
        
        function todolistForm(){   
        let mainForm = document.getElementById('mainForm')
        mainForm.classList.toggle("display")
    }
    }

    function addProjectstoDisplay(){
        let title = document.getElementById('title').value
        let details = document.getElementById('details').value
        let dueDate = document.getElementById('dueDate').value
        let priority = document.getElementById('priority').value

        // if(title == '' || dueDate == '')return
        addProjectstoArray()

        let div = document.createElement('div')
        // let div2 = document.createElement('div')
        let check = document.createElement('input')
        let mainContent = document.getElementById('mainContent')
        let divtitle = document.createElement('div')
        let divdetails = document.createElement('div')
        let divdueDate = document.createElement('div')
        let divpriority = document.createElement('div')

        divdetails.className = "details"
        div.className = "tasks"
        // div2.className = "tasks2"
        check.type = 'checkbox'
        check.className = 'check'

        let rmBtn = document.createElement('button')
        rmBtn.addEventListener('click', remove2)
        check.addEventListener('click', checkline)
        function remove2(){
            div.remove()
            // div2.remove()
        }
        function checkline(){
            div.classList.toggle('line')     
        }
    
        divtitle.innerText = title
        divdetails.innerText = details
        divdueDate.innerText = dueDate
        divpriority.innerText = priority
        rmBtn.innerText = "Remove"
        div.appendChild(check)
        div.appendChild(divtitle)
        div.appendChild(divdetails)
        div.appendChild(divdueDate)
        div.appendChild(divpriority)
        div.appendChild(rmBtn)

        // mainContent.appendChild(div2)
        // div.style.display = 'none'
        // div2.appendChild(divtitle)
        // div2.appendChild(divdueDate)
        // div2.appendChild(rmBtn)
    }

    function addProjectstoArray(){
        let title = document.getElementById('title').value
        let details = document.getElementById('details').value
        let dueDate = document.getElementById('dueDate').value
        let priority = document.getElementById('priority').value
        let toDoList = todo(title, details, dueDate,priority)
        TASKDATA.push(toDoList)
    }

    function projectsDisplay(){
        console.log(22)
        main.replaceChildren();
        h1.innerText = "Today";
        main.appendChild(h1);
        projectform()
    }

    function addsideBarForm(){
        let projects = document.getElementById('projects')
        let test = document.createElement('div')
        let btnrm = document.createElement('button')
        let name = document.getElementById('inputName').value
        let p= document.createElement('p')
        p.className = 'Q'
        test.appendChild(p)
        
        if(name == '')return
        btnrm.innerText = 'X'
        btnrm.className = 'remove cancel'
        test.className = 'test'
        p.innerText = name
        test.appendChild(btnrm)
        projects.appendChild(test)
    
        btnrm.addEventListener('click',removeClass)
        function removeClass(){
            test.remove()
        }        
        
        test.addEventListener('click',display)
        function display(){
            main.replaceChildren();
            h1.innerText = name;
            main.appendChild(h1);
            projectform()
        }
  

    }    
    return {inboxContent, todayContent, upcomingContent, projectsDisplayToggle, addProjectstoDisplay, projectsDisplay, addsideBarForm};
};





