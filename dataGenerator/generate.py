import json
import random

#
# with open('./names') as nameFile:
#     namesList = nameFile.readlines()
# namesList = [x.strip() for x in namesList]
# namesList = [x.strip(',') for x in namesList]
#
# with open('./streetNames') as streetNames:
#     streetNamesList = streetNames.readlines()
#
# streetNamesList = [x.strip() for x in streetNamesList]
# streetNamesList = [x.strip(',') for x in streetNamesList]
#
#
# streetNameAbrevs = ["St","Dr","Rd","Ave","Cir","Ct"]
#
# print(streetNamesList)
#
#
# dictionary = {
#     "name":"jake",
#     "age":31,
#     "gender":"male"
# }
#
# ExportUser = {}
#
#
# newUser = {
# 	"user_name":"Grace Hopper",
# 	"user_address":"123 straight st",
# 	"user_email":"address@email.com",
# 	"user_phone":"1597534561",
# 	"user_cart":{
#
# 		"items": [
# 			"5ea66b8aee05f74b7da65ee6",
# 			"5ea66bafee05f74b7da65ee7"
# 			],
# 		"total": 0,
# 		"formattedTotal": "0.0"
# 	},
# 	"user_active": True
# }
#
# json_object = json.dumps(newUser, indent = 4)
#
# with open("users.json", "w") as outfile:
#     outfile.write(json_object)


def newUserGen(names, streetNames, streetNameAbrevs):
    newUser = {
    	"user_name":random.choice(names),
    	"user_address":(str)(random.randint(100,1000))+" "+random.choice(streetNames)+" "+random.choice(streetNameAbrevs),

    	"user_email":"address@email.com",
    	"user_phone":(str)(random.randint(1000000000,10000000000)),
    	"user_cart":{

    		"items": [
    			"5ea66b8aee05f74b7da65ee6",
    			"5ea66bafee05f74b7da65ee7"
    			],
    		"total": 0,
    		"formattedTotal": "0.0"
    	},
    	"user_active": True
    }

    return newUser

def main():

    with open('./names') as nameFile:
        namesList = nameFile.readlines()
    namesList = [x.strip() for x in namesList]
    namesList = [x.strip(',') for x in namesList]

    with open('./streetNames') as streetNames:
        streetNamesList = streetNames.readlines()

    streetNamesList = [x.strip() for x in streetNamesList]
    streetNamesList = [x.strip(',') for x in streetNamesList]


    streetNameAbrevs = ["St","Dr","Rd","Ave","Cir","Ct"]

    # print(streetNamesList)
    #
    #
    # dictionary = {
    #     "name":"jake",
    #     "age":31,
    #     "gender":"male"
    # }
    #
    # ExportUser = {}
    #
    #
    # newUser = {
    # 	"user_name":"Grace Hopper",
    # 	"user_address":"123 straight st",
    # 	"user_email":"address@email.com",
    # 	"user_phone":"1597534561",
    # 	"user_cart":{
    #
    # 		"items": [
    # 			"5ea66b8aee05f74b7da65ee6",
    # 			"5ea66bafee05f74b7da65ee7"
    # 			],
    # 		"total": 0,
    # 		"formattedTotal": "0.0"
    # 	},
    # 	"user_active": True
    # }


    newUser = newUserGen(namesList, streetNamesList, streetNameAbrevs)

    json_object = json.dumps(newUser, indent = 4)

    with open("users.json", "w") as outfile:
        outfile.write(json_object)

main()
