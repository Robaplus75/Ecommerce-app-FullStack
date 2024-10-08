import requests

image_file = open('../frontend/src/assets/Images/bag.jpg', 'rb')

endpoint = "http://localhost:8000/products/create/"

data = {"name":"Bag", "price":24.00}
file = {"image":image_file}

print("sending Post request")

get_response = requests.post(endpoint, data=data, files=file)

print(get_response.json())
