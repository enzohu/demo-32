#!/user/bin/env node
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
                var string = fs.readFileSync('./data.json','utf8')
                res.setHeader('Content-Type','text/plain')
                
                var page = query.page
                var leng = 2
                var arr2 = string.split(/, */)
                //console.log(arr2,'22222222222')
                var arr = []
                arr2.forEach(function(ele){
                    arr.push(ele.replace(/\[*\]* *(\r\n)* */g,''))
                })
                //console.log(page+2,44444444)
                res.end(JSON.stringify(arr.slice(page,parseInt(page)+2)))
                break
            default :
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end('找不到对应路径，你需要自行修改index.js')
        }
        console.log(method+' '+ req.url)
})
server.listen(port)
console.log('监听7575成功')
