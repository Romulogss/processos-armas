import subprocess as cmd
from sys import argv
entrada = argv
if entrada[2] == 'h':
    cmd.run('git push heroku master', check=True, shell=True)
else:
    cmd.run('git add .', check=True, shell=True)
    cmd.run(f'git commit -m "{entrada[1]}"', check=True, shell=True)
    cmd.run('git push origin master', check=True, shell=True)
cmd.run("echo 'repositório atualizado com sucesso!'", check=True, shell=True)    