
function addbutton() {
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2");
    newnode.setAttribute('rows', 3);
    newnode.setAttribute("placeholder", "Enter Here")


    let newadd = document.getElementById("work-experience");
    let addbutton = document.getElementById("addbutton1");

    newadd.insertBefore(newnode, addbutton);

}

function addbutton2() {
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add("eqfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute('rows', 3);
    newnode.setAttribute("placeholder", "Enter Here")


    let newadd1 = document.getElementById("aq");
    let addbutton1 = document.getElementById("addbutton2");

    newadd1.insertBefore(newnode, addbutton1);
}


// generate cv

function generatecv() {
    let namefield = document.getElementById("nameField").value;
    let namet1 = document.getElementById("namet1");
    namet1.innerHTML = namefield;

    document.getElementById("namet2").innerHTML = namefield;

      // subtitle
      document.getElementById("subtitlet").innerHTML = document.getElementById("subtitleField").value;

    // contact
    document.getElementById("contactt").innerHTML = document.getElementById("contactField").value;

    // address
    document.getElementById("addresst").innerHTML = document.getElementById("AddressField").value;


    // facebook
    document.getElementById("facebookt").innerHTML = document.getElementById("FacebookField").value;

    // instagram
    document.getElementById("instagramt").innerHTML = document.getElementById("InstagramField").value;

    // linkedin
    document.getElementById("linkedint").innerHTML = document.getElementById("linkedinField").value;

    //   objecttive 
    document.getElementById("objecttivet").innerHTML = document.getElementById("objectivesField").value;


    // wordexperince
    let we = document.getElementsByClassName("wefield");
    let str = "";
    for (let e of we) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("wet").innerHTML = str;

    // acadmic 
    let aq = document.getElementsByClassName("eqfield");
    let str1 = "";
    for (let e of aq) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqt").innerHTML = str1;

    // photo
    let file =document.getElementById("image").files[0];
    console.log(file);
    let reader =new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function (){
    document.getElementById("imgt").src = reader.result;
    };


    // imgt

    document.getElementById("cv-maker").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

// print button
function printcv(){
    window.print();
}


// <!--Musharaf Ali  -->