select [d] as [date], count([d]) as [count]
from (
    select cast([Data] as date) as [d]
    from [DwBusiness].[dw].[DIM_HD_Chiamate]
) as [s]
where datepart(weekday, d) not in (1,7)
group by [d]
order by [d];