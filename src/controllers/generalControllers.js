const db = require('../database/models')
module.exports ={
    home: function(req, res) {
        db.Notitas.findAll()
        .then(function(notas){
            return res.render('index',{notas:notas})

        })         
    },
    create: function(req, res){
        db.Notitas.create({
            titulo: req.body.title,
            texto: req.body.texto
        })
        .then(function(){
            res.redirect('/')
        })
        },
    detail:function(req,res){
            db.Notitas.findByPk(req.params.id)   
            .then(function(nota){
                return res.render('detail',{nota})
            })      
         },
    upDate:function(req,res){
        db.Notitas.update({
            titulo : req.body.newTitle,
            texto : req.body.newText
        },{
            where:{
                id : req.params.id
            }
        })

        .then(function(edit){
            res.redirect('/')

        })
    },      
    delete:function(req,res){
        db.Notitas.destroy({
            where : {
                id: req.params.id
            }
        }) 
        .then (function(borrar){
            res.redirect('/')
        })
    },
    

    
   }