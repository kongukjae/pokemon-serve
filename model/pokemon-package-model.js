const _pokemon = require('pokemon');
// 제공해주는 라이브러리가 지원하는 메서드 Usage 참고하여 확인
// console.log(_pokemon.all("ko"));

/**
 * 
 * 코드 자체에 기능적인 부분은 큰의미가 없지만,
 * 분리해서 관리한다는 것이 매우 중요하다.
 * '한번에 한가지 일만 하라'는 원칙을 지키기 위해서
 * 코드를 분리해서 관리하고 있다.
 * 처음에는 불편하지만, 애플리케이션의 규모가 커질수록
 * '분류관리'가 매우 중요하다.
 */

module.exports = _pokemon.all("ko");

