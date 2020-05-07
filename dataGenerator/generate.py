import json

dictionary = {
    "name":"jake",
    "age":31,
    "gender":"male"
}

json_object = json.dumps(dictionary, indent = 4)

with open("users.json", "w") as outfile:
    outfile.write(json_object)
