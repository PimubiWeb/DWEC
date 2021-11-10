/*
compra = ["Peras","Manzanas","Kiwis","Platanos","Mandarinas"]
(5) ['Peras', 'Manzanas', 'Kiwis', 'Platanos', 'Mandarinas']
compra
(5) ['Peras', 'Manzanas', 'Kiwis', 'Platanos', 'Mandarinas']
compra.splice(2,1)
['Kiwis']
compra.splice(2,0,"Kiwis")
[]
compra
(5) ['Peras', 'Manzanas', 'Kiwis', 'Platanos', 'Mandarinas']
compra.splice(1,1)
['Manzanas']
compra
(4) ['Peras', 'Kiwis', 'Platanos', 'Mandarinas']
compra.splice(2,0,"Naranjas","Sandia")
[]
compra
(6) ['Peras', 'Kiwis', 'Naranjas', 'Sandia', 'Platanos', 'Mandarinas']
compra,splice(2,2)
VM487:1 Uncaught ReferenceError: splice is not defined
    at <anonymous>:1:1
(anonymous) @ VM487:1
compra.splice(2,2)
(2) ['Naranjas', 'Sandia']
compra.splice(3,0,"Naranjas","Sandia")
[]
compra
(6) ['Peras', 'Kiwis', 'Platanos', 'Naranjas', 'Sandia', 'Mandarinas']
compra,splice(1,1,"Cerezas","Nisperos")
VM617:1 Uncaught ReferenceError: splice is not defined
    at <anonymous>:1:1
(anonymous) @ VM617:1
compra.splice(1,1,"Cerezas","Nisperos")
['Kiwis']
compra
(7) ['Peras', 'Cerezas', 'Nisperos', 'Platanos', 'Naranjas', 'Sandia', 'Mandarinas']
*/