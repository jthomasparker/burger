var express = require('express')
var burger = require('../models/burger.js')
var router = express.Router();
//module.exports = function(app){
router.get('/', function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.put('/api/burgers/:id', function(req, res){
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        console.log(result)
        res.end()
         //  if(res.changedRows === 0){
         //      return res.sendStatus(404).end();
         //  }  else {
          //     res.sendStatus(200).end() //redirect('/')
         //  }
        }
    )
})

//}
module.exports = router;