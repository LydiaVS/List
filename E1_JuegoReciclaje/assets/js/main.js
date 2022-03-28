window.onload = () => {
    /** Drag with interact.js */
    
    let item;
    interact('.cajas')
        .draggable({
            inertia: true,            
            modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
            ],
            // autoScroll: true,
            listeners: {      
                end (e){
                    let target = e.target
                    if(e.relatedTarget == null){
                        // translate the element
                        target.style.webkitTransform =
                        target.style.transform =
                        'translate(0px, 0px)'

                        // update the posiion attributes
                        target.setAttribute('data-x', 0)
                        target.setAttribute('data-y', 0)
                    }
                },                     
                move (e) {
                    let target = e.target
                    // keep the dragged position in the data-x/data-y attributes
                    let x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx
                    let y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy
                    
                    // translate the element
                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)'
                    
                    // update the posiion attributes
                    target.setAttribute('data-x', x)
                    target.setAttribute('data-y', y)
                },
            }
        });

    interact('.azul')
        .dropzone({
            accept: '#papel',
            ondragenter: function (event) {
                event.target.classList.add('drop-activated')
            },
            ondragleave: function (event) {
                event.target.classList.remove('drop-activated')
            },
            ondrop: function (event) {
                //Objeto desaparece
                document.getElementById('papel').style.display = 'none'
                window.location.href='Nivel2.html'
               
                
            }
        })
  
    interact('.amarillo')
        .dropzone({
            accept: '#plastico',
            ondragenter: function (event) {
               
                event.target.classList.add('drop-activated')
            },
            ondragleave: function (event) {
                event.target.classList.remove('drop-activated')
            },
            ondrop: function (event) {
                document.getElementById('plastico').style.display = 'none'
                document.getElementById(`papel`).style.display = `block`
                
               
                
            }
        })
    interact('.verde')
    .dropzone({
        accept: '#vidrio',
        ondragenter: function (event) {
               
            event.target.classList.add('drop-activated')
        },
        ondragleave: function (event) {
            event.target.classList.remove('drop-activated')
        },
        ondrop: function (event) {
            document.getElementById('vidrio').style.display = 'none'
            document.getElementById(`basura`).style.display = `block`
            //Objeto desaparece
            

                // poner aquí el código de lo que tiene que pasar al soltar el elemento
                
                
        }
    })
    interact('.marron')
    .dropzone({
        accept: '#basura',
        ondragenter: function (event) {
               
            event.target.classList.add('drop-activated')
        },
        ondragleave: function (event) {
            event.target.classList.remove('drop-activated')
        },
        ondrop: function (event) {
            document.getElementById('basura').style.display = 'none'
            document.getElementById('bolsas').style.display = 'none'
            document.getElementById(`pop`).style.display = `block`                
        }
    })
};
