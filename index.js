var out = document.getElementById("out")
var addv = document.getElementById("add")
var startv = document.getElementById("start")
var cont = document.getElementsByClassName("cont");
var data = [

    {

        "id": 1,

        "title": "Bok 1",

        "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",

        "readCount": 10

    },

    {

        "id": 2,

        "title": "Bok 2",

        "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",

        "readCount": 300

    },

    {

        "id": 3,

        "title": "Bok 3",

        "body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",

        "readCount": 80

    },

    {

        "id": 4,

        "title": "Bok 4",

        "body": "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",

        "readCount": 200

    },

    {

        "id": 5,

        "title": "Bok 5",

        "body": "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",

        "readCount": 109

    }

]
start()
function start() {
    out.innerHTML = " "
    for (var i = 0; i < data.length; i++) {
        var del = document.createElement("input")
        var up = document.createElement("input")
        var cont = document.createElement("div")
        var name = document.createElement("h3")
        var body = document.createElement("p")
        var rc = document.createElement("p")

        up.setAttribute("type", "button")
        up.setAttribute("value", "Update")
        up.setAttribute("onclick", "up(this.id)")
        up.setAttribute("id", "up" + i)
        del.setAttribute("type", "button")
        del.setAttribute("value", "Delete")
        del.setAttribute("onclick", "del(this.id)")
        del.setAttribute("id", "del" + i)
        cont.setAttribute("class", "cont")
        cont.setAttribute("id", "c" + i)
        if (data[i] != undefined) {
            name.innerHTML = data[i].title
            body.innerHTML = data[i].body
            rc.innerHTML = "<i>Reading: " + data[i].readCount + "</i>"



            out.appendChild(cont)
            cont.appendChild(name)
            cont.appendChild(body)
            cont.appendChild(rc)
            cont.appendChild(up)
            cont.appendChild(del)
        }
    }
}
function del(clicked_id) {
    var cbtn = clicked_id
    delete data[parseInt(cbtn.match(/\d+$/)[0], 10)]
    start()
}
function up(clicked_id) {
    // var cbtn = clicked_id
    // console.log(cbtn);
    // for (let i = 0; i < data.length; i++) {
    //     if (cbtn) {

    //     }
    // }
    window.alert("what is update supposed to do?")
}
function reset() {
    for (let i = 0; i < data.length; i++) {
        cont[i].style.display = "";

    }
}
function Search() {
    var input = document.getElementById('input').value;
    for (var i = 0; i < data.length; i++) {
        if (data[i].title.toLowerCase().indexOf(input.toLowerCase()) != -1) {
            cont[i].style.display = "";
        } else {
            cont[i].style.display = "none";
        }
    }
}
function add() {
    startv.style.display = "none"
    addv.style.display = ""
}
function sub() {
    startv.style.display = ""
    addv.style.display = "none"
    var titleV = document.getElementById("title").value;
    var desV = document.getElementById("des").value;

    data[data.length] = {
        "id": data.length + 1,

        "title": titleV,

        "body": desV,

        "readCount": Math.floor(Math.random() * 100)
    }
    start()

}