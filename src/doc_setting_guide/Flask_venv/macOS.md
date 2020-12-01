#### Ver: Sierra 10.12 

### Anaconda 설치 - gui 방식
https://www.anaconda.com/products/individual

90% 설치 상태에서 오래걸릴 수 있습니다.<br/><br/>

**설치완료 후 경로 확인**

zsh(터미널)에서 cd 명령어 등을 사용해 아래 경로로 이동합니다.

    "Users/유저이름/opt/anaconda3/bin/"

bin 폴더까지 이동했다면 pwd 명령어로 현재 위치를 찍어본다.
Finder로 이동하면 폴더가 보이지 않아서 확인이 어렵다.
opt 폴더는 없을 수도 있습니다.

**설정파일 열기**

    vi ~/.zshrc

**환경변수 설정**

아래 두 개의 경로 중에 하나를 사용하면 된다.
pwd로 현재 위치를 찍었을 때 나오는 경로를 먼저 사용해본다.

    export PATH="/opt/anaconda3/bin:$PATH" 
    export PATH="Users/유저이름/opt/anaconda3/bin:$PATH"

**환경변수 설정 적용(zsh 기준)**
    
    exec $SHELL

**아나콘다 환경변수 설정 확인**
    
    conda —version


**일반 환경에서 파이썬 버전 확인**

    python —version
python 3.8.3이 확인된다.<br/><br/>


**가상환경 생성 및 파이썬 3.7 설치**

    conda create -n my_python_env python=3.7

create 진행 시 오류가 발생하는 경우 아래 명령어를 적용합니다.

    conda init zsh

**가상환경 활성화**

    conda activate my_python_env

shell의 내 컴퓨터 이름 앞에 (my_python_env)처럼
내가 설정했던 가상환경의 이름이 나오는지 확인해본다.

**플라스크 설치**

    pip3 install flask

**가상환경에서의 파이썬 버전확인**

    python --version
가상 환경 생성 시 설정해주었던 python 3.7.9가 확인된다.<br/><br/>

**VS Code 실행 후 헬로월드 출력하기**

zsh에서 진입한 폴더 경로에서 VS Code를 실행합니다.

    code .


hello.py 파일을 생성 후 아래 코드를 입력.

python extension 설치 메시지가 나오면 설치를 진행합니다.
```
hello.py
from flask import Flask
app = Flask(name)
@app.route('/')
def hello_world():
return 'Hello World!'
if name == 'main':
app.run()
```
hello.py 파일 실행.

    python hello.py

**localhost:5000 주소로 접속하여 헬로월드 메시지 확인**
<br/><br/>

**VS Code 실행 명령어가 작동하지 않는 경우 설정법.**

설정 파일 열기

    vi ~/.zshrc

설정 파일 맨 밑에 코드 입력

    code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}

입력한 코드 적용

    source ~/.zshrc


**가상환경 비활성화**

    conda deactivate

**가상환경 삭제**

삭제시에는 아래 명령어 사용을 권장합니다.

    conda remove -n my_python_env —all

아래 명령어로 삭제 후 conda env list로 확인했을 때 세마포어 누출 발생.

    conda env remove -n my_python_env

가상환경 제거가 완료되면 터미널 종료 후 다시 실행합니다.
<br/><br/>

**가상환경 리스트 확인**

가상환경이 잘 제거됐는지 확인합니다.

    conda info —envs
    또는 conda env list