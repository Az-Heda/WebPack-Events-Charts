
CREATE TABLE Employees (
	EmployeeID INTEGER,
	LastName TEXT,
	FirstName TEXT,
	Title TEXT,
	TitleOfCourtesy TEXT,
	BirthDate DATE,
	HireDate DATE,
	Address TEXT,
	City TEXT,
	Region TEXT,
	PostalCode TEXT,
	Country TEXT,
	HomePhone TEXT,
	Extension TEXT,
	Photo BLOB,
	Notes TEXT,
	ReportsTo INTEGER,
	PhotoPath TEXT
);

CREATE TABLE EmployeeTerritories (
	EmployeeID INTEGER,
	TerritoryID TEXT
);

CREATE TABLE OrderDetails (
	OrderID INTEGER,
	ProductID INTEGER,
	UnitPrice NUMERIC,
	Quantity INTEGER,
	Discount REAL
);

CREATE TABLE Orders (
	OrderID INTEGER,
	CustomerID TEXT,
	EmployeeID INTEGER,
	OrderDate DATETIME,
	RequiredDate DATETIME,
	ShippedDate DATETIME,
	ShipVia INTEGER,
	Freight NUMERIC,
	ShipName TEXT,
	ShipAddress TEXT,
	ShipCity TEXT,
	ShipRegion TEXT,
	ShipPostalCode TEXT,
	ShipCountry TEXT
);

CREATE TABLE Products (
	ProductID INTEGER,
	ProductName TEXT,
	SupplierID INTEGER,
	CategoryID INTEGER,
	QuantityPerUnit TEXT,
	UnitPrice NUMERIC,
	UnitsInStock INTEGER,
	UnitsOnOrder INTEGER,
	ReorderLevel INTEGER,
	Discontinued TEXT
);

CREATE TABLE Regions (
	RegionID INTEGER,
	RegionDescription TEXT
);

CREATE TABLE Shippers (
	ShipperID INTEGER,
	CompanyName TEXT,
	Phone TEXT
);

CREATE TABLE Suppliers (
	SupplierID INTEGER,
	CompanyName TEXT,
	ContactName TEXT,
	ContactTitle TEXT,
	Address TEXT,
	City TEXT,
	Region TEXT,
	PostalCode TEXT,
	Country TEXT,
	Phone TEXT,
	Fax TEXT,
	HomePage TEXT
);

CREATE TABLE Territories (
	TerritoryID TEXT,
	TerritoryDescription TEXT,
	RegionID INTEGER
);

