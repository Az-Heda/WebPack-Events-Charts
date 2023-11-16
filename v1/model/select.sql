SELECT
	[IdCrm] as [id]
	, [PartitaIva] as [vat_number]
	, [CodiceFiscale] as [tax_id_code]
	, [Nome] as [name]
	, [Cognome] as [surname]
FROM 
	[DwBusiness].[dw].[DIM_CRM_AnagraficaClienti];

SELECT
	[IdChiamata] as [id]
	, YEAR([Data]) as [year]
	, MONTH([Data]) as [month]
	, DAY([Data]) as [day]
	, [Stato] as [status]
	, [Durata] as [duration]
	, [Gruppo] as [call_group]
	, [Causa] as [cause]
FROM [DwBusiness].[dw].[DIM_HD_Chiamate];

SELECT
	[ANNO] as [year]
	, [MESE] as [month]
	, [CEDOLINI_A_ATTUALE] as [payslip_current_year]
	, [CEDOLINI_A_PRECED] AS [payslip_precedent_year]
FROM [DwFonti].[mag].[PAGHE_SERVERFARM];