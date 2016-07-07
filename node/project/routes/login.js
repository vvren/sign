var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
	res.render('login');
});

router.post('/dologin',function(req,res){
	var name=req.body.uname;
	var pwd=req.body.upwd;
	var users=req.app.locals.users;
	for(var i=0;i<users.length;i++){
		if (name==users[i].account&&pwd==users[i].pwd) {
			req.session.curUser=users[i];
			break;
		};
	}
	if (req.session.curUser) {
		res.redirect('/main');
	}else{
		res.send('登录失败');
	}

});
module.exports=router;