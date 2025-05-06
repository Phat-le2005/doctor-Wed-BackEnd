import json
import random

specialties = {
    "Tiêu hóa": ["Omeprazole", "Lansoprazole", "Pantoprazole", "Metronidazole", "Domperidone", 
                  "Esomeprazole", "Rabeprazole", "Cimetidine", "Ranitidine", "Famotidine"],
    "Nội tiết": ["Insulin", "Metformin", "Levothyroxine", "Glimepiride", "Sitagliptin", 
                  "Gliclazide", "Pioglitazone", "Glucophage", "Acarbose", "Rosiglitazone"],
    "Tim mạch": ["Aspirin", "Atorvastatin", "Lisinopril", "Metoprolol", "Amlodipine", 
                  "Clopidogrel", "Simvastatin", "Ramipril", "Hydrochlorothiazide", "Furosemide"],
    "Thần kinh": ["Gabapentin", "Carbamazepine", "Diazepam", "Phenytoin", "Levodopa", 
                  "Valproic acid", "Topiramate", "Clonazepam", "Lamotrigine", "Baclofen"],
    "Tai Mũi Họng": ["Cetirizine", "Loratadine", "Amoxicillin", "Clarithromycin", "Pseudoephedrine", 
                     "Dexamethasone", "Fluticasone", "Budesonide", "Diphenhydramine", "Azithromycin"],
    "Phụ sản": ["Ferrous sulfate", "Folic acid", "Dydrogesterone", "Progesterone", "Magnesium B6", 
                "Calcium carbonate", "Vitamin D3", "Ibandronate", "Estradiol", "Medroxyprogesterone"],
    "Hô hấp": ["Salbutamol", "Budesonide", "Theophylline", "Montelukast", "Fluticasone", 
               "Tiotropium", "Formoterol", "Prednisone", "Bromhexine", "Cromolyn sodium"]
}

dosages = [
    "1 viên/ngày", "2 viên/ngày", "1 viên sáng", "1 viên tối", 
    "1 ống/ngày", "10ml/lần, 2 lần/ngày", "20 giọt/lần, 3 lần/ngày"
]

instructions = [
    "Uống sau ăn", "Uống trước khi ăn", "Uống vào buổi sáng", "Uống trước khi ngủ",
    "Lắc đều trước khi uống", "Không dùng khi đói", "Không uống chung với sữa"
]

# Tạo 100 đơn thuốc với thuốc khác nhau
prescriptions = []
used = set()

# Lặp qua mỗi chuyên khoa
for specialty, medicines in specialties.items():
    for medicine in medicines:
        if len(prescriptions) >= 100:
            break
        prescription = {
            "medicineName": medicine,
            "dosage": random.choice(dosages),
            "usageInstruction": random.choice(instructions)
        }
        prescriptions.append(prescription)

# Ghi ra file
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(prescriptions, f, ensure_ascii=False, indent=2)