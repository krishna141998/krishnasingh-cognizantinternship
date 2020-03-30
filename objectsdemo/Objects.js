//var counter = 1;
function Student(id, firstName, lastName, email) {
    this.id = id
    this.firstName = firstName

    this.lastName = lastName
    this.email = email
}

function vid() {
    var reg = /^[0-9]*$/;
    a = (document.getElementById("id").value);
    if (a.match(reg))
        return true;
    else {
        alert("Please Enter a Valid id");
        return false;
    }

}

function vfirstName() {
    var reg = /^[A-Za-z]+$/;
    a = (document.getElementById("firstName").value);
    if (a.match(reg))
        return true;
    else {
        alert("Please Enter a Valid First Name");
        return false;
    }

}

function vlastName() {
    var reg = /^[A-Za-z]+$/;
    a = (document.getElementById("lastName").value);
    if (a.match(reg))
        return true;
    else {
        alert("Please Enter a Valid Last Name");
        return false;
    }

}

function vEmail() {
    var reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    a = (document.getElementById("email").value);
    if (a.match(reg))
        return (true);
    else {

        alert("You have entered an invalid email address!")
        return (false);
    }
}

Student.prototype.name = function () {
    return this.firstName + ' ' + this.lastName
}

var students = []
var selectedRow = null;
function addStudent() {
    /*let student = new Student(
        document.getElementById('id').value,
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('email').value
    )*/
    var std = {};
    // std.serialNumber = counter;
    std.id = document.getElementById('id').value;
    std.firstName = document.getElementById('firstName').value;
    std.lastName = document.getElementById('lastName').value;
    std.email = document.getElementById('email').value;
    students.push(std);

    // ++counter;



    var table = document.getElementById("stdTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    //var serailNumberCell = row.insertCell(0);

    var idCell = row.insertCell(0);
    var firstNameCell = row.insertCell(1);
    var lastNameCell = row.insertCell(2);
    var emailCell = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    var idBtn2 = row.insertCell(5);
    // var x = document.createElement("BUTTON").row.insertCell(5);


    //serailNumberCell.innerText = std.serialNumber ;

    idCell.innerText = std.id;

    firstNameCell.innerText = std.firstName;
    lastNameCell.innerText = std.lastName;
    emailCell.innerText = std.email;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="updateStudents(this)">edit</button>'
    idBtn2.innerHTML = idBtn2.innerHTML + '<button type="button" class="btn btn-danger" onclick="deleteStudents(this)">delete</button>'

    idCell.style.color = "green";

    /*students.push(student)
    console.log(students)
    students.forEach(element => {
        console.log(element.name())
    });*/
}
function updateStudents(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("custom").disabled = false;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;

}
function updateRecord() {
    selectedRow.cells[0].innerHTML = document.getElementById("id").value;
    selectedRow.cells[1].innerHTML = document.getElementById("firstName").value;
    selectedRow.cells[2].innerHTML = document.getElementById("lastName").value;
    selectedRow.cells[3].innerHTML = document.getElementById("email").value;
    document.getElementById("custom").disabled = true;
}
function deleteStudents(td) {
    if (confirm('Are you sure about delete the data?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdTable").deleteRow(row.rowIndex);
    }
}



function mySearch() {
    var input, filter, table, tr, td, i, txtValue, tdd, txtValue2;
    
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("stdTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {  
        td = tr[i].getElementsByTagName("td")[0];  
        tdd = tr[i].getElementsByTagName("td")[1];  
        tddd = tr[i].getElementsByTagName("td")[2];
        
       
        if (td) {
            txtValue = td.textContent || td.innerText;
            txtValue2 = tdd.textContent || tdd.innerText;
            txtValue3 = tddd.textContent || tddd.innerText;
            
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; 
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


