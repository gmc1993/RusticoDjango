import json

with open('data.json') as user_file:
  data_nosotros = user_file.read()

print(data_nosotros)