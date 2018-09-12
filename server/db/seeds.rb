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
    last_name: "Lee"},

    {first_name: "Ira",
    last_name: "Babbles"},

    {first_name: "Joseph",
    last_name: "Lobo"},

    {first_name: "New",
    last_name: "User"}
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
    user_id: 2},

    {title: "To Be Loved",
    content: 
    "Secretive is she about her own name
    /she knows never to play too close to the flame,
    /For she has been burned before
    /by a word of ardor she has grown to abhor,
    /But no matter what of her she says she will become
    /I swear to her she will deserve to always be loved
    
    /And she is loved, by one at least
    /whose words are better left written on paper sheets,
    /And written not with ink, but with his blood and heart
    /for on his life, he knows she has left her mark,
    /For her warmth is worth the weight of the Sun
    /and that is why he knows, to him, she will deserve to always be loved",
    user_id: 3},

    {title: "Lost",
    content: 
    "Take me back to that clear blue sea. 
    /That place on the shore where I envisioned you standing next to me. 
    /Your soft whispers caressed my soul like a soft summer breeze... 
    /We have drifted apart pulled away by the ebbing ocean, 
    /your whispers turned to complete silence. 
    /The flow returns me to the shore...alone, standing on that sandy floor. 
    /I have to go back to that clear blue sea, for what lies beyond i cannot see. 
    /All I know is my love for you will always be, as I navigate this unrelenting sea.",
    user_id: 4}
])
