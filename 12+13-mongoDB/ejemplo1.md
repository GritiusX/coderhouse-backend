- use baseCrud
- db.createCollection('mascotas')
- db.mascotas.insertMany([
  {name:'mascota 1',especie:'perro',edad:2},
  {name:'mascota 2',especie:'gato',edad:5},
  {name:'mascota 3',especie:'perro',edad:6},
  ])

- db.mascotas.find({especie:'perro'})
- db.mascotas.countDocuments()
- db.mascotas.estimatedDocumentCount()
