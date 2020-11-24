const { request, response } = require('express');
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Posisi } = require('../models/posisi');
//=> localhost:3000/position/
// router.get('/', (req, res) => {
// 	Posisi.find((err, docs) => {
// 		if (!err) { res.send(docs);}
// 		else { console.log('Error in Retriving Posisi :' + JSON.stringify(err, undefined, 2));}
// 	}); 
// });

router.get('/', (req, res) => {
	Posisi.find().then(data => { res.json(data);})
	.catch(err => {res.json(err);});
});

// router.get('/:id', (req, res) => {
// 	if (!ObjectId.isValid(req.params.id))
// 		return res.status(400).send('No recorded with given id : ${req.params.id}');
// 	Posisi.findById(req.params.id, (err, doc) => {
// 		if (!err) { res.send(doc); }
// 		else {console.log('Error in Retriving Posisi :' + JSON.stringify(err, undefined, 2));}		
// 	});
// });

router.get('/:id', (req, res) => { Posisi.findById(req.params.id)
.then(data => { res.json(data);}).catch(err => {res.json(err); }); });

// router.post('/', (req, res) =>{
// 	var pos = new Posisi({
// 		position: req.body.position,
// 	});
// 	pos.save((err, doc) => {
// 		if (!err) { res.send(doc); }
// 		else {console.log('Error in posisi Save :' + JSON.stringify(err, undefined, 2));}
// 	});
// });

router.post('/', (req, res)=> {
	var pos = new Posisi({
		position: req.body.position,
	});
	console.log(req.body);
	pos.save().then(data => { res.json(data);
	}).catch(err => {res.json(err);});
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var pos = {
		position: req.body.position,
    };
    Posisi.findByIdAndUpdate(req.params.id, { $set: pos }, { new: true}, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Error in posisi Update:' + JSON.stringify(err, undefined, 2));}
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    Posisi.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Posisi Delete:' + JSON.stringify(err, undefined, 2));}
    });
});
module.exports = router;