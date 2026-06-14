const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const Mong_Url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err); 
});

async function main(){
    await mongoose.connect(Mong_Url);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj, owner: "6a2ed59b08e8744592f91dbc" }));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
}

initDB();