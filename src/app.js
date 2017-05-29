angular.module('videoTerapia', 
[
    'ngMaterial',
    'ngRoute',
])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/views/home.html'
        })
        .when('/:bodySection', {
            templateUrl: 'src/views/bodySectionIndex.html',
            controller: 'BodySectionIndexController'
        })
        .otherwise({
            redirectTo: '/'
        });
})
.controller('MainController', function($scope, $mdSidenav) {
    $scope.toggleSidenav = function() {
        $mdSidenav('sidenav').toggle();
    }
})
.controller('BodySectionIndexController', function($scope, $routeParams, $location) {
    $scope.bodySection = $routeParams.bodySection[0].toUpperCase() + $routeParams.bodySection.slice(1);
    $scope.bodyParts = selectCards();

    function selectCards() {
        switch ($routeParams.bodySection.toLowerCase()) {
            case 'brazos': return [
                { name: 'Codos', imgUrl: '',  link:'', description:''},
                { name: 'Muñeca', imgUrl:'', link:'', description:'' },
                { name: 'Antebrazo', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' }
            ]; 

            case 'tronco': return [
                { name: 'Lumbar bajo', imgUrl:'http://4.bp.blogspot.com/-7w-plJ2TYTY/VfHlGJZDRlI/AAAAAAAAATI/vbGsMtAhCvU/s1600/Dolor%2Bde%2BEspalda%2BBaja.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/ejercicios_y_estiramientos_para_el_dolor_lumbar_bajo_2_0.png', description:'La lumbalgia inespecífica o el dolor lumbar bajo, son una de las causas más comunes de consulta, en los centros de atención primaria y en las consultas de fisioterapia, por suerte o por desgracia, el tratamiento farmacológico no obtiene unos grandes resultados en lo que a la lumbalgia se refiere, esto puede ser, en parte, a que muchas veces existe un factor mecánico perpetuante, sostenido además por una mala higiene postural, unos malos hábitos y un desequilibrio biomecánico, debido a esto muchas veces el trabajo del paciente a domicilio y la educación por parte del fisioterapeuta puede ser esencial en la resolución del problema.'},
                { name: 'Sínfisis púbica', imgUrl:'http://static1.blogmedicina.com/wp-content/uploads/2013/07/shutterstock_69097156_thumb.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/osteopatia_para_pubis_0.png', description:'La sínfisis púbica, es la unión por delante de la pelvis a través de las rama pubianas, esta unión anterior se realiza por medio de un elemento de fibrocartilago que crea una especie de articulación. Durante la marcha y la carrera, la sínfisis púbica se ve sometida a diferentes tensiones, provocadas por varios músculos, como por ejemplo los aductores, los isquiotibiales o el recto abdominal. La pubalgia u osteopatía de pubis, es la afectación inflamatoria de la zona insercional de los aductores en el hueso y la propia sínsfisis del pubis.' },
                { name: 'Espalda encorvada', imgUrl:'http://www.ajlounyinjurylaw.com/images/spine-injury-lawyer.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/como_corregir_la_postura_de_la_espalda_encorvada_mediante_ejercicios.png', description:'La hipercifosis dorsal, o mas coloquialmente espalda encorvada, puede tener solución dependiendo de las causas que la originan, si es por un acortamiento de la musculatura anterior (delantera) o una rigidez o hipomobilidad dorsal, tenemos la posibilidad de corregirla o evitar al menos su avance, pero nadie nos va a dar una varita mágica para conseguirlo, está comprobado que lo mejor que podemos hacer en este caso es realizar ejercicios de estiramiento de los músculos retraidos y movilización dorsal.' },
                { name: 'Calcaceo', imgUrl:'http://hermandadblanca.org/wp-content/uploads/2015/08/hermandadblanca_radiografia.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/6_claves_para_entender_y_tratar_el_espolon_calcaneo.png', description:'El espolón calcáneo se produce por la acumulación de diferentes elementos como ácido úrico, oxalato o calcio en el hueso del talón o calcáneo, este proceso puede tener causas mecánicas como por ejemplo una sobrecarga continua de la fascia plantar o metabólicas como un medio demasiado ácido en el organismo o disfunciones del riñón.' },
                { name: 'Core', imgUrl:'http://tcm-moerth.de/wp-content/uploads/2014/02/Fotolia_39767952_XS-285x300.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/ejercicios_con_theraband_para_tronco.jpg', description:'La mayoría de los gestos deportivos y actividades de la vida cotidiana requieren tanto de fuerza como balance del tronco, por lo que una disfunción en alguno de estos factores, predispondrá al organismo a lesiones.' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' }
            ];

            case 'piernas': return [
                { name: 'Fascia lata', imgUrl:'https://ak3.picdn.net/shutterstock/videos/9674165/thumb/10.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/tendinitis_de_la_fascia_lata.png', description:'La fascia lata o cintilla iliotibial, es un tracto fibroso que discurre por la cara lateral del muslo de forma superficial al vasto lateral del cuádricesp. La cintilla iliotibial está intimamente relacinada con los músculos, tensor de la fascia lata, glúteo mayor y glúteo medio. La fascia lata tiene su origen en la zona de la cadera y se inserta en la tibia en el conocido como tubérculo de Gerdy. Las funciones de esta estructura son favorecer la abducción de la cadera y dar estabilidad lateral a la rodilla. La tendinitis de la fascia lata ocurre especialmente en corredores, cuando el roce de la cintilla con el epincóndilo femoral se hace demasiado intenso o repetido, este roce continuo provocara inflamación y con el tiempo puede llevar a la degeneración del tendón.' },
                { name: 'Músculo piramidal', imgUrl:'http://human-anatomy101.com/wp-content/uploads/2016/09/anatomy-of-piriformis-muscle-piriformis-muscle-golf-loopy-play-your-golf-like-a-champion.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/6_ejercicios_y_estiramientos_para_el_sindrome_piramidal.png', description:'El músculo piramidal, está situado en la zona posterior de la pelvis, una de sus funciones es rotar la cadera hacia afuera, este músculo piramidal o piriforme, está íntimamente relacionado con el nervio ciático, ya que este pasa por delante de el. El síndrome del piramidal, ocurre cunado el músculo piramidal comprime el nervio ciatico y lo irrita, pudiendo provocar este un fuerte y continuo dolor por la pierna, e incluso perdida de fuerza y sensibilidad.' },
                { name: 'Tendón rotuliano', imgUrl:'http://www.iranstyle.ir/wp-content/uploads/2016/12/image_13950924903628.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/tendinitis_rotuliana.png', description:'El tendón rotuliano, en la unión del músculo cuádriceps con la tibia, este fuerte tendón íntimamente relacionado con la rótula transmite la fuerza del cuádriceps para extender la rodilla. En la tendinitis o tendinosis del tendón rotiliano, esté se ve sometido a una especie de proceso de inflamación crónica, facilitado muchas veces por una excesiva tensión del cuádriceps. Esta lesión tendinosa del tendón distal del cuadriceps, el tendón rotuliano, en relativamente común en los deportistas que tienen una alta solicitación del cuádriceps y una descompensación de fuerzas en la extremidad inferior.' },
                { name: 'Tendón de aquiles', imgUrl:'http://tratamiento-dolor.es/wp-content/uploads/2014/10/TA-300x168.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/tendinitis_de_aquiles.png', description:'La tendinitis o tendinopatia del tendón de aquiles, está muchas veces relacionada con una excesiva tensión de los músculos gemelos y sóleo, en esta patología, sucesivas microlesiones, terminan por llevar al tendón de aquiles a un proceso de inflamación crónica, que termina por deteriorar el tendón.'},
                { name: 'Facia plantar', imgUrl:'https://t2.uc.ltmcdn.com/images/8/1/9/img_25918_ins_3695113_600.jpg', link:'https://www.fisioterapia-online.com/sites/default/files/infografias/6_auto-masajes_y_estiramientos_para_la_fascitis_plantar.png', description:'La facia plantar es una estructura fibrosa situada en la planta del pie, esta estructura tiene diferentes funciones, entre otras el mantenimiento de los arcos plantares o la ayuda a la propulsión de la marcha. La fascitis plantar es la inflamación de la fascia plantar, esta inflamación cronificada suele ocurrir por una excesiva tensión de los músculos de la pierna, por una descompensación de las fuerza de músculos con acciones contrapuestas o por una mala técnica de carrera.' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' },
                { name: 'Abdomen', imgUrl:'', link:'', description:'' }
            ];

            default: return $location.url('/');
        }
    }
});