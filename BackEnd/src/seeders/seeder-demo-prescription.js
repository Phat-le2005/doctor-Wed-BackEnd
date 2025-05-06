'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('prescriptions',[
        {
          "medicineName": "Omeprazole",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Lansoprazole",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Pantoprazole",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Metronidazole",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Domperidone",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Esomeprazole",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Rabeprazole",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Cimetidine",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Không uống chung với sữa"
        },
        {
          "medicineName": "Ranitidine",
          "dosage": "1 viên tối",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Famotidine",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Không uống chung với sữa"
        },
        {
          "medicineName": "Insulin",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Metformin",
          "dosage": "1 viên sáng",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Levothyroxine",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Không uống chung với sữa"
        },
        {
          "medicineName": "Glimepiride",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Sitagliptin",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Gliclazide",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Pioglitazone",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Glucophage",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống trước khi ăn"
        },
        {
          "medicineName": "Acarbose",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Uống trước khi ăn"
        },
        {
          "medicineName": "Rosiglitazone",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Aspirin",
          "dosage": "1 viên/ngày",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Atorvastatin",
          "dosage": "1 viên sáng",
          "usageInstruction": "Uống trước khi ăn"
        },
        {
          "medicineName": "Lisinopril",
          "dosage": "1 viên/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Metoprolol",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Amlodipine",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Clopidogrel",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Không uống chung với sữa"
        },
        {
          "medicineName": "Simvastatin",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Không uống chung với sữa"
        },
        {
          "medicineName": "Ramipril",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Hydrochlorothiazide",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Furosemide",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Gabapentin",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Carbamazepine",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Diazepam",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Phenytoin",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Levodopa",
          "dosage": "1 viên tối",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Valproic acid",
          "dosage": "1 viên/ngày",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Topiramate",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Clonazepam",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Lamotrigine",
          "dosage": "1 viên/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Baclofen",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Cetirizine",
          "dosage": "1 viên/ngày",
          "usageInstruction": "Không uống chung với sữa"
        },
        {
          "medicineName": "Loratadine",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Amoxicillin",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống trước khi ăn"
        },
        {
          "medicineName": "Clarithromycin",
          "dosage": "1 viên tối",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Pseudoephedrine",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Dexamethasone",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Fluticasone",
          "dosage": "1 viên tối",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Budesonide",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Diphenhydramine",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Azithromycin",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Ferrous sulfate",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Folic acid",
          "dosage": "1 viên sáng",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Dydrogesterone",
          "dosage": "1 viên sáng",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Progesterone",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống vào buổi sáng"
        },
        {
          "medicineName": "Magnesium B6",
          "dosage": "1 viên sáng",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Calcium carbonate",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Vitamin D3",
          "dosage": "1 viên sáng",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Ibandronate",
          "dosage": "1 viên sáng",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Estradiol",
          "dosage": "1 viên tối",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Medroxyprogesterone",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Salbutamol",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Budesonide",
          "dosage": "1 viên tối",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Theophylline",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Không dùng khi đói"
        },
        {
          "medicineName": "Montelukast",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Fluticasone",
          "dosage": "1 viên sáng",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Tiotropium",
          "dosage": "10ml/lần, 2 lần/ngày",
          "usageInstruction": "Uống trước khi ăn"
        },
        {
          "medicineName": "Formoterol",
          "dosage": "20 giọt/lần, 3 lần/ngày",
          "usageInstruction": "Lắc đều trước khi uống"
        },
        {
          "medicineName": "Prednisone",
          "dosage": "1 viên/ngày",
          "usageInstruction": "Uống sau ăn"
        },
        {
          "medicineName": "Bromhexine",
          "dosage": "1 ống/ngày",
          "usageInstruction": "Uống trước khi ngủ"
        },
        {
          "medicineName": "Cromolyn sodium",
          "dosage": "2 viên/ngày",
          "usageInstruction": "Uống sau ăn"
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prescriptions', null, {});
}
};
