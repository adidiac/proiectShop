const mongoose = require('mongoose');

const uri = "mongodb+srv://student:student@cluster0.2ck4s.mongodb.net/magazin?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})



const User=require('./UserSchema');
const Product=require('./ProductSchema');

//add a user to the database with 0 orders and role normal
function addNormalUser(name,email,password){
    var user=new User({
        name:name,
        email:email,
        password:password,
        role:"normal",
        orders:[]
    });
    user.save(function(err,user){
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
        }
    }
    );
}

//add a user to the database with 0 orders and role admin
function addAdminUser(name,email,password){
    var user=new User({
        name:name,
        email:email,
        password:password,
        role:"admin",
        orders:[]
    });
    user.save(function(err,user){
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
        }
    }
    );
}
//add a product to the database
function addProduct(name,price,description,image){
    var product=new Product({
        name:name,
        price:price,
        description:description,
        image:image
    });
    product.save(function(err,product){
        if(err){
            console.log(err);
        }
        else{
            console.log(product);
        }
    }
    );
}

addNormalUser("Alexandru George","alexandrugeorge@gmail.com","123456"); 
addAdminUser("admin","admin@gmail.com","123456");
//will add auto pieces of products to the database
addProduct("Disc frana",100,`Gaura bolt roata-? [mm] 14,5,Grosime minima [mm] 16 ,Grosime disc frâna [mm] 17,9,Tip disc frâna,ventilat,Înaltime [mm] ,43,2 ,Partea de montare punte fata")`,"http://localhost:3000/disc_frana.png");
addProduct("Cauciucuri Schimbare",50,`Tip	
Anvelope de iarnă

Model	WR D4
Latime	195
Inaltime	65
Diametru	R15
Indice sarcina	91
Indice viteza	T`,"http://localhost:3000/cauciucuri.png");
addProduct("Baterie",500,`Tip: Auto
Voltaj: 12V
Capacitate: 72Ah
Curent de pornire: 600A
Lungime: 278 mm
Latime: 175 mm
Inaltime: 190 mm`,"http://localhost:3000/baterie.png");
addProduct("Filtru combustibil",69,`Diametru exterior
78
Diametru interior [mm]
12
Înaltime [mm]
1360`,"http://localhost:3000/filtru_combustibil.png");
addProduct("usa",300,"usa de schimb orice model","http://localhost:3000/usa.png");
addProduct("bujie",10,`Numar motor TECDOC: 123
Distanta dintre electrozi [mm]: 0,7
Deschidere cheie: 20,8 mm
Filet exterior [mm]: 14,0
Lungime filet [mm]: 19,0`,"http://localhost:3000/bujie.png");
addProduct("maneta",400,"maneta de schimb orice model","http://localhost:3000/maneta.png");
addProduct("motor",2000,"motor de schimb orice model","http://localhost:3000/motor.png");