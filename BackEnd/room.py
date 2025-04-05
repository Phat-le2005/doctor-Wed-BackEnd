import json

# Define the rooms data
rooms_data = [
    {"roomNumber": i, "floor": f, "roomDescription": f"Khoa {['Tiêu Hóa', 'Tim Mạch', 'Thần Kinh', 'Noi Tiet', 'Tai-Mui-Hong', 'Phụ Sản', 'Hô Hấp'][i % 7]}", "toa": "A"} 
    for f in range(1, 9) 
    for i in range(1, 13)
] + [
    {"roomNumber": i, "floor": f, "roomDescription": f"Khoa {['Tiêu Hóa', 'Tim Mạch', 'Thần Kinh', 'Noi Tiet', 'Tai-Mui-Hong', 'Phụ Sản', 'Hô Hấp'][i % 7]}", "toa": "B"} 
    for f in range(1, 9) 
    for i in range(1, 13)
] + [
    {"roomNumber": i, "floor": f, "roomDescription": f"Khoa {['Tiêu Hóa', 'Tim Mạch', 'Thần Kinh', 'Noi Tiet', 'Tai-Mui-Hong', 'Phụ Sản', 'Hô Hấp'][i % 7]}", "toa": "C"} 
    for f in range(1, 9) 
    for i in range(1, 13)
]

# Write to a json file
file_path = 'rooms_data.json'
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(rooms_data, f, ensure_ascii=False, indent=4)

