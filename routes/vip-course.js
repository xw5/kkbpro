var express = require('express');
var router = express.Router();
var createError = require('http-errors');// 创建错误对象

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect("/vipcourse/web");
});

router.get('/:course', function(req, res, next) {
  const {course} = req.params;
  const title = getTitle(res, course);
  if (title) {
    res.render('vip-course/'+course, {course,title});
  } else {
    res.redirect("/vipcourse/web");// 重定向
  }
});

function getTitle(res, course){
  const courses = res.locals.courses;
  for(let i=0,len=courses.length;i<len;i++) {
    if (courses[i].url.indexOf(course) != -1) {
      return courses[i].name
    }
  }
}


module.exports = router;
