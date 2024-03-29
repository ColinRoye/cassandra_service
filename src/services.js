const debug = require("./debug");
const env = require("./env");
const db = require("./database");
const uuid = require("uuid/v1")

//export db agnostic services
module.exports={
     deposit: async (filename, contents, res, used)=>{
          return db.deposit(filename, contents, res);
     },
     retrieve: async(filename, res)=>{
          return db.retrieve(filename, res)
     },
     delete: async(filename, res)=>{
          return db.delete(filename, res)
     },
     getUsed: async(filename, res)=>{
          return db.getUsed(filename, res)
     },
     setUsed: async(filename, res)=>{
          return  db.setUsed(filename, res)
     }
}
