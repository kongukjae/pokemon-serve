// 내장모듈 불러오기
const http = require('http');
// 외부모듈 불러오기(내가 만든 모듈)
const HTMLTemplate = require('./model/HTML-model');

const contentType = {
  'Content-Type': 'text/html',
  'charset': 'utf-8',
}

// 서버 생성
const server = http.createServer(function(request, response){

  if(request.method === 'GET' && request.url === '/'){
    // 200 코드는 정상적으로 응답했다는 의미이다.
    response.writeHead(200, contentType);
    response.end(HTMLTemplate);
  } else{
    // 404 코드와 함께 페이지를 찾을 수 없음을 알려주는 응답을 보낸다.
    response.writeHead(404, contentType);
    response.end('<h1>페이지 요청데이터를 찾을 수 없을 때 404에러를 응답하는 것이 HTTP 프로토콜</h1>');
  }

});

server.listen(3000, function(){
  console.log('서버가 가동중입니다. 끄려면 Ctrl + C를 누르세요.');
});