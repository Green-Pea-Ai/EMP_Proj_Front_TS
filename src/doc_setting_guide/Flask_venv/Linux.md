#### Ver: Ubuntu 18.04

### Anaconda 다운로드
https://www.anaconda.com/products/individual
<br/><br/>

**설치**

    sh 설치파일명.sh

설치할 때 설치경로가 나오는데 적어둡니다.

/home/유저명/anaconda3
<br/><br/>

설치 마지막에 conda init? 하겠냐고 하면 yes 선택.

터미널을 껐다가 켭니다.
<br/><br/>

**버전 확인**

    conda --version
    conda 4.8.3 버전이 확인됩니다.

    python --version
    Python 3.8.3 버전이 확인됩니다.

**VS Code를 설치합니다.**

https://code.visualstudio.com/download

    sudo dpkg -i 파일명.deb


**가상환경 생성 및 파이썬 3.7 설치**

    conda create -n my_python_env python=3.7

**가상환경 활성화**

    conda activate my_python_env


**(my_python_env) 로 시작하는 사용자 경로가 확인됩니다.**

**파이썬 버전을 확인해봅니다.**

    python --version

    3.7 버전이 확인됩니다.
    Python 3.7.9

**가상환경에서 flask 설치**

    pip3 install flask

작업을 진행할 폴더를 터미널에서 만들고 해당 폴더 위치로 이동합니다.

    code .
    VS Code를 띄웁니다.

파이썬 extension을 설치하라는 창이 나오면 설치합니다.

pylint는 conda로 설치를 했습니다.


**hello.py 파일을 만든 뒤 아래 코드를 입력합니다.**
```
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
     return 'Hello World!'

if __name__ == '__main__':
     app.run()
```
**hello.py 파일 실행.**

    python hello.py

**localhost:5000 주소로 접속하여 헬로월드 메시지 확인**
<br/><br/>

가상환경 비활성화

    conda deactivate

가상환경 삭제

    conda remove -n my_python_env —all

가상환경 리스트 확인

    conda env list