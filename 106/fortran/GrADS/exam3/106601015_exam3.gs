'reinit'
'open 106601015_exam3.ctl'
'enable print 106601015_exam3.gmf'
'set display color white'
'c'
'set grads off'
'set vpage 0 11 0 8.5'
'set parea 1.5 10 1 7.5'
'set t 1 24'
'set vrange 72 100'
'set clopts 5 1 1'
'set clopts -1 -1 0.12'
'set ylabs 72|74|76|78|80|82|84|86|88|90|92|94|96|98|100'
#'set clopts 5 1 1'
'set xlint 1'
'set ccolor 2'
'draw ylab Relative humidity(%)'
'd rh'
'draw title 2018/1/1 Relative humidity change chart'

'print'
'disable print'
'printim 106601015_exam3.gif gif'
