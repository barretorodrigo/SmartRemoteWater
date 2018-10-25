import json
import requests

url = 'http://localhost/hydrometer/values'
data = {
        "hydrometer": "1",
        "time": "9",
        "value": "6"
    }

data_json = json.dumps(data)
headers = {'Content-type': 'application/json'}
response = requests.post(url, data=data_json, headers=headers)

print 'hello'
