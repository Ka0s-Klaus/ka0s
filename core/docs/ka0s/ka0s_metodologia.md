# Ka0s *metodología y estructura*

## Introducción

Ka0s es una metodología que se basa en la simplicidad, la eficiencia y la eficacia. Ka0s es una metodología que se basa en la adaptación, la evolución y la mejora. Ka0s es una metodología que se basa en la tecnología, la innovación y el futuro. Ka0s es una metodología que se basa en la colaboración, la comunidad y la libertad.

Nuestra metodología de desarrallo, que no quiere decir que tenga que ser la tuya por obligación 'se explicara mas en detalle', por ende nuestra manera de trabajar se basa en que Ka0s única y exclusivamente se diseño para trabajar en "origin/main".

Explicado de manera sencilla sería algo así como " ... Ka0s dispone de una unica rama y un único "iniciador" que através del cual podemos discriminar los entornos de ejecución de las diferentes solicitudes.

¿cómo difencia Ka0s los entornos? Pues tiene un "compliance" específico definido en un fichero json que le indica para cada cambio en el número de versión cual es el entorno de ejecución. (nota: tenga en cuenta que el core de Ka0s, donde se desarrolla la solución, cuenta con varios módulos que gestiona los diferentes entornos y runners donde se ejecuta el código)

¿Ka0s v1.0.38 rc unnamed? La característica del versiona de Ka0s es la siguiente: la version de compone de un MAYOR "." un MINOR "." y un PATCH que en la equivalencia de nuestro equipo de desarrollo es algo así como:

- Un PATCH (H) hace referencia a una correccción y/o modificación de alguno de los módulos de Ka0s.
- Un MINOR (F) hace referencia a una nueva "funcionalidad" dentro del propio core de Ka0s, ya sea con un ampliación de funcionalidades de algo existente como una mejora completa o diseño un nuevo módulo.
- Un MAYOR (RN) hace referencia a que se añaden funcionalidades no existentes en "releases" anteriores.

¿Y 'rc unnamed'? Esta es la manera en la que hacemos que las diferentes versiones de Ka0s vean la luz. Cuando una versión queda completada (una v1.0.38) dentro de Ka0s hay un mecanismo automatizado para que se genere una nueva release cuyo nombre se elije aleatoriamente por el equipo de desarrollo.

Llegados a este punto nos dimos cuenta que con los mínimos recursos y variaciones disponiamos de más opciones de adaptabilidad de Ka0s a cualquiera ecosistema tecnológico y nos surgio la duda de añadir un frontal a través del cual puediesemos estar informados en todo momento de lo que ocurre dentro de Ka0s. Para lo cual decidimos diseñar un módulo que nos permitiese gestionar tanto las solicitudes de ejecución, como registrar cualquier cambio dentro de la plataforma de manera que nos permitiese usar el dashboard más sencillo que se pueda diseñar. El core de Ka0s de maneja y controla a través de la funcionalidad de gestión de Proyectos de GitHub usando un template sencillo basado en Kanban que solamente dispone de tres columnas (backlog - in progress - done).
