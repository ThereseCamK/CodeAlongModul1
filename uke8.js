const model = {
    personer:   [
          {
               navn: 'Therese',
               adresse: 'bakHekken 3',
               bosted: 'Stavern'
           },
           {
               navn: 'Glenn Erik',
               adresse: 'bak bilen 5',
               bosted: 'Holmestrand'
           },
       ],
       inputs:{
           navn: '',
           adresse: '',
           bosted: '',
       }
   };





show()
function show(){
    let html = '';

  for(let i = 0; i < model.personer.length ; i++){
      html +=`<li onclick="dennePersonen(${i})"> ${model.personer[i].navn}</li>`;
  }  
      html += `
        <input type='text' oninput="model.inputs.navn = this.value" />
        <input type='text' oninput="model.inputs.adresse = this.value" />
        <input type='text' oninput="model.inputs.bosted = this.value"/>
        <button onclick='addPerson()'>Submit</button>
        <button onclick="removePerson()">Fjern en fra lista</button>
`;
document.getElementById('app').innerHTML = html;
}


//controller 

function addPerson(){
    // model.personer.push({
    //     navn: model.inputs.navn,
    //     adresse: model.inputs.adresse,
    //     bosted: model.inputs.bosted,
    // })
    model.personer.push(model.inputs)
    console.log(model.personer);
}

function removePerson(){
    model.personer.pop();
}

function dennePersonen(detteVedkommende){
    model.personer.splice(detteVedkommende, 1)
    console.log(detteVedkommende, ' hva er dette for noe?')
    show();
}
