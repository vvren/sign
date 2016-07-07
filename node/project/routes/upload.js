var express=require('express');
var router=express.Router();
var multer=require('multer');

var up=multer({dest:'./public/uploads'});
router.get('/',function(req,res){
	res.render('fileUpload');
});
//single一次上传单个文件 array 多个  file files
// router.post('/upload',up.array('imgfile',2),function(req,res){
// 	res.json(req.files);
// });
router.post('/upload',function(req,res){
	var upload=up.array('imgfile',2);
	upload(req,res,function(err){
		if (err) {
			res.send('上传文件不得多于2个！');
		}else{
			//res.json(req.files);
			res.json(req.body);
		}

	});
});
module.exports=router;