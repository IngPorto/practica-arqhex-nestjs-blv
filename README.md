
# GUIA DE ARQUITECTURA HEXAGONAL EN NEST.JS
Acceda al recurso [aquí](https://nullpointer-excelsior.github.io/posts/implementando-hexagonal-con-nestjs-part1/)

## Creando la capa de dominio

Generaremos la siguiente estructura en la capa de dominio:

* `entities`: entidades relacionadas para la creación de un producto
* `ports/inbound`: acá se encuentran los puertos de entrada representan piezas de software que interactúan con el dominio y pueden cambiar el estado del dominio
* `ports/outbound`: representan los puertos de salida que interactúan con el mundo exterior es decir fuera de la capa de dominio y se relacionan con tecnologías o sistemas en este ejemplo son repositorios así que los adaptadores que implementen estas interfaces se comunicaran con alguna base de datos o método de persistencia cosa que el dominio no le interesa saber
* `services`: estos son los servicios de dominios serán las implementaciones de `ports/inbound` que son piezas de software que interactúan con las entidades y definen reglas de negocio también definiremos los tests unitarios.

```bash
 domain
├──  entities
│   ├──  Category.ts
│   ├──  Product.ts
│   └──  Supplier.ts
├──  ports
│   ├──  inbound
│   │   ├──  CategoryService.ts
│   │   ├──  ProductService.ts
│   │   └──  SupplierService.ts
│   └──  outbound
│       ├──  CategoryRepository.ts
│       ├──  ProductRepository.ts
│       └──  SupplierRepository.ts
└──  services
    ├──  CategoryDomainService.spec.ts
    ├──  CategoryDomainService.ts
    ├──  ProductDomainService.spec.ts
    ├──  ProductDomainService.ts
    ├──  SupplierDomainService.spec.ts
    └──  SupplierDomainService.ts
```

### Generaremos la siguiente estructura en la capa de application:

* `ProductApplication.ts`: este componente será el contrato de como la capa de infraestructura se comunica con los casos de uso en esta ocasión esta clase contienen el método `createProduct()`
* `services`: contendrá la implementación de los servicios de aplicación y sus correspondientes test unitarios

```bash
 application
├──  ProductApplication.ts
└──  services
    ├──  ProductApplicationService.spec.ts
    └──  ProductApplicationService.ts
```

## Capa de infraestructuctura
Generamos la siguiente estructura:

* `adapters`: serán las implementaciones de los puertos definidos en nuestra capa de dominio
* `http-server`: definiremos toda la lógica de nuestro servidor http en este caso solo tendremos un endpoint y un filtro http para controlar los errores en este módulo emplearemos Nestjs
* `northwind-database`: en este módulo tendremos la conexión a la base de datos Northwind y en esta parte estarán las entidades de base de datos no confundir con entidades de dominio son cosas distintas a pesar de que el modelo de la base de datos representa el negocio estas entidades están más relacionadas con TypeOrm que nada.

```bash
 infraestructure
├──  adapters
│   ├──  category.repository.adapter.ts
│   ├──  product.repository.adapter.ts
│   └──  supplier.repository.adapter.ts
├──  http-server
│   ├──  controllers
│   │   └──  product.controller.ts
│   ├──  exception-filters
│   │   └──  product-exception.filter.ts
│   └──  model
│       ├──  app.response.ts
│       └──  create-product.request.ts
├──  infraestructure.module.ts
├──  northwind-database
│   ├──  entities
│   │   ├──  category.entity.ts
│   │   ├──  product.entity.ts
│   │   └──  supplier.entity.ts
│   └──  northwind-database.module.ts
└──  shared
    └──  AppLogger.ts
```

