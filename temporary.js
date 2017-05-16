var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 8888;

var server = http.createServer(function(req,res){
    var temp = url.parse(req.url,true)
        path = temp.pathname,
        query = temp.query,
        method = req.method

        switch(path){
            case '/' :
                var string = fs.readFileSync('./index.html')
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(string)
                break
            case '/style.css':
                var string = fs.readFileSync('./style.css')
                res.setHeader('Content-Type','text/css')
                res.end(string)
                break
            case '/loadmore' :
                res.setHeader('Content-Type','text/plain')
                var page = query.page
                var leng = 2
                var data = [
                    {"url":"https://ooo.0o0.ooo/2017/05/16/591a87ef82737.jpg"},
                    {"url":"https://ooo.0o0.ooo/2017/05/16/591a87ef82737.jpg"},
                    {"url":"https://ooo.0o0.ooo/2017/05/16/591a87ef82737.jpg"},
                    {"url":"https://ooo.0o0.ooo/2017/05/16/591a87ef82737.jpg"},
                    {"url":"https://ooo.0o0.ooo/2017/05/16/591a87ef82737.jpg"},
                    {"url":"https://ooo.0o0.ooo/2017/05/16/591a87ef82737.jpg"},
                
                ]
                console.log(data.slice(page,page+2))
                res.end(JSON.stringify(data.slice(page,page+2)))
                break
            default :
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end('找不到对应路径，你需要自行修改index.js')
        }
        console.log(method+' '+ req.url)
})
server.listen(port)
console.log('监听8888成功')
