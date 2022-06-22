$.getJSON('/agency/00dc6466bcfab2a257c86bd6076fa60baf03863c', function(data) {
    document.getElementById("name").innerHTML = (data.name)
    document.getElementById("description").innerHTML = (data.description)
    var type = document.createTextNode(data.type)
    var tag = document.getElementById("tags")
    tag.appendChild(type);
    document.getElementById("adresse").innerHTML = (data.adresse)

});