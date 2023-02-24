const stelle = document.getElementsByClassName('stella');

const stelleArray = Array.from(stelle);

stelleArray.forEach(element => element.addEventListener('click', function(){
    
    let indice = stelleArray.indexOf(element);
    for(let i = 0; i<=indice; i++){
        if(stelleArray[i].classList.contains('stella')){
            stelleArray[i].setAttribute('class','');    
            // stelleArray[i].classList.toggle('stella');
        }
        else{
            for(let j = indice; j<stelleArray.length; j++){
                stelleArray[j].setAttribute('class','stella');    
            }
        }
    }

    }

));