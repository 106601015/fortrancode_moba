'reinit'
'open may2005.ctl'
'set display color white'
'c'
'set grads off'
'set vpage 0 8.5 0 11'

'set parea 1 8 6 10.5'
'set t 75'
'set lon 121'
'set lat 25'
'set lev 1000 100'

'set xlopts 1 1 0.15'
'set vrange2 -100 40'
'set ylpos 0 l'
'set ylopts 1 1 0.15'
'set zlog on'

'd temp'
'draw title Temp at (121E,25N) 5/19/2005 12Z'


'set parea 1 8 0.5 5'
'set t 1 124'
'set lev 1000'
'set xlabs 1MAY2005|6MAY|11MAY|16MAY|21MAY|26MAY'
'set ylopts 1 1 0.15'
'set zlog off'
'set vrange 1001 1015'
'set ylint 1'
'set line 1 1 3'

'd slp'
'draw title Time Series of SLP at (121E,25N)'