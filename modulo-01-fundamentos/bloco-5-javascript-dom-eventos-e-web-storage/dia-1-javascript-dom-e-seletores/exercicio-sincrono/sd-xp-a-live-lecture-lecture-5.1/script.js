 //console.log('oi! tudobem?')

 // OBJETO WINDOW

 // OBJETO DOCUMENT
//console.log(document)
//  OBJETO BODY
//console.log(document.body);

 // BUSCAR ELEMENTOS
    // retornar 1 elemento específico
       //console.log(  document.getElementById('cont1')  )
      // console.log( cont1 );
    // retornar vários elementos com algo em comum
          //let minhaTag = document.getElementsByClassName('estilo1')
          //let minhaTag = document.querySelector(' .estilo1 ');
          //let minhaTag = document.querySelectorAll('#cont1 .estilo1');
          //console.log( minhaTag  );

    // buscar elementos anteriores
          //let minhaTag = cont2.parentNode
          //console.log( minhaTag  );
    // buscar elementos filho
          //let minhaTag = cont2.children
          //console.log( minhaTag[0] );
    // buscar a partir de qualquer elemento
         // cont1.getElementsByClassName('estilo1');

 // ATUALIZAR PROPRIEDADES DOS ELEMENTOS
         // DOC https://www.w3schools.com/jsref/default.asp
         cont1.querySelector('h2').innerText = 'Minha Lista 1';
         //document.querySelector('ul').style.backgroundColor = '#cccccc';
         //document.querySelectorAll('ul')[0].style.backgroundColor = '#cccccc';
        

         //REMOVE
         document.querySelectorAll('ul')[1].removeAttribute("style")
 // ADD/REMOVE CLASS,ID,STYLE     
          document.getElementsByTagName('li')[2].classList.remove("estilo1")
         document.getElementsByTagName('li')[2].classList.add("estilo2")
         
         document.querySelectorAll('.estilo1')[0].setAttribute('id','itemFavorito')
         document.querySelectorAll('.estilo1')[0].removeAttribute("id");

// EXEMPLOS COM FUNÇÕES


function clearTextByTagName(tagName){
     let tags = document.getElementsByTagName(tagName)

     for(let i = 0; i < tags.length; i++){
          if(tags[i].classList == 'estilo1 '){
               continue;
          }
          tags[i].innerText = '';
         
     }
     //console.log(tags)     
}


console.log('oi')

     
