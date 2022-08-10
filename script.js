const footballers = [

{name:"Courtois",position:"goalkeeper",src:"Courtois.jpg"},
{name:"Lunin",position:"goalkeeper",src:"Lunin.jpg"},
{name:"Alaba",position:"defender",src:"Alaba.jpg"},
{name:"Carvajal",position:"defender",src:"Carvajal.jpg"},
{name:"Mendy",position:"defender",src:"Mendy.jpg"},
{name:"Militao",position:"defender",src:"Militao.jpg"},
{name:"Nacho",position:"defender",src:"Nacho.jpg"},
{name:"Odriozola",position:"defender",src:"Odriozola.jpg"},
{name:"Rudiger",position:"defender",src:"Rudiger.jpg"},
{name:"Vallejo",position:"defender",src:"Vallejo.jpg"},
{name:"Camavinga",position:"midfielder",src:"Camavinga.jpg"},
{name:"Casemiro",position:"midfielder",src:"Casemiro.jpg"},
{name:"Ceballos",position:"midfielder",src:"Ceballos.jpg"},
{name:"Kroos",position:"midfielder",src:"Kroos.jpg"},
{name:"Lucas",position:"midfielder",src:"Lucas.jpg"},
{name:"Modric",position:"midfielder",src:"Modric.jpg"},
{name:"Tchouameni",position:"midfielder",src:"Tchouameni.jpg"},
{name:"Valverde",position:"midfielder",src:"Valverde.jpg"},
{name:"Asensio",position:"forward",src:"Asensio.jpg"},
{name:"Benzema",position:"forward",src:"Benzema.jpg"},
{name:"Mariano",position:"forward",src:"Mariano.jpg"},
{name:"Reinier",position:"forward",src:"Reinier.jpg"},
{name:"Rodrygo",position:"forward",src:"Rodrygo.jpg"},
{name:"Vinicius",position:"forward",src:"Vinicius.jpg"},

]


    footballers.forEach(footballer => {

    const newDiv = document.createElement('div');
    newDiv.classList.add("divclass");
    const newImage = document.createElement('img');
    const newP = document.createElement('p');
    const newP2 = document.createElement('p');
    newImage.src = footballer.src;
    newP.innerHTML = "Name: " + footballer.name;
    newP2.innerHTML = "Position: " + footballer.position;
    document.getElementById("container").appendChild(newDiv);
    newDiv.appendChild(newImage);
    newDiv.appendChild(newP);
    newDiv.appendChild(newP2);

    
    })

function showfootballer() {

  document.getElementById("container").innerHTML = "";

 const input = document.getElementById("searchid").value;

  const filteredfootballers = footballers.filter(footballer => footballer.name.includes(input));
    
        filteredfootballers.forEach(footballer => {
            document.getElementById("container").classList.add("containerclass");
            const newDiv = document.createElement('div');
            let newImage = document.createElement('img');
            const newP = document.createElement('p');
            const newP2 = document.createElement('p');
            newImage.src = footballer.src;
            newP.innerHTML = "Name: " + footballer.name;
            newP2.innerHTML = "Age: " + footballer.position;
            document.getElementById("container").appendChild(newDiv);
            newDiv.appendChild(newImage);
            newDiv.appendChild(newP);
            newDiv.appendChild(newP2);

        });
}

function goalkeepers() {

    document.getElementById("container").innerHTML = "";

    const filteredfootballers = footballers.filter(footballer => footballer.position === "goalkeeper" );

    filteredfootballers.forEach(footballer => {

        document.getElementById("container").classList.add("containerclass");
        const newDiv = document.createElement('div');
        newDiv.classList.add("divclass");
        const newImage = document.createElement('img');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        newImage.src = footballer.src;
        newP.innerHTML = "Name: " + footballer.name;
        newP2.innerHTML = "Position: " + footballer.position;
        document.getElementById("container").appendChild(newDiv);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
    
        
        })
}

function defenders() {

    document.getElementById("container").innerHTML = "";

    const filteredfootballers = footballers.filter(footballer => footballer.position === "defender" );

    filteredfootballers.forEach(footballer => {

        document.getElementById("container").classList.add("containerclass");
        const newDiv = document.createElement('div');
        newDiv.classList.add("divclass");
        const newImage = document.createElement('img');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        newImage.src = footballer.src;
        newP.innerHTML = "Name: " + footballer.name;
        newP2.innerHTML = "Position: " + footballer.position;
        document.getElementById("container").appendChild(newDiv);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
    
        
        })
}

function midfielders() {

    document.getElementById("container").innerHTML = "";

    const filteredfootballers = footballers.filter(footballer => footballer.position === "midfielder" );

    filteredfootballers.forEach(footballer => {

        document.getElementById("container").classList.add("containerclass");
        const newDiv = document.createElement('div');
        newDiv.classList.add("divclass");
        const newImage = document.createElement('img');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        newImage.src = footballer.src;
        newP.innerHTML = "Name: " + footballer.name;
        newP2.innerHTML = "Position: " + footballer.position;
        document.getElementById("container").appendChild(newDiv);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
    
        
        })
}

function forwards() {

    document.getElementById("container").innerHTML = "";

    const filteredfootballers = footballers.filter(footballer => footballer.position === "forward" );

    filteredfootballers.forEach(footballer => {

        document.getElementById("container").classList.add("containerclass");
        const newDiv = document.createElement('div');
        newDiv.classList.add("divclass");
        const newImage = document.createElement('img');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        newImage.src = footballer.src;
        newP.innerHTML = "Name: " + footballer.name;
        newP2.innerHTML = "Position: " + footballer.position;
        document.getElementById("container").appendChild(newDiv);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
    
        
        })
}

function allteam() {

    document.getElementById("container").innerHTML = "";

    footballers.forEach(footballer => {

        const newDiv = document.createElement('div');
        newDiv.classList.add("divclass");
        const newImage = document.createElement('img');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        newImage.src = footballer.src;
        newP.innerHTML = "Name: " + footballer.name;
        newP2.innerHTML = "Position: " + footballer.position;
        document.getElementById("container").appendChild(newDiv);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
    
        
        })

}