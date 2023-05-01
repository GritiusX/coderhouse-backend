- use colegio

- db.createCollection('estudiantes')

- db.estudiantes.insertMany([
  {nombre:'Juan1',apellido:'Perez1',email:'juan1@gmail.com',sexo:'m',edad:1,curso:'node'},
  {nombre:'Juan2',apellido:'Perez2',email:'juan2@gmail.com',sexo:'h',edad:2,curso:'java'},
  {nombre:'Juan3',apellido:'Perez3',email:'juan3@gmail.com',sexo:'m',edad:3,curso:'react'},
  {nombre:'Juan4',apellido:'Perez4',email:'juan4@gmail.com',sexo:'h',edad:4,curso:'php'},
  {nombre:'Juan5',apellido:'Perez5',email:'juan5@gmail.com',sexo:'m',edad:5,curso:'node'}])

- db.estudiantes.find({})

- db.estudiantes.find({sexo:'m'})

- db.estudiantes.countDocuments()

- db.estudiantes.countDocuments({sexo:'m'})

# Filter

- db.estudiantes.find({})
