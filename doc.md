# relation

```shell
nest g class coffees/entities/flavor.entity --no-spec

nest g class common/dto/pagination-query.dto --no-spec

nest g class events/entities/event.entity --no-spec


npx typeorm migration:create -n CoffeeRefactor
```