import json
import requests

url = 'https://api.rbarreto.com.br/values'
data = {
        "hydrometer": "2",
        "time": "12",
        "value": "60"
    }

data_json = json.dumps(data)
headers = {'Content-type': 'application/json'}
response = requests.post(url, data=data_json, headers=headers)

print 'hello'
