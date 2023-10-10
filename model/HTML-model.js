const _pokemonKoreaName = require('./pokemon-package-model');
const setMakeLiTagPokemonList = require('./make-li-tag-model')

// 포켓몬스터 한글 배열이 정상적으로 들어왔는지 확인하기 위해 출력해보기
// console.log(_pokemonKoreaName);
// li 태그 만들어주는 모듈이 정상적으로 들어왔는지 확인하기 위해 출력해보기
// console.log(typeof(setMakeLiTagPokemonList)) // function


const HTMLTemplate = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokemon List</title>
</head>
<body>
  <h1>Pokemon List</h1>
  <ul>
    ${setMakeLiTagPokemonList(_pokemonKoreaName)}
  </ul>
</body>
</html>
`;

// 정상적으로 조립되었는지 확인 
// HTML을 제작하는 것이긴 하나, html로 해석되기전에는 단순 문자열 조합일 뿐이다.
// server가 html로 해석해서 보여줄 것이다.
// console.log(HTMLTemplate);

module.exports = HTMLTemplate;