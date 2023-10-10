// 포켓몬스터 한글 배열을 HTML li 태그로 만들어주는 함수
function setMakeLiTagPokemonList(pokemonKoreaName) {
  if (Array.isArray(pokemonKoreaName) === true) {
    let arrayLiTagPokemonList = [];
    for (let i = 0; i < pokemonKoreaName.length; i++) {
      arrayLiTagPokemonList.push(`<li>${pokemonKoreaName[i]}</li>`);
    }
    return arrayLiTagPokemonList.join("");
  } else {
    return new Error("배열이 아닙니다.");
  }
}

module.exports = setMakeLiTagPokemonList;

/**
 * 직관성을 위해 li 태그를 제작하는 함수를 별도로 만들어,
 * 기능적인 부분에서는 안티패턴이다.(조금 더 포괄적으로 수용하도록 작성하는 것이 좋다.)
 *
 * 오로지 '한가지 일' 만을 수행하는 함수를 만들어야 한다.
 *
 * 위의 함수는 '배열'이여야만 작동하게끔 조정했고,
 * 문자열 <li>포켓몬명</li> 에서 li 태그는 리터럴이기 때문에 
 * 좋은 방법이 아니다.
 * 매개변수 약간 더 조정하면, 조금 더 유연하게 만들어 볼 수 있다.
 * 
 * 모듈이므로 거의 모든 경우 리턴이 필요하다.
 * 리턴이 없는 모듈은 별도로 관리한다.
 */
