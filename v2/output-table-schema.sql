CREATE TABLE [DIM_CRM_AnagraficaClienti] (
	IdDatabase INT,
	IdCrm BIGINT,
	CodiceFiscale VARCHAR,
	PartitaIva VARCHAR,
	Nome VARCHAR,
	Cognome VARCHAR,
	Denominazione VARCHAR,
	TpAnag VARCHAR,
	IdSede BIGINT,
	DataUpd VARCHAR,
	DataCreaz VARCHAR,
	IdGruppo INT,
	GruppoFisico VARCHAR,
	CodUfficio VARCHAR,
	Cap VARCHAR,
	IdComune BIGINT,
	Zona1 VARCHAR,
	Zona2 VARCHAR,
	UpdateDataOra DATETIME
);

CREATE TABLE [DIM_HD_Chiamate] (
	IdDatabase INT,
	IdChiamata BIGINT,
	IdRiga INT,
	IdCliente BIGINT,
	Data VARCHAR,
	Stato CHAR,
	Urgenza CHAR,
	Sollecito CHAR,
	Durata INT,
	Login VARCHAR,
	Gruppo VARCHAR,
	Causa VARCHAR,
	UpdateDataOra DATETIME,
	Addebito CHAR
);