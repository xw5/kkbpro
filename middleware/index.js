module.exports.initLocals = function(req, res, next){
    res.locals.courses = [
        {
            url:'/vipcourse/web',
            icon:'https://img.kaikeba.com/web_menu.png',
            name:'WEB全栈架构师',
            desc:'授课对标百度p6...',
            cooperation:[
                'https://img.kaikeba.com/baidu.png',
                'https://img.kaikeba.com/toutiao.png'
            ],
            poster:'https://img.kaikeba.com/web_vip.png'
        },{
            url:'/vipcourse/python',
            icon:'https://img.kaikeba.com/python_menu.png',
            name:'PYTHON爬虫班',
            desc:'授课对标百度p6...',
            cooperation:[
                'https://img.kaikeba.com/baidu.png',
                'https://img.kaikeba.com/toutiao.png'
            ],
            poster:'https://img.kaikeba.com/python_vip_new.png'
        },{
            url:'/vipcourse/ai',
            icon:'https://img.kaikeba.com/robot_menu.png',
            name:'人工智能',
            desc:'授课对标百度p6...',
            cooperation:[
                'https://img.kaikeba.com/baidu.png',
                'https://img.kaikeba.com/toutiao.png'
            ],
            poster:'https://img.kaikeba.com/robot_vip_new.png'
        }
    ];
    next();// 进入后续中间件
}