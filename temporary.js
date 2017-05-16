var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 7575;

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
                    {"url":"https://unsplash.it/200/301/?random"},
                    {"url":"https://unsplash.it/200/302/?random"},
                    {"url":"https://unsplash.it/200/303/?random"},
                    {"url":"https://unsplash.it/200/304/?random"},
                    {"url":"https://unsplash.it/200/305/?random"},
                    {"url":"https://unsplash.it/200/306/?random"},
                    {"url":"https://unsplash.it/200/307/?random"},
                    {"url":"https://unsplash.it/200/308/?random"},
                    {"url":"https://unsplash.it/200/309/?random"},
                    {"url":"https://unsplash.it/200/310/?random"},
                    {"url":"https://unsplash.it/200/311/?random"},
                    {"url":"https://unsplash.it/200/312/?random"},
                    {"url":"https://unsplash.it/200/313/?random"},
                    {"url":"https://unsplash.it/200/314/?random"},
                    {"url":"https://unsplash.it/200/300/?random"},
                    {"url":"https://unsplash.it/200/300/?random"},
                    {"url":"https://unsplash.it/200/300/?random"},
                    {"url":"https://unsplash.it/200/300/?random"},
                    {"url":"https://unsplash.it/200/300/?random"},
                    {"url":"https://unsplash.it/200/300/?random"},
                    {"url":"https://unsplash.it/200/300/?random"},
                    {"url":"https://unsplash.it/200/300/?random"}
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
console.log('监听7575成功')
