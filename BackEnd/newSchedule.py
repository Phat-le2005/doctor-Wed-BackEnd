import json

def generate_schedule_data_v4():
    data = []
    for doctor_id in range(35, 36):  # doctorId từ 31 đến 34
        room_id = doctor_id * 3  # roomId: 93, 96, 99, 102
        base_specialty = ((doctor_id - 31) * 2) % 3 + 27  # specialtyId từ 27 đến 29
        specialty_ids = [(base_specialty + i - 27) % 3 + 27 for i in range(2)]  # 2 specialtyId mỗi doctor
        
        for specialty_id in specialty_ids:
            for hour in range(5):  # 5 khung giờ mỗi specialty
                start_hour = 7 + hour
                end_hour = start_hour + 1
                data.append({
                    "doctorId": doctor_id,
                    "roomId": room_id,
                    "specialtyId": specialty_id,
                    "currentNumber": 0,
                    "maxNumber": 5,
                    "startTime": f"{start_hour}:00",
                    "endTime": f"{end_hour}:00",
                    "isAvaiable": False
                })
    return data
schedule_data_v4 = generate_schedule_data_v4()

# Lưu vào file JSON
file_path_v4 = "schedule6.json"
with open(file_path_v4, "w", encoding="utf-8") as f:
    json.dump(schedule_data_v4, f, ensure_ascii=False, indent=2)
