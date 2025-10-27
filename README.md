# javascript-racingcar-precourse

1. 자동차 이름 처리  
   [Input] 사용자에게 경주할 자동차 이름 입력을 받는다.  
   [Logic] 입력받은 문자열을 쉼표(,) 기준으로 분리한다. (e.g., "pobi,woni,jun" -> ['pobi', 'woni', 'jun'])  
   [Logic] 분리된 이름 배열이 5자 이하 등 유효한지 검사한다. ([ERROR] 발생)

2. 시도 횟수 처리  
   [Input] 사용자에게 시도할 횟수 입력을 받는다. (App.js의 run 담당)  
   [Logic] 입력받은 횟수가 1 이상의 숫자인지 검사한다. ([ERROR] 발생)

3. 경주 진행  
   [Data] 자동차 이름 목록으로 자동차 객체(또는 클래스) 목록을 생성한다. (e.g., [{ name: 'pobi', position: 0 }, ...])  
   [Logic] 자동차 한 대가 무작위 값(0~9)을 받아 4 이상일 경우 전진하는 기능을 구현한다.  
   (Random.pickNumberInRange가 4를 반환할 때, 3을 반환할 때를 각각 테스트)  
   [Logic] 모든 자동차에 대해 1라운드(1회 시도)를 실행한다.  
   [Output] 1라운드(차수)별 실행 결과를 형식에 맞게 출력한다. (e.g., pobi : -)

4. 최종 결과
   [Logic] 경주가 끝난 후, 가장 멀리 간 우승자를 찾는 기능.  
   (e.g., [{ name: 'pobi', position: 3 }, { name: 'woni', position: 5 }]을 넣으면 'woni'가 나오는지 테스트)  
   [Output] 최종 우승자를 형식에 맞게 출력한다. (공동 우승자 쉼표 구분)
