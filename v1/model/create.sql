CREATE TABLE registry (
	id INTEGER PRIMARY KEY,
	vat_number CHAR(11),
	tax_id_code CHAR(16),
	name VARCHAR(128),
	surname VARCHAR(128)
);

CREATE TABLE callcenter (
	id INTEGER PRIMARY KEY,
	year INTEGER,
	month INTEGER,
	day INTEGER,
	status CHAR(1),
	duration INTEGER,
	call_group VARCHAR(64),
	cause VARCHAR(64)
);

CREATE TABLE wages (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	year INTEGER,
	month INTEGER,
	day INTEGER,
	payslip_current_year INTEGER,
	payslip_precedent_year INTEGER
);