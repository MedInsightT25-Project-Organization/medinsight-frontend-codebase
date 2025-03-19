export const lagosLocalGovernments = [
	"Agege",
	"Ajeromi-Ifelodun",
	"Alimosho",
	"Amuwo-Odofin",
	"Apapa",
	"Badagry",
	"Epe",
	"Eti-Osa",
	"Ibeju-Lekki",
	"Ifako-Ijaiye",
	"Ikeja",
	"Ikorodu",
	"Kosofe",
	"Lagos Island",
	"Lagos Mainland",
	"Mushin",
	"Ojo",
	"Oshodi-Isolo",
	"Shomolu",
	"Surulere",
];

export const healthcareCenters = [
	{
		id: 1,
		name: "Akowonjo Primary Healthcare Center",
		services: [
			"General Consultation",
			"Antenatal & Postnatal Care",
			"Child Immunization",
			"Family Planning",
			"HIV/AIDS Testing & Counseling",
			"Malaria Treatment",
			"Tuberculosis Screening",
			"Health Education",
		],
		address: "Akowonjo Road, Alimosho, Lagos",
		lga: "Alimosho",
		state: "Lagos",
		country: "Nigeria",
		ratings: 2.3,
		workHours: "Monday - Friday, 8 AM - 5 PM",
	},
	{
		id: 2,
		name: "Ajegunle Primary Health Centre",
		services: [
			"General Consultation",
			"Maternity & Child Health",
			"Emergency Services",
			"HIV/AIDS Testing & Counseling",
			"Routine Immunization",
			"Nutrition & Wellness",
			"Family Planning",
		],
		address: "Boundary Road, Ajeromi-Ifelodun, Lagos",
		lga: "Ajeromi-Ifelodun",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.1,
		workHours: "Monday - Friday, 8 AM - 6 PM",
	},
	{
		id: 3,
		name: "Ikorodu General Hospital",
		services: [
			"Emergency Care",
			"Maternity & Child Health",
			"HIV/AIDS Testing & Treatment",
			"TB & Malaria Treatment",
			"Outpatient Consultation",
			"Nutritional & Health Counseling",
		],
		address: "Ijede Road, Ikorodu, Lagos",
		lga: "Ikorodu",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.5,
		workHours: "Monday - Friday, 8 AM - 6 PM",
	},
	{
		id: 4,
		name: "Badagry General Hospital",
		services: [
			"Emergency Medical Services",
			"Child & Maternal Healthcare",
			"HIV/AIDS Testing & Counseling",
			"Routine Immunization",
			"Tuberculosis & Malaria Screening",
			"Outpatient Consultation",
			"Family Planning",
		],
		address: "Suru Alaba, Badagry, Lagos",
		lga: "Badagry",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.4,
		workHours: "Monday - Saturday, 7 AM - 7 PM",
	},
	{
		id: 5,
		name: "Oshodi Primary Healthcare Center",
		services: [
			"Child Immunization",
			"Antenatal & Postnatal Care",
			"Family Planning",
			"Tuberculosis & Leprosy Treatment",
			"HIV/AIDS Counseling",
			"General Medical Consultations",
		],
		address: "Oshodi, Lagos",
		lga: "Oshodi-Isolo",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.0,
		workHours: "Monday - Friday, 8 AM - 6 PM",
	},
	{
		id: 6,
		name: "Mushin General Hospital",
		services: [
			"Emergency Medical Services",
			"General & Specialized Consultations",
			"Pediatrics & Child Health",
			"Obstetric & Gynecology",
			"Vaccination & Immunization",
			"HIV/AIDS Testing & Treatment",
			"Family Planning & Reproductive Health",
		],
		address: "Isolo Road, Mushin, Lagos",
		lga: "Mushin",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.5,
		workHours: "Monday - Saturday, 7 AM - 8 PM",
	},
	{
		id: 7,
		name: "Surulere Primary Healthcare Center",
		services: [
			"General Medical Consultation",
			"Family Planning",
			"HIV/AIDS Screening & Counseling",
			"Maternity & Antenatal Services",
			"Vaccination & Immunization",
			"Diabetes & Hypertension Screening",
			"Emergency Services",
		],
		address: "Adeniran Ogunsanya St, Surulere, Lagos",
		lga: "Surulere",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.2,
		workHours: "Monday - Friday, 8 AM - 6 PM",
	},
	{
		id: 8,
		name: "Agege Primary Healthcare Center",
		services: [
			"General Health Consultation",
			"Immunization & Vaccination",
			"Antenatal & Postnatal Services",
			"HIV/AIDS Testing & Counseling",
			"Tuberculosis Screening",
			"Family Planning",
			"Malaria Diagnosis & Treatment",
		],
		address: "Capitol Road, Agege, Lagos",
		lga: "Agege",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.1,
		workHours: "Monday - Friday, 8 AM - 5 PM",
	},
	{
		id: 9,
		name: "Eredo Primary Healthcare Center",
		services: [
			"Emergency Medical Services",
			"Maternity & Obstetric Care",
			"HIV/AIDS Testing & Treatment",
			"Pediatrics",
			"Family Planning",
			"Tuberculosis & Malaria Screening",
			"Health Promotion",
		],
		address: "Eredo Town, Epe, Lagos",
		lga: "Eredo",
		state: "Lagos",
		country: "Nigeria",
		ratings: 4.3,
		workHours: "Monday - Friday, 8 AM - 6 PM",
	},
];

// Lab Tests
export const labTestsData = [
	// Blood Tests
	{
		id: 1,
		name: "Complete Blood Count (CBC)",
		description:
			"A CBC measures different components of your blood, including red blood cells, white blood cells, hemoglobin, hematocrit, and platelets. It helps diagnose conditions like anemia, infections, and blood disorders.",
		price: 5000,
		preparation: "No fasting required.",
		resultTime: "24 hours",
		category: "Blood Test",
		rating: 4.8,
		hospitalName: "Ajegunle Primary Health Centre",
		address: "12 Alaba Street, Ajegunle, Lagos",
	},
	{
		id: 2,
		name: "Blood Group & Rhesus Factor",
		description:
			"This test determines your blood type (A, B, AB, or O) and Rhesus (Rh) factor (positive or negative). It is essential before blood transfusions, organ transplants, and during pregnancy to prevent Rh incompatibility.",
		price: 3000,
		preparation: "No fasting required.",
		resultTime: "2 hours",
		category: "Blood Test",
		rating: 4.7,
		hospitalName: "Ikeja Primary Health Centre",
		address: "5 Oba Akran Road, Ikeja, Lagos",
	},
	{
		id: 3,
		name: "Erythrocyte Sedimentation Rate (ESR)",
		description:
			"The ESR test measures how quickly red blood cells settle at the bottom of a test tube. A higher rate may indicate inflammation due to infections, autoimmune diseases, or cancer.",
		price: 4000,
		preparation: "No fasting required.",
		resultTime: "4 hours",
		category: "Blood Test",
		rating: 4.6,
		hospitalName: "Surulere Primary Health Centre",
		address: "22 Bode Thomas Street, Surulere, Lagos",
	},

	// Infection & Disease Screenings
	{
		id: 4,
		name: "HIV Test",
		description:
			"This test detects HIV antibodies or antigens in the blood to determine if someone has been infected with the HIV virus. Early diagnosis helps with treatment and prevention.",
		price: 2000,
		preparation: "No fasting required.",
		resultTime: "30 minutes",
		category: "Infectious Disease Test",
		rating: 4.9,
		hospitalName: "Yaba Primary Health Centre",
		address: "18 Herbert Macaulay Way, Yaba, Lagos",
	},
	{
		id: 5,
		name: "Hepatitis B Surface Antigen (HBsAg) Test",
		description:
			"This test checks for Hepatitis B virus infection by detecting the Hepatitis B surface antigen (HBsAg). It is crucial for identifying chronic carriers and those at risk of liver damage.",
		price: 3500,
		preparation: "No fasting required.",
		resultTime: "24 hours",
		category: "Infectious Disease Test",
		rating: 4.8,
		hospitalName: "Ikorodu Primary Health Centre",
		address: "10 Oriwu Road, Ikorodu, Lagos",
	},

	// Chronic Disease Monitoring
	{
		id: 8,
		name: "Fasting Blood Sugar (FBS)",
		description:
			"Measures blood sugar levels after fasting for at least 8 hours. It helps diagnose and monitor diabetes and prediabetes conditions.",
		price: 3000,
		preparation: "Fasting required for 8-12 hours.",
		resultTime: "6 hours",
		category: "Diabetes Test",
		rating: 4.6,
		hospitalName: "Lekki Primary Health Centre",
		address: "7 Admiralty Way, Lekki Phase 1, Lagos",
	},
	{
		id: 9,
		name: "Lipid Profile",
		description:
			"This test evaluates cholesterol and triglyceride levels, which are essential for assessing heart disease risk and overall cardiovascular health.",
		price: 7000,
		preparation: "Fasting required for 9-12 hours.",
		resultTime: "24 hours",
		category: "Cholesterol Test",
		rating: 4.7,
		hospitalName: "Victoria Island Primary Health Centre",
		address: "15 Akin Adesola Street, Victoria Island, Lagos",
	},

	// Maternal & Pregnancy Tests
	{
		id: 12,
		name: "Pregnancy Test (hCG Test)",
		description:
			"Detects the presence of the hormone human chorionic gonadotropin (hCG) in blood or urine, which confirms pregnancy.",
		price: 2000,
		preparation: "First morning urine sample recommended.",
		resultTime: "30 minutes",
		category: "Pregnancy Test",
		rating: 4.9,
		hospitalName: "Oshodi Primary Health Centre",
		address: "6 Agege Motor Road, Oshodi, Lagos",
	},

	// Viral & Bacterial Infections
	{
		id: 15,
		name: "COVID-19 RT-PCR Test",
		description:
			"Detects active COVID-19 infection using a highly sensitive polymerase chain reaction (PCR) technique. It is the gold standard for confirming COVID-19 cases.",
		price: 10000,
		preparation: "No eating or drinking 30 minutes before the test.",
		resultTime: "12-24 hours",
		category: "Viral Test",
		rating: 4.9,
		hospitalName: "Gbagada Primary Health Centre",
		address: "4 Gbagada Expressway, Gbagada, Lagos",
	},
	{
		id: 16,
		name: "Tuberculosis (TB) Test",
		description:
			"Detects tuberculosis infection through a blood or skin test. It is essential for diagnosing and treating tuberculosis early.",
		price: 8000,
		preparation: "No fasting required.",
		resultTime: "48 hours",
		category: "Infectious Disease Test",
		rating: 4.6,
		hospitalName: "Ikotun Primary Health Centre",
		address: "9 Egbe Road, Ikotun, Lagos",
	},

	// Electrolyte & Mineral Tests
	{
		id: 17,
		name: "Electrolyte Panel",
		description:
			"Measures levels of essential electrolytes like sodium, potassium, and chloride to assess hydration, kidney function, and overall health.",
		price: 5000,
		preparation: "No fasting required.",
		resultTime: "12 hours",
		category: "Electrolyte Test",
		rating: 4.5,
		hospitalName: "Mushin Primary Health Centre",
		address: "13 Olosha Street, Mushin, Lagos",
	},
	{
		id: 18,
		name: "Calcium Test",
		description:
			"Measures calcium levels in the blood to check for bone disorders, kidney disease, and certain cancers.",
		price: 4000,
		preparation: "No fasting required.",
		resultTime: "6 hours",
		category: "Mineral Test",
		rating: 4.5,
		hospitalName: "Epe Primary Health Centre",
		address: "21 Lagos Road, Epe, Lagos",
	},

	// Hormone & Thyroid Tests
	{
		id: 19,
		name: "Thyroid Function Test (TFT)",
		description:
			"Assesses thyroid hormone levels (T3, T4, TSH) to diagnose thyroid disorders such as hypothyroidism and hyperthyroidism.",
		price: 7000,
		preparation: "No fasting required.",
		resultTime: "24 hours",
		category: "Hormone Test",
		rating: 4.6,
		hospitalName: "Badagry Primary Health Centre",
		address: "8 Marina Road, Badagry, Lagos",
	},
	{
		id: 20,
		name: "Thyroid Function Test (TFT)",
		description:
			"Assesses thyroid hormone levels (T3, T4, TSH) to diagnose thyroid disorders such as hypothyroidism and hyperthyroidism.",
		price: 7000,
		preparation: "No fasting required.",
		resultTime: "24 hours",
		category: "Kids",
		rating: 4.6,
		hospitalName: "Badagry Primary Health Centre",
		address: "8 Marina Road, Badagry, Lagos",
	},
];
