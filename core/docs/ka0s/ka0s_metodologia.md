# Ka0s *metodología y estructura*

## Introducción

Ka0s es una metodología que se basa en la simplicidad, la eficiencia y la eficacia. Ka0s es una metodología que se basa en la adaptación, la evolución y la mejora. Ka0s es una metodología que se basa en la tecnología, la innovación y el futuro. Ka0s es una metodología que se basa en la colaboración, la comunidad y la libertad.

![Ka0s](/core/imgs/kaos-core.jpeg)

Nuestra metodología de desarrallo, que no quiere decir que tenga que ser la tuya por obligación 'se explicara mas en detalle', por ende nuestra manera de trabajar se basa en que Ka0s única y exclusivamente se diseño para trabajar en "origin/main".

Explicado de manera sencilla sería algo así como " ... Ka0s dispone de una unica rama y un único "iniciador" que a través del cual podemos discriminar los entornos de ejecución de las diferentes solicitudes.

¿cómo difencia Ka0s los entornos? Pues tiene un "compliance" específico definido en un fichero json que le indica para cada cambio en el número de versión cual es el entorno de ejecución. (nota: tenga en cuenta que el core de Ka0s, donde se desarrolla la solución, cuenta con varios módulos que gestiona los diferentes entornos y runners donde se ejecuta el código)

¿Ka0s v1.0.38 rc unnamed? La característica del versionado de Ka0s es la siguiente: la version de compone de un MAYOR "." un MINOR "." y un PATCH que en la equivalencia de nuestro equipo de desarrollo es algo así como:

- Un PATCH (H) hace referencia a una correccción y/o modificación de alguno de los módulos de Ka0s. Por defecto, PATCH es la "rama" donde se desarrolla.
- Un MINOR (F) hace referencia a una nueva "funcionalidad" dentro del propio core de Ka0s, ya sea con un ampliación de funcionalidades de algo existente como una mejora completa o diseño un nuevo módulo. Por defecto, MINIOR es la rama donde se depurar y prueban esos desarrollos de PATCH.
- Un MAYOR (RN) hace referencia a que se añaden funcionalidades no existentes en "releases" anteriores. Por defecto, MAYOR es la "rama" previa a poner en main una nueva funcionalidad desarrollada en PATCH y probada y depurada en MINOR.

¿Y 'rc unnamed'? Esta es la manera en la que hacemos que las diferentes versiones de Ka0s vean la luz. Cuando una versión queda completada (una v1.0.38) dentro de Ka0s hay un mecanismo automatizado para que se genere una nueva release cuyo nombre se elije aleatoriamente por el equipo de desarrollo.

¿Que tienen de diferente una release con otra? Pues somos "Ka0s" asique la respuesta sería algo así como; el todo y el nada. Nosotros ponemos nombre a las release y las identificamos porque en su contenido se desarrolla alguna faceta especifica que se haya solicitado. Por ejemplo, en estos momentos el qeuipo del core esta trabajando en el desarrollo de Ka0s "Release Klaus" donde su función principal es añadir la funcionalidad de poder gestionar y visualizar la información referente a FinOps + Monitorización + Observabilidad de cualquier recurso de una compañía independietemente de donde este alojado.......

*"Próxima Release"* Anticipamos que en estos momentos se esta "cocinando" la Release Proyecto D cuya funcionalidad se basa en añadir el control de un SOC a Ka0s.

Llegados a este punto nos dimos cuenta que con los mínimos recursos y variaciones disponiamos de más opciones de adaptabilidad de Ka0s a cualquiera ecosistema tecnológico y nos surgio la duda de añadir un frontal a través del cual puediesemos estar informados en todo momento de lo que ocurre dentro de Ka0s. Para lo cual decidimos diseñar un módulo que nos permitiese gestionar tanto las solicitudes de ejecución, como registrar cualquier cambio dentro de la plataforma de manera que nos permitiese usar el dashboard más sencillo que se pueda diseñar.

## ¿Kanban?¿Scrum?... Pues no, sencillamente Ka0s

El core de Ka0s de maneja y controla a través de la funcionalidad de gestión de Proyectos de GitHub usando un template sencillo basado en Kanban que solamente dispone de tres columnas (backlog - in progress - done).

![Ka0s](/core/imgs/ka0s-dashboard.png)

Y aquí viene lo bueno, ¿y porque ka0s no tiene su propio módulo de gestión? Pues sencillamente, porque ya existe. No tan solo en GitHub sino en muchas más plataformas.

En nuestro caso nos basamos en las soluciones de GithHub por varios motivos:

- Se integran directamente con todos los actions.
- Estan disponibles para todos los desarrolladores.
- 100% gestionables a trvés de la API.
- Nos permitió ahorrar más de 4.000 horas de desarrollo para obtener la misma funcionalidad.

## ¿Cómo aplicamos la metodología de H F RN a través de la gestión del proyecto?

Pues sencillo. Una de las características que tuvimos en cuenta es "no repetir tarjetas por entornos". Para lo cual, una misma tarjeta puede trabajar en PATCH y cuando termine pasar a MINOR y así sucesivamente hasta llegar a "origin/main".

![Ka0s](/core/imgs/ka0s-branch.png)

Ventaja, "Un única tarjeta para gobernar todas las acciones asociadas al desarrollo de la misma". Si un poco al rollito de "El Señor de los Anillos", pero vimos que es muy rápido localizar la información, resumirla y localizarla. Esto nos permitió mejorar en un 43% la observabilidad conectada al propio Ka0s.

![Ka0s](/core/imgs/ka0s-info.png)

Y aquí os presentamos a uno de los módulos que más trabaja dentro de Ka0s *"inspector.yml"* uno de los módulos más sencillo y al mismo tiempo más importantes de la plataforma, ya que es responsable de realizar la extracción de la información de todo lo que se ha solicitado a cada uno de los diferentes módulos de Ka0s y hacerla disponible para el resto de la plataforma.

![Ka0s](/core/imgs/ka0s-inspector.png)

Y..... tachán, ¿os acordais de la "sucesión"? Pues inspector solamente se penso para extrar un resumen "lógico" (imagen anterior) y esplicar en "humano" que es lo que ha realizado la lógica.

![Ka0s](/core/imgs/ka0s-inspector-human.png)

Pues al finalizar este módulo y conectarlo a la obsevabilidad nos dimos cuenta de que además le hemos añadido la funcionalidad de saber cuanto tiempo tarda cada ejecución, cada solicitud, casa job, cada step dentro del job y lo más importante, todos los recursos asociados a la ejecución que han solicitados y por cuanto tiempo (esto nos permite extraer hasta el tiempo de computo "CPU + Memoria + Tranferencia de información"). La caña, pensamos en guardar un JSON y un LOG en plan de ..... "por saber lo que ha pasado" y nos dimos cueta de que la "sucessión" entro en juego y al mismoa tiempo añadimos la funcionalidad a la propia plataforma de manejar sus ejecuciones y costes.

...continuará.
