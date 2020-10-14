#### Ver: Windows 10<br/><br/>

### 1. Anaconda 설치<br/>
https://www.anaconda.com/products/individual

Add Anaconda my PATH 옵션 체크하여 설치 진행.<br/><br/>


**관리자 권한으로 명령 프롬프트를 실행**

**적당한 경로에 가상환경에 사용할 폴더를 만든다.**<br/>
C:\Users\유저이름\폴더이름\flask_venv<br/><br/>


    2. conda create -n my_python_env python=3.7
가상환경 생성과 파이썬을 같이 설치하는 명령어입니다.

이 과정은 시간이 오래걸릴 수 있습니다.

    3. 설치 완료 후 activate my_python_env 입력

(my_python_env) C:\User\유저명
위와 같은 형태로 명령줄이 바뀌는 것을 확인한다.<br/><br/>

    4. 가상환경에서 pip install Flask로 Flask를 설치한다.

처음에 생성한 디렉터리 경로가 맞는지 확인 후

    code .

VS Code가 실행되면 hello.py 파일을 만들어 아래 코드를 입력합니다.
```
from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
  return 'Hello World!'
if __name__ == '__main__':
  app.run()
```
    5. python hello.py 를 입력하여 Flask 서버를 실행합니다.

localhost:5000 서버로 접속하여
Hello World! 메시지가 표시되는지 확인하면 끝.<br/><br/>


## 기타 명령어
가상환경 생성

    conda create -n my_python_env

파이썬 설치

    conda install python=3.7

가상환경 종료 명령어

    conda deactivate

가상환경 삭제 명령어

    conda env remove -n my_python_env

가상환경 리스트 보기

    conda env list