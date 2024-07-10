$(document).ready(function(){

    console.log('El documento está listo')

    //  Obteniendo la fecha usando el objeto Date() y convirtiéndolos a cadena de caracteres
    let date = new Date()
    let current_date = date.toDateString()

    //  Mostrar la fecha en la página HTML usando JQUERY y JS
    $('').text('Fecha: ' + current_date)

    
    let review = ""
    let input_data = ""
    let product = ""
    let emotion = ""
    let emoji_url = ""

    //  Haciendo una función para una solicitud AJAX
    function ajax_request(api_url , input_data){

        $.ajax({

            // Tipo de solicitud
            type : '',

            // URL
            url : api_url,

            // Datos JSON
            data : JSON.stringify(input_data),

            // Tipo de dato de la respuesta esperada
            dataType : 'json',

            // Tipo de contenido
            contentType : 'application/json',

            //  Método "success"
            success : function(result)
            {
                //  Extraer la ruta de los sentimientos y emoticonos
                emotion = result.sentiment
                emoji_url = result.path

                //  Actualizar el emoticón y los sentiminetos según corresponda
                if (product  ==  'Smartphone'){
                    $('#m_emoji').attr('src' , emoji_url)
                    $('#m_emotion').text(emotion)
                    $('#m_emoji').show()
                    $('#m_emotion').show()
                }

                else if (product  ==  'Digital Camera'){
                    $('#c_emoji').attr('src' , emoji_url)
                    $('#c_emotion').text(emotion)
                    $('#c_emoji').show()
                    $('#c_emotion').show()
                }

                else if (product  ==  'Headphones'){
                    $('#h_emoji').attr('src' , emoji_url)
                    $('#h_emotion').text(emotion)
                    $('#h_emoji').show()
                    $('#h_emotion').show()
                }

                else if (product  ==  'Video Games'){
                    $('#v_emoji').attr('src' , emoji_url)
                    $('#v_emotion').text(emotion)
                    $('#v_emoji').show()
                    $('#v_emotion').show()
                }
            },

            //  Método "error"
            error : function(result)
            {
                console.log(result)
            }

        })

        console.log('Solicitud AJAX enviada')
        
    }


    //  Verificar si se hace clic en el botón para enviar debajo de "smartphone" y obtener la reseña correspondiente
    $('#m_button').click(function(){

        review = $('#m_textbox').val()
        input_data = {'customer_review' : review}
        ajax_request('/predict' , input_data)

        product = 'Smartphone'
    })

    //  Verificar si se hace clic en el botón para enviar debajo de "cámara" y obtener la reseña correspondiente
    $('').click(function(){

        review = $('').val()
        input_data = {'customer_review' : review}
        ajax_request('/predict' , input_data)

        product = 'Digital Camera'
    })

    //  Verificar si se hace clic en el botón para enviar debajo de "audífono" y obtener la reseña correspondiente
    $('').click(function(){

        review = $('').val()
        input_data = {'customer_review' : review}
        ajax_request('/predict' , input_data)

        product = 'Headphones'
    })

    //  Verificar si se hace clic en el botón para enviar debajo de "videojuego" y obtener la reseña correspondiente
    $('').click(function(){

        review = $('').val()
        input_data = {'customer_review' : review}
        ajax_request('/predict' , input_data)

        product = 'Video Games'
    })


    //  Si se hace clic en el botón "Guardar", realizar una solicitud POST a la API

    $('').click(function(){

        console.log('Se ha hecho clic en el botón de guardado')

        //  Datos de entrada
        input_data = {'date' : date , 'product' : product , 'review' : review , 'sentiment' : emotion}

        //  Llamada AJAX
        $.ajax({
            type : '',
            url : '',
            data : JSON.stringify(input_data),
            dataType : 'json',
            contentType : 'application/json',
            success : function(result){
                console.log(result)
            },
            error : function(result){
                console.log(result)
            }
        })

        // Limpiando las cajas de texto
        $('#m_textbox').val('')
        $('#c_textbox').val('')
        $('#h_textbox').val('')
        $('#v_textbox').val('')
    })


})

    
