var vehicles = [
{
    'name':'Blank'
},
{
    'id':1,
    'name':'Panzer III J',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[8],
    'ammo':true,
    'mg':true
},
{
    'id':2,
    'name':'Panzer III L',
    'move':['8','12'],
    'armour':['K','N','N'],
    'weapons':[9],
    'ammo':true,
    'mg':true
},
{
    'id':3,
    'name':'Panzer III M',
    'move':['8','12'],
    'armour':['K','N(M)','N'],
    'weapons':[9],
    'ammo':true,
    'mg':true
},
{
    'id':4,
    'name':'Panzer III N',
    'move':['8','12'],
    'armour':['K','N(M)','N'],
    'weapons':[11],
    'ammo':true,
    'mg':true
},
{
    'id':5,
    'name':'Flammpanzer III',
    'move':['8','12'],
    'armour':['K','N','N'],
    'weapons':[32],
    'mg':true
},
{
    'id':6,
    'name':'Panzer III H Observation Tank',
    'move':['8','12'],
    'armour':['N','N','N'],
    'mg':true
},
{
    'id':7,
    'name':'Panzer IV E-F1',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[11],
    'mg':true,
    'ammo':true
},
{
    'id':8,
    'name':'Panzer IV G',
    'move':['8','12'],
    'armour':['L','N(M)','N'],
    'weapons':[13],
    'mg':true,
    'ammo':true
},
{
    'id':9,
    'name':'Panzer IV H/J',
    'move':['8','12'],
    'armour':['K','N(M)','N'],
    'weapons':[15],
    'mg':true,
    'ammo':true
},
{
    'id':10,
    'name':'Panther D',
    'move':['10','14'],
    'armour':['H','K','L'],
    'special':'Unreliable',
    'weapons':[16],
    'mg':true,
    'ammo':true
},
{
    'id':11,
    'name':'Tiger I',
    'move':['8','12'],
    'armour':['H','J','J'],
    'weapons':[19],
    'mg':true,
    'ammo':true
},
{
    'id':12,
    'name':'Panzer T-34(r)',
    'move':['12','16'],
    'armour':['K','L','M'],
    'weapons':[44],
    'mg':true,
    'special':'T-34 Mobility',
    'ammo':true
},
{
    'id':13,
    'name':'Panzer II F',
    'move':['8','12'],
    'armour':['N','O','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':14,
    'name':'Borgward B-IV',
    'move':['8','12'],
    'armour':['O','O','O'],
    'special':'Remote control',
    'weapons':[15],
    'ammo':true
},
{
    'id':15,
    'name':'StuG III A-E',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[11],
    'ammo':true
},
{
    'id':16,
    'name':'StuG III F',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[13],
    'mg':true,
    'ammo':true
},
{
    'id':17,
    'name':'StuH 42 F',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[22],
    'mg':true,
    'ammo':true
},
{
    'id':18,
    'name':'StuG III G',
    'move':['8','12'],
    'armour':['J','N(M)','N'],
    'weapons':[15],
    'mg':true,
    'ammo':true
},
{
    'id':19,
    'name':'StuH 42 G',
    'move':['8','12'],
    'armour':['J','N(M)','N'],
    'weapons':[22],
    'mg':true,
    'ammo':true
},
{
    'id':20,
    'name':'Marder II',
    'move':['8','12'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[14],
    'ammo':true
},
{
    'id':21,
    'name':'Marder III H',
    'move':['8','12'],
    'armour':['L','N','O'],
    'open':true,
    'weapons':[14],
    'mg':true,
    'ammo':true
},
{
    'id':22,
    'name':'Marder III M',
    'move':['9','13'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[14],
    'mg':true,
    'ammo':true
},
{
    'id':23,
    'name':'Marder III (38t PaK 36r)',
    'move':['9','13'],
    'armour':['L','N','O'],
    'open':true,
    'weapons':[45],
    'mg':true,
    'ammo':true
},
{
    'id':24,
    'name':'Ferdinand',
    'move':['6','9'],
    'armour':['A','J','N'],
    'weapons':[20],
    'ammo':true
},
{
    'id':25,
    'name':'Hornisse',
    'move':['8','12'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[20],
    'ammo':true
},
{
    'id':26,
    'name':'Brummbar',
    'move':['8','12'],
    'armour':['H','L(K)','M'],
    'weapons':[25],
    'ammo':true
},
{
    'id':27,
    'name':'Grille H',
    'move':['7','11'],
    'armour':['L','N','O'],
    'open':true,
    'weapons':[25],
    'ammo':true
},
{
    'id':28,
    'name':'Grille K',
    'move':['7','11'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[25],
    'mg':true,
    'ammo':true
},
{
    'id':29,
    'name':'Wespe',
    'move':['8','12'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[22],
    'ammo':true
},
{
    'id':30,
    'name':'Hummel',
    'move':['8','12'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[26],
    'ammo':true
},
{
    'id':31,
    'name':'Munitions Carrier',
    'move':['8','12'],
    'armour':['N','O','O'],
    'special':'Resupply'
},
{
    'id':32,
    'name':'SdKfz 222',
    'move':['8','24'],
    'armour':['O','O','O'],
    'weapons':[4],
    'ammo':true
},
{
    'id':33,
    'name':'SdKfz 223',
    'move':['8','24'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':34,
    'name':'SdKfz 232',
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':35,
    'name':'SdKfz 233',
    'move':['8','24'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[11],
    'ammo':true
},
{
    'id':36,
    'name':'SdKfz 236',
    'move':['8','24'],
    'armour':['N','O','O'],
    'mg':true
},
{
    'id':37,
    'name':'SdKfz 251/1',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':38,
    'name':'SdKfz 251/2',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[2],
    'ammo':true
},
{
    'id':39,
    'name':'SdKfz 251/3',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':40,
    'name':'SdKfz 251/9',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[11],
    'ammo':true,
    'mg':true
},
{
    'id':41,
    'name':'SdKfz 251/10',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[7],
    'ammo':true,
    'mg':true
},
{
    'id':42,
    'name':'SdKfz 251/16',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[32],
    'ammo':true,
    'mg':true
},
{
    'id':43,
    'name':'SdKfz 250/1',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':44,
    'name':'SdKfz 250/3',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':45,
    'name':'SdKfz 250/7',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[2],
    'ammo':true,
    'mg':true
},
{
    'id':46,
    'name':'SdKfz 250/8',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[11],
    'ammo':true,
    'mg':true
},
{
    'id':47,
    'name':'SdKfz 250/9',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[4],
    'ammo':true,
    'mg':true
},
{
    'id':48,
    'name':'SdKfz 250/10',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[7],
    'ammo':true,
    'mg':true
},
{
    'id':49,
    'name':'SdKfz 250/11',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[6],
    'ammo':true,
    'mg':true
},
{
    'id':50,
    'name':'Motorcycle',
    'move':['6','24'],
    'hits':1,
    'capacity':1
},
{
    'id':51,
    'name':'Motorcycle and sidecar',
    'move':['6','24'],
    'hits':1,
    'capacity':2
},
{
    'id':52,
    'name':'Kettenkrad',
    'move':['14','22'],
    'hits':1,
    'capacity':2
},
{
    'id':53,
    'name':'Staff car',
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':54,
    'name':'Kübelwagen',
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':55,
    'name':'Schwimmwagen',
    'move':['6','24'],
    'hits':2,
    'capacity':3,
    'special':'Amphibious'
},
{
    'id':56,
    'name':'Steyr Heavy car',
    'move':['6','24'],
    'hits':2,
    'capacity':5
},
{
    'id':57,
    'name':'Krüpp Protze Kfz70',
    'move':['6','24'],
    'hits':2,
    'capacity':8
},
{
    'id':58,
    'name':'Opel Blitz (German Medium Truck)',
    'move':['6','24'],
    'hits':3,
    'capacity':12
},
{
    'id':59,
    'name':'Opel Maultier',
    'move':['12','16'],
    'hits':3,
    'capacity':12
},
{
    'id':60,
    'name':'RSO',
    'move':['9','12'],
    'hits':3,
    'capacity':10
},
{
    'id':61,
    'name':'Heavy Truck',
    'move':['6','24'],
    'hits':4,
    'capacity':24
},
{
    'id':62,
    'name':'1 tonne SdKfz 10',
    'move':['12','16'],
    'hits':2,
    'capacity':5
},
{
    'id':63,
    'name':'3 tonne SdKfz 11',
    'move':['12','16'],
    'hits':3,
    'capacity':8
},
{
    'id':64,
    'name':'5 tonne SdKfz 6',
    'move':['12','16'],
    'hits':3,
    'capacity':10
},
{
    'id':65,
    'name':'8 tonne SdKfz 7',
    'move':['12','16'],
    'hits':4,
    'capacity':12
},
{
    'id':66,
    'name':'12 tonne SdKfz 8',
    'move':['12','16'],
    'hits':4,
    'capacity':15
},
{
    'id':67,
    'name':'18 tonne SdKfz 9',
    'move':['12','16'],
    'hits':5,
    'special':'Recovery, Repair'
},
{
    'id':68,
    'name':'Panzer 35R 731(f)',
    'move':['8','12'],
    'armour':['M','N','N'],
    'special':'One man turret',
    'weapons':[112],
    'ammo':true,
    'mg':true
},
{
    'id':69,
    'name':'Panzer 35S 739(f)',
    'move':['10','14'],
    'armour':['L','M','N'],
    'special':'One man turret',
    'weapons':[113],
    'ammo':true,
    'mg':true
},
{
    'id':70,
    'name':'KV-1S',
    'move':['8','12'],
    'armour':['J','K','M'],
    'weapons':[44],
    'ammo':true,
    'mg':true
},
{
    'id':71,
    'name':'T-60',
    'move':['12','19'],
    'armour':['M','N','O'],
    'weapons':[35],
    'mg':true
},
{
    'id':72,
    'name':'T-70',
    'move':['10','15'],
    'armour':['K','N','O'],
    'weapons':[38],
    'ammo':true,
    'mg':true
},
{
    'id':73,
    'name':'KV-1E',
    'move':['5','10'],
    'armour':['H','K','L'],
    'weapons':[44],
    'special':'Unreliable',
    'ammo':true,
    'mg':true
},
{
    'id':74,
    'name':'KV-2',
    'move':['4','8'],
    'armour':['J','K','M'],
    'weapons':[49],
    'special':'Unreliable',
    'ammo':true,
    'mg':true
},
{
    'id':75,
    'name':'T-34/76',
    'move':['12','16'],
    'armour':['K','L','M'],
    'weapons':[44],
    'mg':true,
    'special':'T-34 Mobility',
    'ammo':true
},
{
    'id':76,
    'name':'SU-76M',
    'move':['9','14'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[45],
    'ammo':true
},
{
    'id':77,
    'name':'SU-122',
    'move':['12','16'],
    'armour':['L','M','N'],
    'weapons':[47],
    'ammo':true
},
{
    'id':78,
    'name':'SU-152',
    'move':['10','14'],
    'armour':['J','K','L'],
    'weapons':[50],
    'ammo':true
},
{
    'id':79,
    'name':'BM-8-13 Katyusha',
    'move':['9','14'],
    'armour':['M','O','O'],
    'weapons':[51],
    'ammo':true
},
{
    'id':80,
    'name':'BA-10',
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':[37],
    'mg':true,
    'ammo':true
},
{
    'id':81,
    'name':'BA-64',
    'move':['8','24'],
    'armour':['N','O','O'],
    'open':true,
    'mg':true
},
{
    'id':82,
    'name':'Bren Carrier',
    'move':['16','24'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':83,
    'name':'M5 Halftrack',
    'move':['12','24'],
    'armour':['N','O','O'],
    'open':true,
    'mg':true
},
{
    'id':84,
    'name':'White Scout Car',
    'open':true,
    'move':['8','12'],
    'armour':['N','O','O'],  // OOO in Kursk, NOO in FOTR/Overlord/Pacific
    'mg':true
},
{
    'id':85,
    'name':'M3 Grant',
    'move':['8','13'],
    'armour':['L','M','O'],
    'weapons':[56,57],
    'mg':true,
    'ammo':[14,5]
},
{
    'id':86,
    'name':'Matilda II',
    'move':['5','8'],
    'armour':['J','K','L'],
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':87,
    'name':'Valentine III',
    'move':['5','8'],
    'armour':['K','K','L'],
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':88,
    'name':'Churchill III/IV',
    'move':['5','8'],
    'armour':['I','J','J'],
    'weapons':[59],
    'mg':true,
    'ammo':true
},
{
    'id':89,
    'name':'M3A1 Stuart',
    'move':['12' ,'18'],
    'armour':['L','N','M'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':90,
    'name':'Gaz Jeep',
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':91,
    'name':'Medium Truck',
    'move':['6','24'],
    'hits':2,
    'capacity':12
},
{
    'id':92,
    'name':'Radio Van',
    'move':['6','24'],
    'hits':2,
    'capacity':0
},
{
    'id':93,
    'name':'Horse & Limber',
    'move':['4','6'],
    'hits':2,
},
{
    'id':94,
    'name':'Horse drawn wagon',
    'move':['4','6'],
    'hits':2,
},
{
    'id':95,
    'name':'Komsomolyets tractor',
    'move':['12','16'],
    'special':'Light gun tow',
    'hits':1,
},
{
    'id':96,
    'name':'Panzer IV D',
    'move':['8','12'],
    'armour':['M','N','N'],
    'weapons':[11],
    'mg':true,
    'ammo':true
},
{
    'id':97,
    'name':'SdKfz 251/7',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'special':'Bridging'
},
{
    'id':98,
    'name':'SU-100',
    'move':['12','16'],
    'armour':['I','L','M'],
    'weapons':[116],
    //'mg':true,
    'ammo':true,
    'special':'T-34 Mobility'
},
{
    'id':99,
    'name':'Sherman \'Emcha\'',
    'move':['9','14'],
    'armour':['K','L','N'],
    'weapons':[69],
    'mg':true,
    'ammo':true
},
{
    'id':100,
    'name':'M4 Sherman (A1,A2,A3)',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':101,
    'name':'M4A4 Sherman',
    'move':['8' ,'12'],
    'armour':['K','L','N'],
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':102,
    'name':'M4A4 Sherman Firefly',
    'move':['8' ,'12'],
    'armour':['K','L','N'],
    'weapons':[70],
    'mg':true,
    'ammo':true
},
{
    'id':103,
    'name':'M4A4 Sherman HQ',
    'move':['8' ,'12'],
    'armour':['K','L','N'],
    'mg':true,
    'ammo':true
},
{
    'id':104,
    'name':'M4 Sherman (76mm)',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'weapons':[69],
    'mg':true,
    'ammo':true
},
{
    'id':105,
    'name':'M4 Sherman (105mm)',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'weapons':[76],
    'mg':true,
    'ammo':true
},
{
    'id':106,
    'name':'M4 DD Sherman',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'weapons':[68],
    'special':'Duplex drive',
    'mg':true,
    'ammo':true
},
{
    'id':107,
    'name':'M4 Sherman Crab',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'special':'Engineer',
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':108,
    'name':'M4 Sherman Dozer',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'special':'Engineer',
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':109,
    'name':'M4 Sherman ARV',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'special':'Recovery, Repair',
    'open':true,
    'mg':true
},
{
    'id':110,
    'name':'M4 Sherman BARV',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'special':'Amphibious, Repair',
    'open':true,
    'mg':true
},
{
    'id':111,
    'name':'Cromwell IV or V',
    'move':['12' ,'20'],
    'armour':['K','L','M'],
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':112,
    'name':'Cromwell IV or V HQ',
    'move':['12' ,'20'],
    'armour':['K','L','M'],
    'mg':true
},
{
    'id':113,
    'name':'Cromwell ARV',
    'move':['12' ,'20'],
    'armour':['L','L','M'],
    'special':'Recovery, Repair',
    'open':true,
    'mg':true
},
{
    'id':114,
    'name':'Challenger',
    'move':['10' ,'15'],
    'armour':['K','L','M'],
    'weapons':[70],
    'mg':true,
    'ammo':true
},
{
    'id':115,
    'name':'M3A3 \'Honey\'',
    'move':['12' ,'18'],
    'armour':['M','N','N'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':116,
    'name':'M5 Stuart',
    'move':['12' ,'18'],
    'armour':['L','N','M'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':117,
    'name':'M5 Stuart \'Recce\'',
    'move':['12' ,'18'],
    'armour':['L','N','M'],
    'mg':true
},
{
    'id':118,
    'name':'Tetrarch',
    'move':['14' ,'20'],
    'armour':['N','O','O'],
    'weapons':[71],
    'mg':true,
    'ammo':true
},
{
    'id':119,
    'name':'Tetrarch CS',
    'move':['14' ,'20'],
    'armour':['N','O','O'],
    'weapons':[41], // confirmed as identical stats via guild-forum, http://www.guildwargamers.com/phpBB3/viewtopic.php?f=309&t=28089
    'mg':true,
    'ammo':true
},
{
    'id':120,
    'name':'Churchill V',
    'move':['5','8'],
    'armour':['I','J','J'],
    'weapons':[72],
    'mg':true,
    'ammo':true
},
{
    'id':121,
    'name':'Churchill VI',
    'move':['5','8'],
    'armour':['I','J','J'],
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':122,
    'name':'Churchill VII',
    'move':['5','8'],
    'armour':['E','I','I'],
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':123,
    'name':'Churchill AVRE',
    'move':['5','8'],
    'armour':['I','J','J'],
    'weapons':[89],
    'mg':true,
    'ammo':true
},
{
    'id':124,
    'name':'Churchill Crocodile',
    'move':['5','8'],
    'armour':['E','I','I'],
    'weapons':[32,68], // greg also needs flame-thrower
    'mg':true,
    'ammo':true
},
{
    'id':125,
    'name':'Churchill Ark',
    'move':['5','8'],
    'armour':['I','J','J'],
    'special':'Bridging',
},
{
    'id':126,
    'name':'Churchill ARV',
    'move':['5','8'],
    'armour':['I','J','J'],
    'special':'Repair, Recovery',
    'mg':true
},
{
    'id':127,
    'name':'Centaur IV',
    'move':['9' ,'14'],
    'armour':['K','L','M'],
    'weapons':[72],
    'mg':true,
    'special':'Unreliable',
    'ammo':true
},
{
    'id':128,
    'name':'Centaur AA',
    'open':true,
    'move':['9' ,'14'],
    'armour':['K','L','M'],
    'weapons':[4],
    'special':'Unreliable',
    'mg':true,
    'ammo':true
},
{
    'id':129,
    'name':'Crusader AA I',
    'move':['8','12'],
    'armour':['L','N','O'],
    'open':true,
    'weapons':[63],
    'mg':true,
    'ammo':true
},
{
    'id':130,
    'name':'Crusader AA II',
    'move':['8','12'],
    'armour':['L','N','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':131,
    'name':'Valentine Bridge',
    'move':['5','8'],
    'armour':['K','K','L'],
    'special':'Bridging'
},
{
    'id':132,
    'name':'M10 Wolverine',
    'move':['9' ,'14'],
    'armour':['M','N','O'],
    'open':true,
    'weapons':[69],
    'mg':true,
    'ammo':true
},
{
    'id':133,
    'name':'M10 Achilles',
    'move':['9','14'],
    'armour':['M','N','O'],
    'open':true,
    'weapons':[70],
    'mg':true,
    'ammo':true
},
{
    'id':134,
    'name':'Humber Scout Car',
    'move':['8','24'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':135,
    'name':'Humber IV',
    'move':['8','24'],
    'armour':['M','O','O'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':136,
    'name':'Daimler Dingo',
    'move':['8','12'],
    'armour':['N','O','O'],
    'open':true,
    'mg':true
},
{
    'id':137,
    'name':'Daimler',
    'move':['8','24'],
    'armour':['M','O','O'],
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':138,
    'name':'Staghound',
    'move':['8','24'],
    'armour':['N','N','O'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':139,
    'name':'Staghound AA',
    'move':['8','24'],
    'armour':['N','N','O'],
    'mg':true
},
{
    'id':140,
    'name':'AEC III',
    'move':['8','24'],
    'armour':['K','N','O'],
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':141,
    'name':'Humber LRC I',
    'move':['8','24'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':142,
    'name':'M8 Greyhound',
    'open':true,
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':143,
    'name':'M20 Utility Car',
    'open':true,
    'move':['8','24'],
    'armour':['N','O','O'],
    'mg':true
},
{
    'id':144,
    'name':'M16',
    'open':true,
    'move':['12','24'],
    'armour':['N','O','O'],
    'mg':true
},
{
    'id':145,
    'open':true,
    'name':'M15',
    'move':['12','24'],
    'armour':['N','O','O'],
    'weapons':[56],
    'mg':true
},
{
    'id':146,
    'name':'M9 Halftrack',
    'open':true,
    'move':['12','24'],
    'armour':['N','O','O'],
    'mg':true
},
{
    'id':147,
    'name':'Ram Kangaroo',
    'open':true,
    'move':['9','14'],
    'armour':['K','M','M'],
    'mg':true
},
{
    'id':148,
    'name':'M3 Halftrack',
    'open':true,
    'move':['12','24'],
    'armour':['N','O','O'],
    'mg':true
},
{
    'id':149,
    'name':'Churchill VIII',
    'move':['5','8'],
    'armour':['E','I','I'],
    'weapons':[72],
    'mg':true,
    'ammo':true
},
{
    'id':150,
    'name':'Loyd Carrier',
    'open':true,
    'move':['10','15'],
    'armour':['O','O','O'],
},
{
    'id':151,
    'name':'Wasp',
    'open':true,
    'move':['10','15'],
    'armour':['O','O','O'],
    'weapons':[32],
    'ammo':true
},
{
    'id':152,
    'name':'Crusader Tractor',
    'open':true,
    'move':['8','12'],
    'armour':['L','N','O'],
},
{
    'id':153,
    'name':'M35 Primer Mover',
    'open':true,
    'move':['9','14'],
    'armour':['M','N','O'],
},
{
    'id':154,
    'name':'Sexton',
    'move':['8','12'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[73],
    'ammo':true
},
{
    'id':155,
    'name':'Priest',
    'open':true,
    'move':['9','14'],
    'armour':['N','O','O'],
    'weapons':[76],
    'mg':true,
    'ammo':true
},
{
    'id':156,
    'name':'M8 HMC',
    'move':['12','18'],
    'armour':['L','N','N'],
    'open':true,
    'weapons':[65],
    'mg':true,
    'ammo':true
},
{
    'id':157,
    'name':'M4 or M21 Halftrack',
    'open':true,
    'move':['12' ,'24'],
    'armour':['N','O','O'],
    'weapons':[61],
    'mg':true,
    'ammo':true
},
{
    'id':158,
    'name':'M12 Halftrack',
    'open':true,
    'move':['8' ,'12'],
    'armour':['O','O','O'],
    'weapons':[84],
    'ammo':true
},
{
    'id':159,
    'name':'Dorchester ACV',
    'move':['6','24'],
    'armour':['O','O','O'],
    'special':'Comms'
},
{
    'id':160,
    'name':'Armoured Bulldozer',
    'move':['4','6'],
    'armour':['O','O','O'],
    'special':'Engineer'
},
{
    'id':161,
    'name':'M32 ARV',
    'open':true,
    'move':['8' ,'12'],
    'armour':['L','M','O'],
    'special':'Recovery, Repair',
    'mg':true
},
{
    'id':162,
    'name':'M30 Cargo Carrier',
    'open':true,
    'move':['8' ,'12'],
    'armour':['O','O','O'],
    'special':'Resupply',
    'mg':true
},
{
    'id':163,
    'name':'Jeep',
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':164,
    'name':'3/4 tonne truck \'Beep\'',
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':165,
    'name':'1 1/2 tonne truck',
    'move':['6','24'],
    'hits':3,
    'capacity':12
},
{
    'id':166,
    'name':'2 1/2 tonne truck',
    'move':['6','24'],
    'hits':2,
    'capacity':20
},
{
    'id':167,
    'name':'4 tonne truck',
    'move':['6','24'],
    'hits':3,
    'capacity':28
},
{
    'id':168,
    'name':'6 tonne truck',
    'move':['6','24'],
    'hits':4,
    'capacity':36
},
{
    'id':169,
    'name':'M29 Water Weasel',
    'move':['12','18'],
    'hits':2,
    'special':'Amphibious',
    'capacity':4
},
{
    'id':170,
    'name':'M4 High Speed Tractor',
    'move':['10','15'],
    'hits':3,
    'special':'Medium gun tow',
    'capacity':0
},
{
    'id':171,
    'name':'M5 High Speed Tractor',
    'move':['10','15'],
    'hits':4,
    'special':'Heavy gun tow',
    'capacity':0
},
{
    'id':172,
    'name':'M1 Wrecker',
    'move':['6','24'],
    'hits':4,
    'special':'Recovery',
    'capacity':1
},
{
    'id':173,
    'name':'1/4 tonne amphibian',
    'move':['6','24'],
    'hits':2,
    'capacity':3,
    'special':'Amphibious'
},
{
    'id':174,
    'name':'Dodge ambulance',
    'move':['6','24'],
    'hits':2,
    'special':'Medic',
    'capacity':0
},
{
    'id':175,
    'name':'DUKW',
    'move':['6','24'],
    'hits':3,
    'capacity':25,
    'special':'Amphibious'
},
{
    'id':176,
    'name':'Bedford MWD',
    'move':['6','24'],
    'hits':2,
    'capacity':8
},
{
    'id':177,
    'name':'Bedford OXD',
    'move':['6','24'],
    'hits':3,
    'capacity':12
},
{
    'id':178,
    'name':'Bedford OYD (Britsh Medium Truck)',
    'move':['6','24'],
    'hits':3,
    'capacity':14
},
{
    'id':179,
    'name':'Bedford QLT/QLD',
    'move':['6','24'],
    'hits':3,
    'capacity':22
},
{
    'id':180,
    'name':'Leyland Hippo',
    'move':['6','24'],
    'hits':4,
    'capacity':32
},
{
    'id':181,
    'name':'AEC Matador',
    'move':['6','24'],
    'hits':4,
    'special':'Medium Gun tow',
    'capacity':0
},
{
    'id':182,
    'name':'Morris Quad',
    'move':['8','24'],
    'hits':3,
    'special':'Gun tow',
    'capacity':0
},
{
    'id':183,
    'name':'Scammel Pioneer',
    'move':['6','24'],
    'hits':4,
    'special':'Recovery, Repair',
    'capacity':0
},
{
    'id':184,
    'name':'Austin K2 ambulance',
    'move':['6','24'],
    'hits':2,
    'special':'Medic',
    'capacity':0
},
{
    'id':185,
    'name':'Panzer IV D',
    'move':['8','12'],
    'armour':['M','N','N'],
    'weapons':[11],
    'mg':true,
    'ammo':true
},
{
    'id':186,
    'name':'Tiger II',
    'move':['8','12'],
    'armour':['C','H','J'],
    'weapons':[20],
    'mg':true,
    'ammo':true
},
{
    'id':187,
    'name':'Panther A/G',
    'move':['10','14'],
    'armour':['H','K','L'],
    'weapons':[16],
    'mg':true,
    'ammo':true
},
{
    'id':188,
    'name':'Bergepanther',
    'move':['10','14'],
    'armour':['I','K','L'],
    'special':'Recovery, Repair',
    'mg':true
},
{
    'id':189,
    'name':'StuG IV',
    'move':['8','12'],
    'armour':['J','N(M)','N'],
    'weapons':[15],
    'mg':true,
    'ammo':true
},
{
    'id':190,
    'name':'Bergepanzer III',
    'move':['8','12'],
    'armour':['L','N','N'],
    'special':'Recovery, Repair',
    'mg':true
},
{
    'id':191,
    'name':'Jagdpanzer IV (L48)',
    'move':['8','12'],
    'armour':['I','N(M)','N'],
    'weapons':[15],
    'ammo':true
},
{
    'id':192,
    'name':'Jagdpanther',
    'move':['10','14'],
    'armour':['H','L','L'],
    'weapons':[20],
    'mg':true,
    'ammo':true
},
{
    'id':193,
    'name':'Panzerwerfer',
    'move':['12','16'],
    'armour':['O','O','O'],
    'weapons':[27],
    'ammo':true
},
{
    'id':194,
    'name':'Flakpanzer 38(t)',
    'open':true,
    'move':['9','13'],
    'armour':['M','O','O'],
    'weapons':[4],
    'ammo':true
},
{
    'id':195,
    'name':'Möbelwagen',
    'open':true,
    'move':['8','12'],
    'armour':['L','N','O'],
    'weapons':[95],
    'mg':true,
    'ammo':true
},
{
    'id':196,
    'name':'Wirbelwind',
    'open':true,
    'move':['8','12'],
    'armour':['L','N','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':197,
    'name':'Armoured SdKfz 7/1',
    'open':true,
    'move':['12','16'],
    'armour':['O','O','O'],
    'weapons':[95],
    'ammo':true
},
{
    'id':198,
    'name':'SdKfz 263',
    'move':['8','24'],
    'armour':['N','O','O'],
    'mg':true
},
{
    'id':199,
    'name':'SdKfz 234/1',
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':200,
    'name':'SdKfz 234/2',
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':[9],
    'mg':true,
    'ammo':true
},
{
    'id':201,
    'name':'SdKfz 234/3',
    'open':true,
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':[11],
    'ammo':true
},
{
    'id':202,
    'name':'Panhard 178',
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':[111],
    'ammo':true,
    'mg':true
},
{
    'id':203,
    'name':'SdKfz 251 Werfrahmen 40', // also refered to as Wurfrahmen in some entries - note the 'u'
    'open':true,
    'move':['12','16'],
    'armour':['O','O','O'],
    'weapons':[31],
    'ammo':true,
    'mg':true
},
{
    'id':204,
    'name':'R-35',
    'move':['8','12'],
    'armour':['M','N','N'],
    'special':'One man turret',
    'weapons':[112],
    'ammo':true
},
{
    'id':205,
    'name':'R-35 (MG only)',
    'move':['8','12'],
    'armour':['M','N','N'],
    'mg':true
},
{
    'id':206,
    'name':'H-38',
    'armour':['M','N','N'],
    'weapons':[112],
    'ammo':true
},
{
    'id':207,
    'name':'Pz-III Panzerturm',
    'armour':['M','N','N'],
    'weapons':[11],
    'ammo':true
},
{
    'id':208,
    'name':'75mm PaK40 auf Lorraine',
    'move':['9','13'],
    'armour':['L','N','O'],
    'open':true,
    'weapons':[14],
    'ammo':true
},
{
    'id':209,
    'name':'105mm leFH13 auf Lorraine',
    'move':['9','13'],
    'armour':['L','O','O'],
    'open':true,
    'weapons':[22],
    'ammo':true
},
{
    'id':210,
    'name':'150mm sFH13 auf Lorraine',
    'move':['9','13'],
    'armour':['L','O','O'],
    'open':true,
    'weapons':[26],
    'ammo':true
},
{
    'id':211,
    'name':'leSPW U304(f)',
    'move':['10','14'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':212,
    'name':'leSPW U304(f) Funk',
    'move':['10','14'],
    'armour':['O','O','O'],
    'open':true,
    'special':'Signals',
    'mg':true
},
{
    'id':213,
    'name':'leSPW U304(f) FlaK38',
    'move':['10','14'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[4],
    'ammo':true
},
{
    'id':214,
    'name':'mSPW S303(f)',
    'move':['9','13'],
    'armour':['O','O','O'],
    'open':true,
    'special':'Bridging',
    'mg':true
},
{
    'id':215,
    'name':'mSPW S307(f)',
    'move':['9','13'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[14],
    'ammo':true
},
{
    'id':216,
    'name':'mSPW S307(f) 8cm Reihenwerfer',
    'move':['9','13'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[2],
    'ammo':true
},
{
    'id':217,
    'name':'mSPW S307(f) R. Vielfachwerfer',
    'move':['9','13'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[110],
    'ammo':true
},
{
    'id':218,
    'name':'Panzer 38H 735(f) auf 28cm Wurfrahmen',
    'move':['8','12'],
    'armour':['N','N','N'],
    'open':true,
    'weapons':[31,112], // greg also carries (112) 37mmL21
    'ammo':true,
    'mg':true
},
{
    'id':219,
    'name':'Panzer 39H Beobachtungswagen',
    'move':['8','12'],
    'armour':['M','N','N'],
},
{
    'id':220,
    'name':'Lorraine Schlepper Beobachtungswagen',
    'move':['9','13'],
    'armour':['L','N','N'],
},
{
    'id':221,
    'name':'SdKfz 251/18',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':222,
    'name':'Panzer 35H 735(f)',
    'move':['8','12'],
    'armour':['N','N','N'],
    'special':'One man turret',
    'weapons':[112],
    'ammo':true,
    'mg':true
},
{
    'id':223,
    'name':'Panzer FT17/18(f)',
    'move':['3','6'],
    'armour':['N','O','O'],
    'special':'One man turret',
    'weapons':[112],
    'ammo':true
},
{
    'id':224,
    'name':'105mm PzFH18 auf 39H(f)',
    'move':['8','12'],
    'armour':['N','N','O'],
    'open':true,
    'weapons':[22],
    'ammo':true
},
{
    'id':225,
    'name':'75mm PaK40 auf 39H(f)',
    'move':['8','12'],
    'armour':['N','N','O'],
    'open':true,
    'weapons':[14],
    'ammo':true
},
{
    'id':226,
    'name':'75mm PaK40 auf mSPW S307(f)',
    'move':['9','13'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[14],
    'ammo':true
},
{
    'id':227,
    'name':'Panzerjaeger 35R',
    'move':['8','12'],
    'armour':['M','O','O'],
    'open':true,
    'weapons':[114],
    'ammo':true
},
{
    'id':228,
    'name':'SdKfz 251/8',
    'move':['12','16'],
    'armour':['O','O','O'],
    'special':'Medic',
    'open':true
},
{
    'id':229,
    'name':'SU-85',
    'move':['12','16'],
    'armour':['K','L','M'],
    'weapons':[46],
    'special':'T-34 Mobility',
    'ammo':true
},
{
    'id':230,
    'name':'KV-85',
    'move':['8','12'],
    'armour':['H','K','l'],
    'weapons':[46],
    'mg':true,
    'ammo':true
},
{
    'id':231,
    'name':'T-80',
    'move':['9','13'],
    'armour':['K','N','O'],
    'mg':true,
    'weapons':[38],
    'ammo':true
},
{
    'id':232,
    'name':'M24 Chaffee',
    'move':['12' ,'18'],
    'armour':['L','N','N'],
    'mg':true,
    'weapons':[68],
    'ammo':true
},
{
    'id':233,
    'name':'Crusader AA \'Triple\'',
    'move':['8','12'],
    'armour':['L','N','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':234,
    'name':'Archer',
    'move':['6','10'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[70],
    'mg':true,
    'ammo':true
},
{
    'id':235,
    'name':'Comet',
    'move':['12','16'],
    'armour':['H','J','K'],
    'weapons':[102],
    'mg':true,
    'ammo':true
},
{
    'id':236,
    'name':'T-34/85',
    'move':['12','16'],
    'armour':['J','L','M'],
    'weapons':[46],
    'mg':true,
    'special':'T-34 Mobility',
    'ammo':true
},
{
    'id':237,
    'name':'IS-II',
    'move':['8','12'],
    'armour':['H','K','L'],
    'weapons':[115],
    'mg':true,
    'ammo':true
},
{
    'id':238,
    'name':'ISU-122',
    'move':['8','12'],
    'armour':['H','K','L'],
    'weapons':[115],
    'mg':true,
    'ammo':true
},
{
    'id':239,
    'name':'ISU-152',
    'move':['8','12'],
    'armour':['H','K','L'],
    'weapons':[50],
    'mg':true,
    'ammo':true
},
{
    'id':240,
    'name':'Komintern tractor',
    'move':['12','16'],
    'special':'Medium gun tow',
    'hits':3,
},
{
    'id':241,
    'name':'Voroshilovets tractor',
    'move':['12','16'],
    'special':'Heavy gun tow',
    'hits':5,
},
{
    'id':242,
    'name':'T-34 ARV',
    'move':['12','16'],
    'armour':['K','L','M'],
    'special':'T-34 Mobility, Repair, Recovery'
},
{
    'id':243,
    'name':'PT-34',
    'move':['12','16'],
    'armour':['K','L','M'],
    'weapons':[44],
    'mg':true,
    'special':'T-34 Mobility, Mineroller',
    'ammo':true
},
{
    'id':244,
    'name':'OT-34',
    'move':['12','16'],
    'armour':['K','L','M'],
    'weapons':[32,44],
    'mg':true,
    'special':'T-34 Mobility',
    'ammo':true //greg also has flamethrower
},
{
    'id':245,
    'name':'M17 MGMC',
    'move':['8','24'],
    'armour':['N','O','O'],
    'mg':true,
    'open':true
},
{
    'id':246,
    'name':'ZSU-37',
    'move':['10','15'],
    'armour':['N','O','O'],
    'weapons':36,
    'open':true,
    'ammo':true
},
{
    'id':247,
    'name':'SU-57',
    'move':['12','24'],
    'armour':['N','O','O'],
    'weapons':59,
    'open':true,
    'ammo':true
},
{
    'id':248,
    'name':'SdKfz 251/20',
    'move':['12','16'],
    'armour':['O','O','O'],
    'special':'Uhu',
    'open':true
},
{
    'id':249,
    'name':'Hetzer 38(t)',
    'move':['9','13'],
    'armour':['I','N','O'],
    'weapons':15,
    'mg':true,
    'ammo':true
},
{
    'id':250,
    'name':'Flammpanzer Hetzer',
    'move':['10','14'],
    'armour':['H','K','L'],
    'weapons':15,
    'mg':true,
    'ammo':true
},
{
    'id':251,
    'name':'Panzer II L \'Luchs\'',
    'move':['10','14'],
    'armour':['N','O','O'],
    'weapons':4,
    'mg':true,
    'ammo':true
},
{
    'id':252,
    'name':'SdKfz 140/1 Aufklaerungspanzerwagen 38',
    'move':['9','13'],
    'armour':['M','O','O'],
    'weapons':4,
    'mg':true,
    'open':true
},
{
    'id':253,
    'name':'SdKfz 234/4',
    'move':['8','24'],
    'armour':['N','O','O'],
    'weapons':14,
    'mg':true,
    'open':true
},
{
    'id':254,
    'name':'SdKfz 251/23',
    'move':['12','16'],
    'armour':['O','O','O'],
    'weapons':4,
    'mg':true
},
{
    'id':255,
    'name':'Bergehetzer',
    'special':'Recovery, Repair',
    'open':true,
    'move':['9','13'],
    'armour':['J','N','O'],
    'mg':true
},
{
    'id':256,
    'name':'Flammwagen Pz B-2(f)',
    'move':['4','8'],
    'armour':['K','K','N'],
    'weapons':[32,114], // greg also needs flame-thrower
    'mg':true,
    'ammo':true
},
{
    'id':257,
    'name':'Sturmmörser Tiger',
    'move':['8','12'],
    'armour':['D','J','N'],
    'weapons':[119],
    'mg':true,
    'ammo':true
},
{
    'id':258,
    'name':'Jagdtiger',
    'move':['5','9'],
    'armour':['A','I','J'],
    'weapons':[118],
    'mg':true,
    'ammo':true
},
{
    'id':259,
    'name':'SdKfz 251/17',
    'move':['12','16'],
    'armour':['O','O','O'],
    'weapons':4,
    'mg':true
},
{
    'id':260,
    'name':'SdKfz 251/21',
    'move':['12','16'],
    'armour':['O','O','O'],
    'weapons':120,
    'mg':true
},
{
    'id':261,
    'name':'Ostwind',
    'open':true,
    'move':['8','12'],
    'armour':['L','N','O'],
    'weapons':[95],
    'mg':true,
    'ammo':true
},
{
    'id':262,
    'name':'SdKfz 251/22',
    'move':['12','16'],
    'armour':['O','O','O'],
    'weapons':14,
    'mg':true
},
{
    'id':263,
    'name':'Jagdpanzer IV (L70)',
    'move':['8','12'],
    'armour':['H','M(L)','N'],
    'weapons':[16],
    'ammo':true
},
{
    'id':264,
    'name':'Nashorn',
    'move':['8','12'],
    'armour':['N','O','O'],
    'weapons':[20],
    'open':true,
    'ammo':true
},
{
    'id':265,
    'name':'Borgward B-IV Wanze',
    'move':['8','12'],
    'armour':['K','L','M'],
    'special':'Multiple Hits',
    'weapons':[108],
    'ammo':true
},
{
    'id':266,
    'name':'M26 Pershing',
    'move':['8' ,'12'],
    'armour':['H','L','M'],
    'weapons':[136],
    'ammo':true,
    'mg':true
},
{
    'id':267,
    'name':'M4A3E8',
    'move':['10' ,'15'],
    'armour':['K','L','M'],
    'weapons':[69],
    'mg':true,
    'ammo':true
},
{
    'id':268,
    'name':'M36 Jackson',
    'move':['9' ,'14'],
    'armour':['M','N','O'],
    'open':true,
    'weapons':[121],
    'mg':true,
    'ammo':true
},
{
    'id':269,
    'name':'M18 Hellcat',
    'move':['14' ,'24'],
    'armour':['M','N','O'],
    'weapons':[69],
    'mg':true,
    'ammo':true
},
{
    'id':270,
    'name':'M4 Sherman Calliope',
    'armour':['K','L','M'],
    'move':['9','14'],
    'weapons':[68,238],
    'ammo':true,
    'mg':true
},
{
    'id':271,
    'name':'M40 GMC',
    'open':true,
    'move':['8' ,'12'],
    'armour':['O','O','O'],
    'weapons':[83],
    'ammo':true
},
{
    'id':272,
    'name':'M43 GMC',
    'open':true,
    'move':['8' ,'12'],
    'armour':['O','O','O'],
    'weapons':[86],
    'ammo':true
},
{
    'id':273,
    'name':'Armoured Jeep',
    'move':['6' ,'24'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'capacity':3
},
{
    'id':274,
    'name':'M4 Sherman Crocodile',
    'move':['9' ,'14'],
    'armour':['K','L','M'],
    'weapons':[32,68], //greg also carries flame-thrower
    'ammo':true,
    'mg':true
},
{
    'id':275,
    'name':'M19 GMC',
    'move':['12' ,'18'],
    'armour':['M','N','O'],
    'open':true,
    'weapons':[63],
    'ammo':true
},
{
    'id':276,
    'name':'M4A3E2 Sherman Jumbo',
    'move':['7' ,'11'],
    'armour':['G','K','M'],
    'weapons':[68],
    'ammo':true,
    'mg':true
},
{
    'id':277,
    'name':'M4A3E2 Sherman Jumbo(76)',
    'move':['7' ,'11'],
    'armour':['G','K','M'],
    'weapons':[69],
    'ammo':true,
    'mg':true
},
{
    'id':278,
    'name':'Panzer 35(t)',
    'move':['7','11'],
    'armour':['N','O','O'],
    'weapons':[122],
    'ammo':true,
    'mg':true
},
{
    'id':279,
    'name':'Panzer 38(t)',
    'move':['9','13'],
    'armour':['L','N','O'],
    'weapons':[123],
    'ammo':true,
    'mg':true
},
{
    'id':280,
    'name':'Panzer 38(t) Panzerbefehlswagen',
    'move':['9','13'],
    'armour':['L','N','O'],
    'mg':true
},
{
    'id':281,
    'name':'SdKfz 251/4',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':282,
    'name':'SdKfz 247',
    'move':['8','24'],
    'armour':['O','O','O'],
    'open':true
},
{
    'id':283,
    'name':'Panzerjaeger auf Pz I',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[114],
    'ammo':true
},
{
    'id':284,
    'name':'sIG33 auf Pz I',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[25],
    'ammo':true
},
{
    'id':285,
    'name':'SdKfz 265 Panzerbefehlswagen',
    'move':['8','12'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':286,
    'name':'Panzer I',
    'move':['8','12'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':287,
    'name':'Panzer II C',
    'move':['10','14'],
    'armour':['O','O','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':288,
    'name':'Panzer III F',
    'move':['8','12'],
    'armour':['M','N','N'],
    'weapons':[123],
    'ammo':true,
    'mg':true
},
{
    'id':289,
    'name':'Panzer III G',
    'move':['8','12'],
    'armour':['M','N','N'],
    'weapons':[8],
    'ammo':true,
    'mg':true
},
{
    'id':290,
    'name':'Toldi I',
    'move':['9','14'],
    'armour':['N','O','O'],
    'weapons':[4],
    'ammo':true,
    'mg':true
},
{
    'id':291,
    'name':'Toldi II',
    'move':['9','14'],
    'armour':['L','O','O'],
    'weapons':[4],
    'ammo':true,
    'mg':true
},
{
    'id':292,
    'name':'Flammpanzer II',
    'move':['10','14'],
    'armour':['N','O','O'],
    'weapons':[32],
    'mg':true
},
{
    'id':293, // based on Humber LRC plus a Boys ATR
    'name':'Morris LRC',
    'move':['8','12'],
    'armour':['O','O','O'],
    'weapons':[137],
    'mg':true
},
{
    'id':294,
    'name':'SdKfz 221',
    'move':['8','24'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':295,
    'name':'Steyr AGDZ',
    'move':['8','24'],
    'armour':['O','O','O'],
    'weapons':[35],
    'ammo':true,
    'mg':true
},
{
    'id':296,
    'name':'Fiat L6/40',
    'move':['9','13'],
    'armour':['L','O','O'],
    'mg':true
},
{
    'id':297,
    'name':'Autoblinda AB41',
    'move':['8','12'],
    'armour':['N','O','O'],
    'mg':true,
    'ammo':true
},
{
    'id':298,
    'name':'OA Vz30',
    'move':['8','24'],
    'armour':['O','O','O'],
    'mg':true,
    'movement':'8;24',
    'weapon':'mg_hull;mg_turret'
},
{
    'id':299,
    'name':'TKS',
    'move':['9','12'],
    'armour':['O','O','O'],
    'mg':true,
    'movement':'8;12',
    'weapon':'mg_hull'
},
{
    'id':300,
    'name':'CV-33',
    'move':['9','13'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'9;13',
    'weapon':'mg_hull'
},
{
    'id':301,
    'name':'CV-35',
    'move':['9','13'],
    'armour':['N','O','O'],
    'mg':true,
    'weapons':[131],
    'movement':'9;13',
    'weapon':'mg_hull;mg_hull'
},
{
    'id':302,
    'name':'CV-35cc',
    'move':['9','13'],
    'armour':['N','O','O'],
    'mg':true,
    'ammo':true,
    'movement':'9;13',
    'weapon':'ATrifle'
},
{
    'id':303,
    'name':'CV-35lf',
    'weapons':[32],
    'move':['9','13'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'9;13',
    'weapon':'flamethrower_hull;mg_hull'
},
{
    'id':304,
    'name':'Light Car',
    'move':['6','24'],
    'hits':2,
    'capacity':3,
    'mg':false,
},
{
    'id':305,
    'name':'SPA TL37',
    'move':['8','24'],
    'hits':2,
    'capacity':3,
    'armour':false,
    'mg':false,
},
{
    'id':306,
    'name':'SPA AS37',
    'move':['8','24'],
    'hits':2,
    'capacity':8,
    'mg':false,
},
{
    'id':307,
    'name':'M11/39',
    'move':['6','10'],
    'armour':['M','O','O'],
    'ammo':true,
    'weapons':[133],
    'mg':true
},
{
    'id':308,
    'name':'CV-35cr',
    'move':['9','13'],
    'armour':['N','O','O'],
    'special':'Comms',
    'mg':true,
    'movement':'9;13',
},
{
    'id':309,
    'name':'M13/40',
    'move':['5','9'],
    'armour':['L','N','N'],
    'ammo':true,
    'weapons':[130],
    'mg':true
},
{
    'id':310,
    'name':'Autoblinda-40',
    'move':['8','12'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'8;12',
},
{
    'id':311,
    'name':'Autoblinda-41',
    'move':['8','12'],
    'armour':['N','O','O'],
    //'mg':true,
    'ammo':true,
    'weapons':[129],
    'movement':'8;12',
},
{
    'id':312,
    'name':'Ansaldo 1ZM',
    'move':['8','12'],
    'armour':['O','O','O'],
    'mg':true,
    'movement':'8;12',
},
{
    'id':313,
    'name':'M14/41',
    'move':['6','11'],
    'armour':['L','M','N'],
    'ammo':true,
    'weapons':[130],
    'mg':true
},
{
    'id':314,
    'name':'Armed Jeep',
    'mg':true,
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':315,
    'name':'Morris C8 Tractor',
    'move':['8','24'],
    'hits':3,
    'special':'Gun tow',
    'capacity':0
},
{
    'id':316,
    'name':'Light Truck',
    'move':['6','24'],
    'hits':2,
    'capacity':8
},
{
    'id':317,
    'name':'Chevrolet 30 cwt',
    'hits':3,
    'move':['6','24'],
    'capacity':1
},
{
    'id':318,
    'name':'Heavy Repair Truck',
    'move':['6','24'],
    'special':'Repair, Recovery',
    'hits':4
},
{
    'id':319,
    'name':'Humber II',
    'move':['8','12'],
    'armour':['N','O','O'],
    'mg':true,
    'ammo':true,
    'weapons':[139],
},
{
    'id':320,
    'name':'Medium Truck with LMG',
    'move':['6','24'],
    'hits':2,
    'mg':true,
    'capacity':12
},
{
    'id':321,
    'name':'A13 Mark II Cruiser Mk.IV',
    'move':['9','15'],
    'armour':['L','M','O'],
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
{
    'id':322,
    'name':'Crusader I',
    'move':['9','13'],
    'armour':['L','M','O'],
    'special':'Unreliable',
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
{
    'id':323,
    'name':'Crusader II',
    'move':['9','13'],
    'armour':['K','M','O'],
    'mg':true,
    'ammo':true,
    'weapons':[58]
},
{
    'id':324,
    'name':'M3 Honey',
    'move':['12' ,'18'],
    'armour':['M','N','N'],
    'mg':true,
    'weapons':[56],
    'ammo':true
},
{
    'id':325,
    'name':'Guy Lizard Armoured Command Vehicle',
    'move':['6','24'],
    'armour':['O','O','O'],
    'mg':true,
},
{
    'id':326,
    'name':'Vickers VI',
    'move':['12','18'],
    'armour':['O','O','O'],
    'mg':true,
},
{
    'id':327,
    'name':'Vickers VI A-B',
    'move':['12','18'],
    'armour':['O','O','O'],
    'mg':true,
},
{
    'id':328,
    'name':'Vickers VI C',
    'move':['12','18'],
    'armour':['O','O','O'],
    'mg':true,
    'ammo':true,
    'weapons':[139],
},
{
    'id':329,
    'name':'Bren Carrier with Boys AT-rifle',
    'move':['10','15'],
    'armour':['O','O','O'],
    'open':true,
    'ammo':true,
    'weapons':[137],
},
{
    'id':330,
    'name':'Matilda II CS',
    'move':['5','8'],
    'armour':['J','K','L'],
    'mg':true,
    'weapons':[140],
    'ammo':true,
},
{
    'id':331,
    'name':'Valentine II',
    'move':['6','9'],
    'armour':['K','K','N'],
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
{
    'id':332,
    'name':'A9 Cruiser Mk.I',
    'move':['8','12'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
{
    'id':333,
    'name':'A9 CS',
    'move':['8','12'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'mg':true,
    'weapons':[140],
    'ammo':true,
},
{
    'id':334,
    'name':'A10 Cruiser Mk.II',
    'move':['5','8'],
    'armour':['M','N','O'],
    'special':'Unreliable',
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
{
    'id':335,
    'name':'A13 Cruiser Mk.III',
    'armour':true,
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
{
    'id':336,
    'name':'Chevrolet 30 cwt with Boys AT-rifle',
    'hits':3,
    'move':['6','24'],
    'mg':true,
    'weapons':[137],
    'ammo':true,
},
{
    'id':337,
    'name':'Chevrolet 30 cwt with LMG',
    'hits':3,
    'move':['6','24'],
    'mg':true
},
{
    'id':338,
    'name':'Chevrolet 30 cwt with LMG',
    'hits':3,
    'move':['6','24'],
    'mg':true
},
{
    'id':339,
    'name':'Crusader II CS',
    'move':['9','13'],
    'armour':['K','M','O'],
    'mg':true,
    'weapons':[140],
    'ammo':true,
},
{
    'id':340,
    'name':'Morris CS9',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'weapons':[137],
    'ammo':true,
},
{
    'id':341,
    'name':'Rolls Royce Armoured Car',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'weapons':[137],
    'ammo':true,
},
{
    'id':342,
    'name':'Marmon Herrington I',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':343,
    'name':'Marmon Herrington II',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'weapons':[137],
    'ammo':true,
},
{
    'id':344,
    'name':'Marmon Herrington II A',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[129],
    'ammo':true,
},
{
    'id':345,
    'name':'Marmon Herrington II A',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[7],
    'ammo':true,
},
{
    'id':346,
    'name':'Humber Light Recce Vehicle',
    'move':['8','12'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':347,
    'name':'Armoured Carrier, Indian Pattern',
    'move':['8' ,'24'],
    'armour':['N','O','O'],
    'open':true,
    'mg':true,
    'weapons':[137],
    'ammo':true,
},
{
    'id':348,
    'name':'Morris CDSW',
    'move':['8','24'],
    'hits':3,
    'special':'Gun tow',
    'capacity':0
},
{
    'id':349,
    'name':'Captured Kübelwagen',
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':350,
    'name':'Lancia 3RO Heavy Truck',
    'move':['6','24'],
    'hits':4,
    'capacity':32
},
{
    'id':351,
    'name':'Panzer III E Befehlswagen',
    'move':['8','12'],
    'armour':['M','N','N'],
    'mg':true
},
{
    'id':352,
    'name':'Flammpanzer I',
    'move':['8','12'],
    'armour':['O','O','O'],
    'weapons':[32],
    'mg':true
},
{
    'id':353,
    'name':'Toldi II',
    'move':['9','14'],
    'armour':['L','O','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':354,
    'name':'40M Turán I',
    'move':['9','14'],
    'armour':['K','N','O'],
    'weapons':[152],
    'mg':true,
    'ammo':true
},
{
    'id':355,
    'name':'41M Turán II',
    'move':['9','14'],
    'armour':['K','N(M)','O'],
    'weapons':[150],
    'mg':true,
    'ammo':true
},
{
    'id':356,
    'name':'43M Zrinyi II',
    'move':['8','13'],
    'armour':['I','M(L)','N'],
    'weapons':[153],
    //'mg':true,
    'ammo':true
},
{
    'id':357,
    'name':'40M Nimród',
    'move':['10','15'],
    'armour':['M','O','O'],
    'open':true,
    'weapons':[63],
    'mg':true,
    'ammo':true
},
{
    'id':358,
    'name':'39M Csaba',
    'move':['8','24'],
    'armour':['O','O','O'],
    'weapons':[4],
    'ammo':true
},
{
    'id':359,
    'name':'40M Csaba',
    'move':['8','24'],
    'armour':['O','O','O'],
    'mg':true
},
{
    'id':360,
    'name':'Panzer I Ambulance',
    'move':['8','12'],
    'armour':['O','O','O'],
    'special':'Medic'
},
{
    'id':361,
    'name':'Panzer III H Panzerbefehlswagen',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[8],
    'ammo':true,
    'mg':true
},
{
    'id':362,
    'name':'SdKfz 251/6',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':363,
    'name':'BAB Armoured Car',
    'move':['8','24'],
    'armour':['N','O','O'],
    'mg':true
},
{
    'id':364,
    'name':'BAF Armoured Car',
    'move':['10','20'],
    'armour':['N','O','O'],
    'weapons':[38],
    'ammo':true,
    'mg':true
},
{
    'id':365,
    'name':'T-26 m36',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[38],
    'ammo':true,
    'mg':true
},
{
    'id':366,
    'name':'T-28',
    'move':['6','10'],
    'armour':['M','N','O'],
    'special':'Unreliable, Multiple turrets',
    'weapons':[41],
    'ammo':true,
    'mg':true
},
{
    'id':367,
    'name':'BT-5',
    'move':['12','20'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[38],
    'ammo':true,
    'mg':true
},
{
    'id':368,
    'name':'BT-7',
    'move':['15','22'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[38],
    'ammo':true,
    'mg':true
},
{
    'id':369,
    'name':'Panzer III H',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[8],
    'ammo':true,
    'mg':true
},
{
    'id':370,
    'name':'OT-130 Flamethrower Tank',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[32],
    'ammo':true,
    'mg':false,
},
{
    'id':371,
    'name':'CV3/33 Tankette',
    'move':['8','13'],
    'armour':['O','O','O'],
    'mg':true,
},
{
    'id':372,
    'name':'R-35 Tank',
    'move':['8','12'],
    'armour':['M','N','N'],
    'special':'One man turret',
    'weapons':[112],
    'ammo':true,
    'mg':true,
},
{
    'id':373,
    'name':'Tatra Armoured Car',
    'move':['8','24'],
    'armour':['O','O','O'],
    'mg':true,
},
{
    'id':374,
    'name':'R1 (AH-IV) Tankette',
    'move':['10','14'],
    'armour':['O','O','O'],
    'special':'One man turret',
    'mg':true,
},
{
    'id':375,
    'name':'UE Supply Carrier',
    'move':['6','10'],
    'armour':['O','O','O'],
    'mg':false,
},
{
    'id':376,
    'name':'T-26 m39',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[38],
    'ammo':true,
    'mg':true,
},

{
    'id':377,
    'name':'T-34/40 (L30)',
    'move':['12','16'],
    'armour':['K','L','M'],
    'weapons':[43],
    'mg':true,
    'special':'T-34 Mobility, Unreliable',
    'ammo':true,
},
{
    'id':378,
    'name':'T-34/40 (L40)',
    'move':['12','16'],
    'armour':['K','L','M'],
    'weapons':[44],
    'mg':true,
    'special':'T-34 Mobility, Unreliable',
    'ammo':true,
},
{
    'id':379,
    'name':'BT-7M',
    'move':['15','22'],
    'armour':['M','O','O'],
    'special':'Unreliable',
    'weapons':[38],
    'ammo':true,
    'mg':true
},
{
    'id':380,
    'name':'T-26 m31',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[37],
    'ammo':true,
    'mg':true,
},
{
    'id':381,
    'name':'T-26 m33',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[38],
    'ammo':true,
    'mg':true,
},
{
    'id':382,
    'name':'BT-2(MG)',
    'move':['12','20'],
    'armour':['N','O','O'],
    'special':'Unreliable, One man turret',
    'mg':true,
},
{
    'id':383,
    'name':'BT-2',
    'move':['12','20'],
    'armour':['N','O','O'],
    'special':'Unreliable, One man turret',
    'weapons':[37],
    'ammo':true,
    'mg':true,
},
{
    'id':384,
    'name':'BT-7A',
    'move':['15','22'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[41],
    'ammo':true,
    'mg':true,
},
{
    'id':385,
    'name':'T-27 Tankette',
    'move':['8','13'],
    'armour':['O','O','O'],
    'special':'Unreliable',
    'mg':true,
},
{
    'id':386,
    'name':'T-26 N Observation Tank',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'mg':true,
 },
{
    'id':387,
    'name':'T-37',
    'move':['10','20'],
    'armour':['O','O','O'],
    'special':'Unreliable, Amphibious',
    'mg':true,
},
{
    'id':388,
    'name':'T-38',
    'move':['7','14'],
    'armour':['O','O','O'],
    'special':'Unreliable, Amphibious',
    'mg':true,
},
{
    'id':389,
    'name':'T-40',
    'move':['9','14'],
    'armour':['O','O','O'],
    'special':'Amphibious',
    'mg':true,
},
{
    'id':390,
    'name':'T-30 (T-40S)',
    'move':['9','14'],
    'armour':['O','O','O'],
    'weapons':[35],
    'ammo':true,
    'mg':true,
},
{
    'id':391,
    'name':'T-50',
    'move':['12','18'],
    'armour':['L','M','N'],
    'weapons':[38],
    'ammo':true,
    'mg':true,
},
{
    'id':392,
    'name':'BA-3',
    'move':['8','24'],
    'armour':['O','O','O'],
    'weapons':[38],
    'ammo':true,
    'mg':true,
},
{
    'id':393,
    'name':'BA-20',
    'move':['8','24'],
    'armour':['N','O','O'],
    'mg':true,
},
{
    'id':394,
    'name':'ST-26',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable, Bridging',
    'mg':false
},
{
    'id':395,
    'name':'OT-7',
    'move':['15','22'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[32],
    'ammo':true,
    'mg':true,
},
{
    'id':396,
    'name':'TB-26',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'mg':false
},
{
    'id':397,
    'name':'T-26T Tractor',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'mg':false,
},
{
    'id':398,
    'name':'SU-12',
    'move':['6','24'],
    'hits':3,
    'weapons':[41],
    'ammo':false,
    'mg':false,
},
{
    'id':399,
    'name':'SU-5',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'open':true,
    'weapons':[164],
    'ammo':true,
    'mg':false,
},
{
    'id':400,
    'name':'AT-1',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[41],
    'ammo':true,
    'mg':false,
},
{
    'id':401,
    'name':'T-35',
    'move':['6','9'],
    'armour':['L','M','O'],
    'special':'Unreliable, Multiple turrets',
    'weapons':[41],
    'ammo':true,
    'mg':true,
},
{
    'id':402,
    'name':'KV-1A (L30)',
    'move':['6','10'],
    'armour':['H','K','L'],
    'special':'Unreliable',
    'weapons':[43],
    'ammo':true,
    'mg':true,
},
{
    'id':403,
    'name':'TP-26 APC',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'mg':false,
},
{
    'id':404,
    'name':'Panzer III J (lang)',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[9],
    'ammo':true,
    'mg':true
},
{
    'id':405,
    'name':'Panzer IV F2',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[165],
    'mg':true,
    'ammo':true
},
{
    'id':406,
    'name':'Panzer IV Brückenleger',
    'move':['8','12'],
    'armour':['M','N','O'],
    'special':'Bridging'
},
{
    'id':407,
    'name':'StuG 33B',
    'move':['6','10'],
    'armour':['H','K','N'],
    'weapons':[25],
    'mg':true,
    'ammo':true
},
{
    'id':408,
    'name':'KV-8',
    'move':['7','11'],
    'armour':['I','K','L'],
    'weapons':[17,32],
    'mg':true,
    'ammo':true
},
{
    'id':409,
    'name':'Semoventa M40 47/32',
    'move':['9','13'],
    'armour':['M','N','O'],
    'open':true,
    'weapons':[113],
    'mg':true,
    'ammo':true
},
{
    'id':410,
    'name':'Crusader III',
    'move':['9','13'],
    'armour':['K','M','O'],
    'weapons':[59],
    'mg':true,
    'ammo':true
},
{
    'id':411,
    'name':'Bishop',
    'move':['5','8'],
    'armour':['K','K','N'],
    'open':true,
    'weapons':[73],
    'ammo':true
},
{
    'id':412,
    'name':'Marmon Herrington III',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'weapons':[137],
    'ammo':true,
},
{
    'id':413,
    'name':'Marmon Herrington III A',
    'move':['8','12'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'ammo':true,
},
{
    'id':414,
    'name':'Matilda Scorpion',
    'move':['5','8'],
    'armour':['J','K','L'],
    'weapons':[58],
    'mg':true,
    'ammo':true,
    'special':'Engineer, Unreliable',
},
{
    'id':415,
    'name':'M3 GMC',
    'move':['12','24'],
    'armour':['N','O','O'],
    'weapons':[12],
    'ammo':true,
    'open':true
},
{
    'id':416,
    'name':'M31 ARV',
    'move':['8','13'],
    'armour':['L','M','O'],
    'open':true,
    'special':'Repair, Recovery'
},
{
    'id':417,
    'name':'Valentine VIII',
    'move':['5','8'],
    'armour':['K','K','L'],
    'weapons':[59],
    'mg':true,
    'ammo':true
},
{
    'id':418,
    'name':'Churchill II',
    'move':['5','8'],
    'armour':['I','J','J'],
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':419,
    'name':'Churchill I',
    'move':['5','8'],
    'armour':['I','J','J'],
    'weapons':[58,140],
    'mg':true,
    'special':'Unreliable',
    'ammo':true
},
{
    'id':420,
    'name':'SdKfz 253',
    'move':['12','16'],
    'armour':['O','O','O'],
    //'open':true
},
{
    'id':421,
    'name':'SdKfz 254',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true
},
{
    'id':422,
    'name':'Grille auf Pz II',
    'move':['8','12'],
    'armour':['M','N','O'],
    'open':true,
    'weapons':[25],
    'special':'Unreliable',
    'ammo':true
},
{
    'id':423,
    'name':'Horch Heavy car',
    'move':['6','24'],
    'hits':2,
    'capacity':5
},
{
    'id':424,
    'name':'SdKfz 6 auf 36(r) \'Diana\'',
    'move':['12','16'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[162],
    'ammo':true
},
{
    'id':425,
    'name':'StuG III F8',
    'move':['8','12'],
    'armour':['L','N','N'],
    'weapons':[13],
    'mg':true,
    'ammo':true
},
{
    'id':426,
    'name':'T30 HMC (75mm)',
    'move':['12','24'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[65],
    'mg':false,
    'ammo':true
},
{
    'id':427,
    'name':'Semoventa M41 75/18',
    'move':['6','11'],
    'armour':['K','M','O'],
    'weapons':[169],
    'mg':true,
    'ammo':true
},
{
    'id':428,
    'name':'Heavy car',
    'move':['6','24'],
    'hits':2,
    'capacity':5
},
{
    'id':429,
    'name':'Breda 61',
    'move':['12','16'],
    'hits':4,
    'capacity':12
},
{
    'id':430,
    'name':'SPA AS42',
    'move':['8','24'],
    'hits':3,
    'armour':false,
    'mg':true,
    'hp':"3",
    'movement':'8;24',
},
{
    'id':431,
    'name':'M3 Stuart',
    'move':['12' ,'18'],
    'armour':['M','N','N'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':432,
    'name':'M3 Lee',
    'move':['8','13'],
    'armour':['L','M','O'],
    'weapons':[56,57],
    'mg':true,
    'ammo':[14,5]
},
{
    'id':433,
    'name':'T19 HMC (105mm)',
    'move':['12','24'],
    'armour':['N','O','O'],
    'open':true,
    'weapons':[76],
    'mg':false,
    'ammo':true
},
{
    'id':434,
    'name':'Bulldozer',
    'move':['6','9'],
    'hits':3,
    'armour':false,
    'hp':"3",
},
{
    'id':435,
    'name':'M13',
    'open':true,
    'armour':true,
    'mg':true
},
{
    'id':436,
    'name':'M6 GMC Portee\'d 37mm',
    'move':['6','24'],
    'hits':2,
    'armour':false,
    'hp':"2",
    'weapons':[56],
    'ammo':true,
    'open':true
},
{
    'id':437,
    'name':'FT-17',
    'move':['3','6'],
    'armour':['N','O','O'],
    'weapons':[112],
    'mg':false,
    'movement':'3;6',
    'ammo':true
},
{
    'id':438,
    'name':'Somua S-35',
    'move':['10','14'],
    'armour':['L','M','N'],
    'special':'One man turret',
    'weapons':[113],
    'mg':true,
    'ammo':true
},
{
    'id':439,
    'name':'Renault D-1',
    'move':['4','6'],
    'armour':['L','N','O'],
    'weapons':[113],
    'mg':true,
    'movement':'4;6',
    'ammo':true
},
{
    'id':440,
    'name':'Laffly 50AM',
    'move':['8','24'],
    'armour':['O','O','O'],
    'weapons':[112],
    'mg':true,
    'ammo':true
},
{
    'id':441,
    'name':'Schneider P16',
    'move':['10','15'],
    'armour':['O','O','O'],
    'weapons':[112],
    'mg':true,
    'ammo':true
},
{
    'id':442,
    'name':'Polski Fiat 508 Car',
    'move':['6','24'],
    'hits':2,
    'capacity':3
},
{
    'id':443,
    'name':'Polski Fiat 621 Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':12
},
{
    'id':444,
    'name':'Wz.34 Half Track',
    'move':['12','16'],
    'hits':3,
    'weapons':[112],
    'mg':false,
    'special':'Capaity 12 or one gun',
    'ammo':true
},
{
    'id':445,
    'name':'TKS with 20mm Gun',
    'move':['8','12'],
    'armour':['O','O','O'],
  //  'weapons':[113],
    'weapons':[177],
    'mg':false,
    'movement':'8;12',
    'ammo':true
},
{
    'id':446,
    'name':'Vickers E Type A',
    'move':['7','11'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'7;11',
},
{
    'id':447,
    'name':'Vickers E Type B',
    'move':['7','11'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'7;11',
    'weapons':[113],
    'ammo':true
},
{
    'id':448,
    'name':'FT-17 (MG)',
    'move':['3','6'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'3;6',
},
{
    'id':449,
    'name':'Wz.34 C4P Half-Track',
    'move':['12','16'],
    'hits':3,
    'movement':'12;16',
    'capacity':12
},
{
    'id':450,
    'name':'C2P Artillery Tractor',
    'move':['8','10'],
    'hits':2,
    'special':'One gun tow',
    'movement':'8;10',
},
{
    'id':451,
    'name':'Wz 34 Armoured Car',
    'move':['12','16'],
    'armour':['O','O','O'],
    'mg':false,
    'movement':'12;16',
    'weapons':[112],
    'ammo':true
},
{
    'id':452,
    'name':'Wz 34 (MG) Armoured Car',
    'move':['12','16'],
    'armour':['O','O','O'],
    'mg':true,
    'movement':'12;16',
},
{
    'id':453,
    'name':'Wz 39 Ursus',
    'move':['12','16'],
    'armour':['O','O','O'],
    'mg':true,
    'movement':'12;16',
    'weapons':[112],
    'ammo':true
},
{
    'id':454,
    'name':'7TP (MG)',
    'move':['8','12'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'8;12',
},
{
    'id':455,
    'name':'7TP 37mm',
    'move':['8','12'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'8;12',
    'weapons':[37],
    'ammo':true
},
{
    'id':456,
    'name':'TKD with 47mm',
    'move':['8','12'],
    'armour':['O','O','O'],
    'mg':false,
    'movement':'8;12',
    'weapons':[179],
    'ammo':true
},
{
    'id':457,
    'name':'Panzer III E Panzerbefehlswagen',
    'move':['8','12'],
    'armour':['M','N','N'],
    'mg':true
},
{
    'id':458,
    'name':'Panzer IV D',
    'move':['8','12'],
    'armour':['M','N','N'],
    'weapons':[11],
    'mg':true,
    'ammo':true
},
{
    'id':459,
    'name':'Krüpp Protze Kfz69',
    'move':['12','16'],
    'hits':2,
    'capacity':0
},
{
    'id':460,
    'name':'Panzer I Brückenleger',
    'move':['8','10'],
    'armour':['O','O','O'],
    'special':'Bridging'
},
{
    'id':461,
    'name':'Panzer I munitions-schlepper',
    'move':['8','12'],
    'armour':['O','O','O']
},
{
    'id':462,
    'name':'\'Bunkerflak\'',
    'move':['8','24'],
    'armour':['O','O','O'],
    'weapons':[19],
    'mg':false,
    'ammo':true
},
{
    'id':463,
    'name':'Kfz 13',
    'move':['8','24'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
},
{
    'id':464,
    'name':'Steyr ADGZ',
    'move':['8','24'],
    'armour':['O','O','O'],
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':465,
    'name':'Panzer III D',
    'move':['8','12'],
    'armour':['N','N','N'],
    'weapons':[123],
    'mg':true,
    'ammo':true
},
{
    'id':466,
    'name':'Panzer III E',
    'move':['8','12'],
    'armour':['M','N','N'],
    'weapons':[123],
    'mg':true,
    'ammo':true
},
{
    'id':467,
    'name':'Kfz 14',
    'move':['8','24'],
    'armour':['O','O','O'],
    'open':true,
    'mg':false,
},
{
    'id':468,
    'name':'Panzer IV A-C',
    'move':['8','12'],
    'armour':['M','O','O'],
    'weapons':[11],
    'mg':true,
    'ammo':true
},
{
    'id':469,
    'name':'Matilda I',
    'mg':true,
    'move':['3','4'],
    'armour':['K','K','L'],
},
{
    'id':470,
    'name':'A13 Cruiser Mk I',
    'move':['9','15'],
    'armour':['M','N','O'],
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
{
    'id':471,
    'name':'Guy Mk I',
    'mg':true,
    'move':['8','12'],
    'armour':['N','O','O'],
},
{
    'id':472,
    'name':'AMR-35',
    'move':['3','6'],
    'armour':['N','O','O'],
    'mg':true,
    'special':'One man turret',
    'movement':'4;6',
},
{
    'id':473,
    'name':'H-35',
    'move':['8','12'],
    'armour':['N','N','N'],
    'weapons':[112],
    'special':'One man turret',
    'mg':true,
    'movement':'8;12',
    'ammo':true
},
{
    'id':474,
    'name':'H-39',
    'move':['8','12'],
    'armour':['M','N','N'],
    'special':'One man turret',
    'weapons':[112],
    'mg':true,
    'movement':'8;12',
    'ammo':true
},
{
    'id':475,
    'name':'R-40',
    'move':['9','13'],
    'armour':['M','N','N'],
    'special':'One man turret',
    'weapons':[185],
    'mg':false,
    'movement':'9;13',
    'ammo':true
},
{
    'id':476,
    'name':'AMC-35',
    'move':['9','13'],
    'armour':['M','N','O'],
    'weapons':[113],
    'mg':false,
    'movement':'9;13',
    'ammo':true
},
{
    'id':477,
    'name':'Renault D-2',
    'move':['5','7'],
    'armour':['L','N','O'],
    'weapons':[113],
    'mg':true,
    'movement':'5;7',
    'ammo':true
},
{
    'id':478,
    'name':'Lorraine Carrier 37L',
    'move':['8','11'],
    'armour':['O','O','O'],
    'capacity':'5',
    'open':true,
    'weapons':[173],
    'mg':false,
    'movement':'8;11',
    'ammo':true
},
{
    'id':479,
    'name':'Citroen U23 Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':12
},
{
    'id':480,
    'name':'Laffly S15 Heavy Car',
    'move':['6','24'],
    'hits':2,
    'capacity':4
},
{
    'id':481,
    'name':'Laffly S20TL Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':12
},
{
    'id':482,
    'name':'Renault AHS Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':12
},
{
    'id':483,
    'name':'P19 Kegresse Half Track',
    'move':['12','18'],
    'hits':3,
    'capacity':10
},
{
    'id':484,
    'name':'Unic P107 Half Track',
    'move':['12','18'],
    'hits':2,
    'capacity':'6 + 75mm Gun tow'
},
{
    'id':485,
    'name':'P19 Kegresse Tank Hunter',
    'weapons':[170],
    'move':['12','18'],
    'hits':2,
    'capacity':0
},
{
    'id':486,
    'name':'Laffly W15TCC Tank Hunter',
    'weapons':[173],
    'move':['12','18'],
    'hits':2,
    'capacity':0
},
{
    'id':487,
    'name':'Somua MCG Prime Mover',
    'move':['12','18'],
    'hits':4,
    'special':'Medium gun tow'
},
{
    'id':488,
    'name':'Somua MCG Recovery',
    'move':['12','18'],
    'hits':4,
    'special':'Recovery, Repair'
},
{
    'id':489,
    'name':'Somua MCL5 Recovery',
    'move':['6','24'],
    'hits':3,
    'special':'Repair'
},
{
    'id':490,
    'name':'FCM-36',
    'move':['4','6'],
    'armour':['L','M','O'],
    'special':'One man turret',
    'weapons':[112],
    'mg':true,
    'movement':'4;6',
    'ammo':true
},
{
    'id':491,
    'name':'Lorraine Carrier 38L',
    'move':['8','11'],
    'armour':['O','O','O'],
    'open':true,
    'mg':false,
    'capacity':'11',
    'movement':'8;11'
},
{
    'id':492,
    'name':'Char-B',
    'move':['6','9'],
    'armour':['K','L','M'],
    'special':'One man turret',
    'weapons':[186,187],
    'mg':true,
    'movement':'6;9',
    'ammo':true
},
{
    'id':493,
    'name':'Char-B1 bis',
    'move':['6','9'],
    'armour':['J','K','M'],
    'special':'One man turret',
    'weapons':[186,187],
    'mg':true,
    'movement':'6;9',
    'ammo':true
},
{
    'id':494,
    'name':'Char-2C',
    'move':['3','4'],
    'armour':['K','L','N'],
    'special':'Unreliable',
    'weapons':[188],
    'mg':true,
    'movement':'3;4',
    'ammo':true
},
{
    'id':495,
    'name':'Lorraine Carrier 37L CC with 47mmL',
    'move':['8','11'],
    'armour':['O','O','O'],
    'weapons':[173],
    'mg':false,
    'movement':'8;11',
    'ammo':true
},
{
    'id':496,
    'name':'Brassel-Tal Heavy Truck',
    'move':['6','24'],
    'hits':4,
    'special':'Recovery',
    'movement':'6;24'
},
{
    'id':497,
    'name':'Vickers T15',
    'move':['12','18'],
    'armour':['O','O','O'],
    'special':'One man turret',
    'mg':true,
    'movement':'12;18'
},
{
    'id':498,
    'name':'ACG-1',
    'move':['9','13'],
    'armour':['M','N','O'],
    'special':'Unreliable',
    'weapons':[113],
    'mg':true,
    'movement':'9;13',
    'ammo':true
},
{
    'id':499,
    'name':'T13 B1 or B2',
    'move':['12','18'],
    'armour':['O','O','O'],
    'open':true,
    'weapons':[113],
    'mg':false,
    'movement':'12;18',
    'ammo':true
},
{
    'id':500,
    'name':'T13 B3',
    'move':['12','18'],
    'armour':['N','O','O'],
    'weapons':[113],
    'mg':false,
    'movement':'12;18',
    'ammo':true
},
{
    'id':501,
    'name':'VUDB Berliet',
    'move':['12','16'],
    'armour':['O','O','O'],
    'capacity':6,
    'movement':'12;16'
},
{
    'id':502,
    'name':'Armoured Marmon-Herrington',
    'move':['6','24'],
    'armour':['O','O','O'],
    'open':true,
    'movement':'6;24'
},
{
    'id':503,
    'name':'Carden Loyd Tractor',
    'move':['10','15'],
    'armour':['O','O','O'],
    'open':true,
    'movement':'10;15'
},
{
    'id':504,
    'name':'Marmon-Herrington Car',
    'move':['6','24'],
    'hits':2,
    'capacity':3,
    'movement':'6;24'
},
{
    'id':505,
    'name':'FN Kegresse',
    'move':['12','18'],
    'hits':3,
    'special':'Gun tow',
    'movement':'12;18'
},
{
    'id':506,
    'name':'FN Tricar',
    'move':['6','24'],
    'hits':1,
    'capacity':2,
    'movement':'6;24'
},
{
    'id':507,
    'name':'Latil Tractor',
    'move':['6','24'],
    'hits':3,
    'special':'Gun tow',
    'movement':'6;24'
},
{
    'id':508,
    'name':'Landsverk M36',
    'move':['9' ,'14'],
    'armour':['N','N','O'],
    'weapons':[202],
    'mg':true,
    'movement':'9;14',
    'ammo':true
},
{
    'id':509,
    'name':'Landsverk M38',
    'move':['9' ,'14'],
    'armour':['N','N','O'],
    'weapons':[202],
    'mg':true,
    'movement':'9;14',
    'ammo':true
},
{
    'id':510,
    'name':'DAF 39',
    'move':['8' ,'12'],
    'armour':['N','N','O'],
    'weapons':[202],
    'mg':true,
    'movement':'8;12',
    'ammo':true
},
{
    'id':511,
    'name':'Carden Loyd Tankette',
    'move':['6' ,'10'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'6;10'
},
{
    'id':512,
    'name':'Type 94 Tankette',
    'move':['9' ,'12'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'9;12'
},
{
    'id':513,
    'name':'Type 97 Te-Ke',
    'move':['9' ,'13'],
    'armour':['N','O','O'],
    'special':'One man turret',
    'weapons':[219],
    'mg':true,
    'movement':'9;13',
    'ammo':true
},
{
    'id':514,
    'name':'Type 89 I-Go',
    'move':['5' ,'8'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[221],
    'mg':true,
    'movement':'5;8',
    'ammo':true
},
{
    'id':515,
    'name':'Type 95 Ha-Go',
    'move':['10' ,'14'],
    'armour':['N','O','O'],
    'special':'One man turret',
    'weapons':[219],
    'mg':true,
    'movement':'10;14',
    'ammo':true
},
{
    'id':516,
    'name':'Type 98 Ke-Ni',
    'move':['11' ,'15'],
    'armour':['N','O','O'],
    'weapons':[219],
    'mg':true,
    'movement':'11;15',
    'ammo':true
},
{
    'id':517,
    'name':'Type 2 Ke-To',
    'move':['11' ,'15'],
    'armour':['N','O','O'],
    'weapons':[123],
    'mg':true,
    'movement':'11;15',
    'ammo':true
},
{
    'id':518,
    'name':'Type 2 Ka-Mi',
    'move':['8' ,'11'],
    'armour':['N','O','O'],
    'special':'One man turret, Amphibious',
    'weapons':[219],
    'mg':true,
    'movement':'8;11',
    'ammo':true
},
{
    'id':519,
    'name':'Type 97 Chi-Ha',
    'move':['9' ,'12'],
    'armour':['L','M','N'],
    'weapons':[221],
    'mg':true,
    'movement':'9;12',
    'ammo':true
},
{
    'id':520,
    'name':'Type 97 Shinhoto Chi-Ha',
    'move':['9' ,'12'],
    'armour':['L','M','N'],
    'weapons':[220],
    'mg':true,
    'movement':'9;12',
    'ammo':true
},
{
    'id':521,
    'name':'Type 91 Sumi-Da',
    'move':['8' ,'16'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'8;16',
},
{
    'id':522,
    'name':'Type 93',
    'move':['8' ,'16'],
    'armour':['N','O','O'],
    'mg':true,
    'movement':'8;16',
},
{
    'id':523,
    'name':'Type 1 Ho-Ni I',
    'move':['9' ,'12'],
    'armour':['L','M','N'],
    'open':true,
    'weapons':[227],
    'movement':'9;12',
    'ammo':true
},
{
    'id':524,
    'name':'Type 1 Ho-Ni II',
    'move':['9' ,'12'],
    'armour':['L','M','N'],
    'open':true,
    'weapons':[229],
    'movement':'9;12',
    'ammo':true
},
{
    'id':525,
    'name':'Type 4 Ho-Ro',
    'move':['9' ,'12'],
    'armour':['L','M','N'],
    'open':true,
    'weapons':[231],
    'movement':'9;12',
    'ammo':true
},
{
    'id':526,
    'name':'Type 96 SS-Ki',
    'move':['8' ,'12'],
    'armour':['N','N','O'],
    //'open':true,
    //'weapons':[227],
    'mg':true,
    'movement':'8;12',
    'ammo':true,
    'weapon':'flamethrower_hull;mg_hull',
    'special':'Bridging, Engineer'
},
{
    'id':527,
    'name':'Type 1 Ho-Ki',
    'move':['9' ,'13'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'movement':'9;13'
},
{
    'id':528,
    'name':'Type 1 Ho-Ha',
    'move':['12' ,'16'],
    'armour':['N','O','O'],
    'open':true,
    'mg':true,
    'movement':'12;16'
},
{
    'id':529,
    'name':'Type 98 So-Da',
    'move':['10' ,'14'],
    'armour':['O','O','O'],
    'movement':'10;14',
},
{
    'id':530,
    'name':'Type 95 Kurogane',
    'move':['6','24'],
    'hits':2,
    'capacity':3,
    'movement':'6;24'
},
{
    'id':531,
    'name':'Type 94 Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':12,
    'movement':'6;24'
},
{
    'id':532,
    'name':'Type 97 Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':14,
    'movement':'6;24'
},
{
    'id':533,
    'name':'Nissan 80/180 Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':16,
    'movement':'6;24'
},
{
    'id':534,
    'name':'Type 94 Yo-Ke',
    'move':['9','12'],
    'hits':3,
    'special':'One light gun tow',
    'movement':'9;12'
},
{
    'id':535,
    'name':'Type 98 Shi-Ke',
    'move':['9','12'],
    'hits':3,
    'special':'One light gun tow',
    'movement':'9;12'
},
{
    'id':536,
    'name':'Type 98 Ro-Ke',
    'move':['9','12'],
    'hits':4,
    'special':'One medium gun tow',
    'movement':'9;12'
},
{
    'id':537,
    'name':'M3 Stuart \'Satan\'',
    'move':['12' ,'18'],
    'armour':['M','N','N'],
    'weapons':[56],
    'mg':true,
    'ammo':true,
    'weapon':'flamethrower_hull;mg_hull'
},
{
    'id':538,
    'name':'M4 Sherman \'Zippo\'',
    'move':['9','14'],
    'armour':['K','L','N'],
    'open':true,
    'weapons':[68,32],
    'mg':true,
    'ammo':true,
    'weapon':'flamethrower_coax;mg_hull'
},
{
    'id':539,
    'name':'LVT-1',
    'move':['4','6'],
    'hits':4,
    'mg':true,
    'capacity':18,
    'special':'Amphibious, Unreliable'
},
{
    'id':540,
    'name':'LVT-2',
    'move':['6','9'],
    'hits':4,
    'mg':true,
    'capacity':24,
    'special':'Amphibious, Unreliable'
},
{
    'id':541,
    'name':'Landing Craft Assault (LCA)',
    'move':['9','0'],
    'hits':5,
    'capacity':26
},
{
    'id':542,
    'name':'Landing Craft Vehicle Personnel (LCVP)',
    'move':['9','0'],
    'hits':5,
    'mg':true,
    'special':'2 x .30 cal MMGs',
    'capacity':30
},
{
    'id':543,
    'name':'Landing Craft Mechanised (LCM)',
    'move':['6','0'],
    'hits':7,
    'special':'OR 1 vehicle/gun',
    'capacity':80
},
{
    'id':544,
    'name':'Landing Craft Tank (LCT)',
    'weapons':[58],
    'move':['6','0'],
    'hits':12,
    'special':'4 vehicle capacity',
},
{
    'id':545,
    'name':'Landing Craft Support (LCS)',
    'move':['9','0'],
    'hits':5,
    'special':'3 x .50 cal HMGs',
    'mg':true
},
{
    'id':546,
    'name':'Landing Craft Rocket (LCR)',
    'weapons':[94],
    'move':['6','0'],
    'hits':12,
    'special':'Drenching barrage',
},
{
    'id':547,
    'name':'LVT(A)-2',
    'move':['5' ,'10'],
    'armour':['N','O','O'],
    'special':'Amphibious, Unreliable',
    'open':true,
    'mg':true,
},
{
    'id':548,
    'name':'LVT-4 Buffalo',
    'move':['6','10'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true,
    'special':'Amphibious'
},
{
    'id':549,
    'name':'LVT(A)-1',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Amphibious, Unreliable',
    'weapons':[64],
    'open':true,
    'mg':true,
    'ammo':true,
},
{
    'id':550,
    'name':'LVT(A)-4',
    'move':['5','10'],
    'armour':['L','N','O'],
    'weapons':[65],
    'mg':true,
    'ammo':true,
    'special':'Amphibious'
},
{
    'id':551,
    'name':'LVT(A)-4 Flamethrower',
    'move':['5','10'],
    'armour':['L','N','O'],
    'special':'Amphibious',
    'weapons':[32],
    'mg':true,
    'ammo':true,
    //'special':'Amphibious;flamethrower_turret'
},
{
    'id':552,
    'name':'Albion Heavy Truck',
    'move':['6','24'],
    'hits':4,
    'capacity':32
},
{
    'id':553,
    'name':'M3 Honey \'Jalopy\'',
    'move':['12' ,'18'],
    'armour':['M','N','N'],
    'mg':true,
    'open':true
},
{
    'id':554,
    'name':'Valentine Scorpion',
    'move':['5' ,'8'],
    'armour':['K','K','N'],
    'special':'Engineer',
    'open':true,
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':555,
    'name':'Matilda Dozer',
    'move':['5' ,'8'],
    'armour':['J','K','L'],
    'special':'Engineer',
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':556,
    'name':'Matilda \'Frog\'',
    'move':['5' ,'8'],
    'armour':['J','K','L'],
    'special':'One man turret',
    'open':true,
    'weapons':[32],
    'mg':true,
    'ammo':true,
    'special':'flamethrower_turret'
},
{
    'id':557,
    'name':'Landing Craft Control (LCC)',
    'move':['9','0'],
    'hits':6,
    'special':'2 x twin .50 cal HMGs',
    'mg':true
},
{
    'id':558,
    'name':'Landing Craft Infantry (LCI)',
    'move':['6','0'],
    'hits':22,
    'capacity':200,
    'special':'4 x 20mm Cannons',
    'weapons':[35]
},
{
    'id':559,
    'name':'Landing Craft Gun (LCG)',
    'move':['6','0'],
    'hits':12,
    'special':'2 x 4.7\" guns"',
    'weapons':[78]
},
{
    'id':560,
    'name':'Landing Craft Flak (LCF)',
    'move':['6','0'],
    'hits':12,
    'special':'4 x 2 pdrs, 8 x 20mm cannon',
    'weapons':[58,35]
},
{
    'id':561,
    'name':'Landing Ship Tank (LST)',
    'move':['6','0'],
    'hits':50,
    'special':'1 x 40mm cannon, 6 x 20mm cannon, 14 vehicles',
    'weapons':[63,35]
},
{
    'id':562,
    'name':'Churchill IV Fascine',
    'move':['5','8'],
    'armour':['I','J','J'],
    'special':'Bridging',
    'weapons':[59],
    'mg':true,
    'ammo':true
},
{
    'id':563,
    'name':'PaK40 auf RSO',
    'move':['6','9'],
    'armour':['N','O','O'],
    'weapons':[14],
    'ammo':true
},
{
    'id':564,
    'name':'Goliath',
    'move':['4','5'],
    'armour':['O','O','O'],
    'special':'Demo Charge',
    'ammo':true
},
{
    'id':565,
    'name':'Pantherturm',
    'move':['0','0'],
    'armour':['H','M','M'],
    'weapons':[16],
    'mg':true,
    'ammo':true
},
{
    'id':566,
    'name':'Sherman Kangaroo',
    'move':['9','14'],
    'armour':['K','L','N'],
    'open':true,
    'mg':true
},
{
    'id':567,
    'name':'Vickers IV',
    'move':['12','18'],
    'armour':['O','O','O'],
    'mg':true,
},

{
    'id':568,
    'name':'KV-1',
    'move':['6','11'],
    'armour':['I','K','L'],
    'weapons':[44],
    'ammo':true,
    'mg':true
},
{
    'id':569,
    'name':'KV-1E',
    'move':['5','10'],
    'armour':['H','K','L'],
    'weapons':[44],
    'ammo':true,
    'mg':true
},
{
    'id':570,
    'name':'LVT-4 Buffalo 20mm',
    'move':['6','10'],
    'armour':['O','O','O'],
    'weapons':[35],
    'open':true,
    'ammo':true,
    'mg':true,
    'special':'Amphibious'
},
{
    'id':571,
    'name':'M4 Sherman Mineroller',
    'move':['9' ,'14'],
    'armour':['K','L','N'],
    'special':'Engineer',
    'weapons':[68],
    'mg':true,
    'ammo':true
},
{
    'id':572,
    'name':'Armoured Komsomolyets',
    'move':['10','15'],
    'special':'Light gun tow',
    'armour':['O','O','O'],
    'mg':true,
},
{
    'id':573,
    'name':'Valentine III',
    'move':['5','8'],
    'armour':['K','K','N'],
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':574,
    'name':'M3A1 Stuart',
    'move':['12' ,'18'],
    'armour':['M','N','N'],
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':575,
    'name':'Bren Carrier',
    'move':['10','15'],
    'armour':['O','O','O'],
    'open':true,
    'mg':true
},
{
    'id':576,
    'name':'KV-2',
    'move':['4','8'],
    'armour':['H','K','L'],
    'weapons':[49],
    'special':'Unreliable',
    'ammo':true,
    'mg':true
},
{
    'id':577,
    'name':'White Scout Car',
    'open':true,
    'move':['8','12'],
    'armour':['O','O','O'], // Kursk
    'mg':true
},
{
    'id':578,
    'name':'OT-26',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'weapons':[32],
    'ammo':true,
    'mg':false
},
{
    'id':579,
    'name':'T-26 m31 MG',
    'move':['5','10'],
    'armour':['N','O','O'],
    'special':'Unreliable',
    'ammo':true,
    'mg':true
},
{
    'id':580,
    'name':'R-35 Panzerturm',
    'armour':['M','N','N'],
    'weapons':[112],
    'special':'One man turret',
    'ammo':true
},
{
    'id':581,
    'name':'R-35 (MG) Panzerturm',
    'armour':['M','N','N'],
    'weapons':[112],
    'special':'One man turret',
    'mg':true
},
{
    'id':582,
    'name':'H-38 Panzerturm',
    'armour':['M','N','N'],
    'weapons':[112],
    'special':'One man turret',
    'ammo':true
},
{
    'id':583,
    'name':'LVT-4',
    'move':['5','10'],
    'armour':['N','O','O'],
    'open':true,
    'mg':true,
    'special':'Amphibious'
},
{
    'id':584,
    'name':'Italian Medium Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':16
},
{
    'id':585,
    'name':'Medium Radio Truck',
    'move':['6','24'],
    'hits':2,
    'capacity':0
},
{
    'id':586,
    'name':'Medium Radio Truck',
    'move':['6','24'],
    'hits':3,
    'capacity':0
},
{
    'id':587,
    'name':'A10 Cruiser Mk I',
    'move':['5','8'],
    'armour':['M','N','O'],
    'special':'Unreliable',
    'mg':true,
    'ammo':true,
    'weapons':[58],
},
// greg to-do, landing craft
{
}
];
