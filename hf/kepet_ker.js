const xhttp = new XMLHttpRequest();
xhttp.onload = function(data){
    if (data.target.status == 200) {
        const valasz = data.target.response;
        const kep = JSON.parse(valasz);
        document.getElementById('kep').src = kep.file;
        console.log(kep);
    }
};
xhttp.open("GET", "https://aws.random.cat/meow");
xhttp.send();