// Import the HTTP module
const http = require("http");
// Import the URL module
const url = require("url");

/**
 * 程序睡眠
 * @param time 毫秒
 */
const timeSleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, time);
    });
};

/**
 * 程序睡眠
 * @param second 秒
 */
const sleep = (second) => {
    return timeSleep(second * 1000);
};


function sleep_v2(time) {    
    const _exit = Date.now() + time * 1000;    
    while( Date.now() < _exit ) {}    
    return;
}

// Make our HTTP server
const server = http.createServer(async (req, res) => {
    // Set our header
    res.setHeader("Access-Control-Allow-Origin", "*")
    // Parse the request url
    const parsed = url.parse(req.url, true)
    // Get the path from the parsed URL
    const reqUrl = parsed.pathname
    // Compare our request method
    if (req.method == "GET") {
        if (reqUrl == "/") {
            // Send a JSON version of our URL query
            res.write("Hello, you sent\n" +  JSON.stringify(parsed.query))
            res.end()
        }
        if (reqUrl == "/aa") {
            console.log("/aa");
            await sleep(3);
            res.write("aaa")
            res.end();
        }
        if (reqUrl == "/json") {
            console.log("/json");
            await sleep(5);
            var obj = {name:'Ryu', job: 'Ninja', age: 29};
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(obj));
        }
    } else if (req.method == "POST") {
        if (reqUrl == "/hello") {
            res.write("hello world")
            res.end()
        }
    }
})
// Have the server listen on port 9000
server.listen(9000)