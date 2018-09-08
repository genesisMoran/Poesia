# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Poem.delete_all

User.create!([
    {name: "Genesis Moran"},

    {name: "Genesi Mora"}
])

Poem.create!([
    {title: "3/21/18", 
    content: 
    "There's always a song playing in my head
    \nEither one I heard, or one I made up
    \nThe wind talks to me
    \nI fill, feel, write down
    \nI fill, feel, write down
    \nEvery wave I read
    \nI eye 'em well
    \nEvery wave I taste
    \nI savor it
    \nThere's nothing that can kill me, because I did that before
    \nThere's no destroying what came back for her soul",
    user_id: 3},

    {title: "Azul", 
    content: 
    "Estoy azul y no se porque",
    user_id: 4}
])
