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
    {first_name: "Genesis",
    last_name: "Moran"},

    {first_name: "Bo",
    last_name: "Lee"}
])

Poem.create!([
    {title: "06/19/17", 
    content: 
    "I think I think too much
    /I observe myself as I think I think too much
    /I think I speak too much
    /I write to myself to translate speech, but still speak too much
    /I'm an open book, was told to guard myself
    /I don't worry though, I can read them well
    /You'll soon realize with time that essence can't be cloned
    /My pages stay mine
    /Common sense I hold, they should teach at schools
    /Noise I hear, cut through it all
    /Same I see, line through it all
    /Eyes I read, you can switch your looks
    /Souls I see, you can try to hide
    /I can feel it all",
    user_id: 1},

    {title: "Eat it up",
    content: 
    "Stir the spoon, just a dash
    /Cook that loon in a flash
    /Spice and salt add the flavor
    /Take my time just to savor
    /More and more I can't deny
    /My appetite to satisfy
    /Pasta, chicken, shark and boar
    /Eagle, seals, still want more",
    user_id: 2},

    {title: "Tis da season", 
    content: 
    "Make it shower, make it rain
    /All this power, keep it slayin
    /Sparkles on the tree, wreath on the door
    /Mistletoe in the air make ya jaw hit the floor
    /Walk out, popcorn chain hangin low
    /Eggnog bottles let em know
    /Hundred different boxes under the tree
    /Santa clause? Nah that ain’t me
    /Sleigh bells jinglin, hear the call
    /So dash away, dash away, dash away yall",
    user_id: 2}
])
