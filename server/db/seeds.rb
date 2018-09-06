# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Poem.delete_all
User.delete_all

Poem.create!([
    {title: "3/21/18", 
    content: 
    "There's always a song playing in my head/ 
    Either one I heard, or one I made up/
    The wind talks to me/
    I fill, feel, write down/
    I fill, feel, write down/
    Every wave I read/
    I eye 'em well/
    Every wave I taste/
    I savor it/
    There's nothing that can kill me, because I did that before/
    There's no destroying what came back for her soul"},

    {title: "Azul", 
    content: 
    "Estoy azul y no se porque"}
])

User.create!([
    {name: "Genesis Moran",
    poem_id: 1},

    {name: "Genesi Mora",
    poem_id: 2}
])
