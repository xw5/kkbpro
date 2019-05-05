module.exports.initLocals = function(req, res, next){
    res.locals.courses = [
        {
            url:'/vipcourse/web',
            icon:'https://img.kaikeba.com/web_menu.png',
            name:'WEB全栈架构师',
            desc:'授课对标百度p6...'
        },{
            url:'/vipcourse/python',
            icon:'https://img.kaikeba.com/python_menu.png',
            name:'PYTHON爬虫班',
            desc:'授课对标百度p6...'
        },{
            url:'/vipcourse/ai',
            icon:'https://img.kaikeba.com/robot_menu.png',
            name:'人工智能',
            desc:'授课对标百度p6...'
        }
    ];
    next();// 进入后续中间件
}