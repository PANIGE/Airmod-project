$.getJSON('/agency/00dc6466bcfab2a257c86bd6076fa60baf03863c', function(data) {
    document.getElementById("name").innerHTML = (data.name);
    document.getElementById("description").innerHTML = (data.description);
    var type = document.createTextNode(data.type);
    var tag = document.getElementById("tags");
    tag.appendChild(type);
    document.getElementById("adresse").innerHTML = (data.adresse);
    let i = 0;
    data.schedules.forEach(d => {
        if (d.Openning) {
            let morn = document.querySelectorAll('.matin td');
            morn[i].innerHTML = d["Openning"] == null ? "Closed" : d["Openning"]+"h";
     
            morn[i].setAttribute("style", "color:#000000");

            let aftn = document.querySelectorAll('.aprem td');
            aftn[i].setAttribute("style", "color:#000000");
            aftn[i].innerHTML = d["Closing"] == null ? "Closed" : d["Closing"]+"h";
        }
        else {
            let morn = document.querySelectorAll('.matin td');
            morn[i].setAttribute("style", "color:#FF8133");

            let aftn = document.querySelectorAll('.aprem td');
            aftn[i].setAttribute("style", "color:#FF8133");
        }
        i++;
    }); 
    
    
});