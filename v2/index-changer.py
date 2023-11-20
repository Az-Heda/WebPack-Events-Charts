import os

os.system('cls')

index = './src/index.js'

moduleDir = './src/moduli/'

files = os.listdir(moduleDir)
files = [ moduleDir + file for file in files if os.path.isdir(moduleDir + file)]

allFiles = []

for f in files:
	allFiles += [ '.'.join((f+'/'+tf).split('.')[:-1]) for tf in os.listdir(f) ]

with open(index, 'w') as fi:
	for f in allFiles:
		fi.write(f'import * as file{allFiles.index(f)} from "{f.replace("/src", "")}"\n')
		print(f)


# import * as file1 from "./moduli/ui/create-card";
# import * as file2 from "./moduli/logic/post-data";
# import * as file3 from "./moduli/logic/setup-endpoint";
# import * as file4 from "./moduli/ui/valid-questions";
# import * as flie5 from "./moduli/ui/cardClass";