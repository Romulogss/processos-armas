import subprocess as cmd
from sys import argv
entrada = argv
cmd.run('git add .', check=True, shell=True)
cmd.run(f'git commit -m "{entrada[1]}"')
if entrada[2] == 'h':
    cmd.run('git push heroku master')
else:
    cmd.run('git push origin master')
cmd.run("echo 'repositório atualizado com sucesso!'")    