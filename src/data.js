export const menuItems = ['Dashboard', 'Market', 'Wallet', 'Exchange', 'Community' , 'Settings', 0,0,0, 'Support', 'Feedback'] ;
export const menuIcons = ['https://www.svgrepo.com/show/459911/dashboard.svg' , 'https://www.svgrepo.com/show/500878/graph.svg' , 'https://www.svgrepo.com/show/526431/wallet.svg' , 'https://www.svgrepo.com/show/448759/exchange.svg' , 'https://www.svgrepo.com/show/495575/people.svg', 'https://www.svgrepo.com/show/526221/settings.svg' , 0,0,0, 'https://www.svgrepo.com/show/525480/question-circle.svg' , 'https://www.svgrepo.com/show/345755/feedback.svg'] ;

export const activities = [
    { 
      name : 'Insurance' ,
      desc : 'Property Coverage' ,
      img : 'https://www.svgrepo.com/show/438634/insurance.svg',
      account : 'LTC Wallet' ,
      lastPayment : 'Mon,20 May - 01:10' ,
      balance : -4.012
    } ,
    { 
      name : 'Electricity' ,
      desc : 'Utility Payment' ,
      img : 'https://www.svgrepo.com/show/455017/electricity.svg' ,
      account : 'BTC Wallet' ,
      lastPayment : 'Mon,20 May - 01:10' ,
      balance : -2.092
    } ,
    { 
      name : 'Omar Griffith' ,
      desc : 'Utility Payment' ,
      img : 'https://www.svgrepo.com/show/447734/person-male.svg',
      account : 'ETH Wallet' ,
      lastPayment : 'Mon,27 May - 01:10' ,
      balance : +1.089
    } ,
    { 
      name : 'Electricity' ,
      desc : 'Utility Payment' ,
      img : 'https://www.svgrepo.com/show/455017/electricity.svg' ,
      account : 'BTC Wallet' ,
      lastPayment : 'Mon,27 May - 01:10' ,
      balance : -833
    } ,
    { 
      name : 'Insurance' ,
      desc : 'Property Coverage' ,
      img : 'https://www.svgrepo.com/show/438634/insurance.svg' ,
      account : 'LTC Wallet' ,
      lastPayment : 'Mon,27 May - 01:10' ,
      balance : -1.458
    } ,
    { 
      name : 'Nettie Barnett' ,
      desc : 'Property Coverage' ,
      img : 'https://www.svgrepo.com/show/447734/person-male.svg' ,
      account : 'LTC Wallet' ,
      lastPayment : 'Mon,17 Apr - 01:10' ,
      balance : +1.089
    } ,
    { 
      name : 'Junaid Horn' ,
      desc : 'Property Coverage' ,
      img : 'https://www.svgrepo.com/show/447734/person-male.svg' ,
      account : 'ETH Wallet' ,
      lastPayment : 'Mon,17 Apr - 01:10' ,
      balance : +1.089
    } 
  ]


export const BTCdata = {
  labels : [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024] ,
  
  datasets : [
    { 
      label : 'Bitcoin',
      data : [650 , 250 , 450 , 19666 , 3500 , 3600 , 4500 , 35000 , 36000 , 25000 , 75000] ,
      borderColor : 'rgb(238,188,29)' ,
      fill : true ,
      backgroundColor : 'rgba(238, 188, 29, 0.2)' ,
      pointRadius : 0 ,
      tension : 0.3,
    }
  ] ,
} ;

export const Ethereumdata = {
  labels : [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024] ,
  datasets : [
    { 
      label : 'Ethereum',
      data : [ 0.5 , 1.5 , 15 , 400 , 200 , 300 , 200 , 800 , 1500 , 2000 , 3766.39] ,
      borderColor : 'rgba(0,0,255,0.5)' ,
      fill : true ,
      backgroundColor : 'rgba(0,0,255, 0.2)' ,
      pointRadius : 0 ,
      tension : 0.3,
    }
  ] ,
} ;

export const Litecoindata = {
  labels : [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024] ,
  datasets : [
    { 
      label : 'Litecoin',
      data : [ 21.51 , 48.80 , 56.50 , 412.96 , 375.99 , 147.71 , 134.95 , 412.96 , 147.95 , 84.98 , 82.80] ,
      borderColor : 'rgba(0,26,136,0.5)' ,
      fill : true ,
      backgroundColor : 'rgba(0,0,255, 0.2)' ,
      pointRadius : 0 ,
      tension : 0.3,
    }
  ] ,
} ;

export const people = [
  { src : 'https://imgs.search.brave.com/Xu4Mb9ANOqxHRt9cjrfY5NA3ZmnVi35m6hzpz-Um3bw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjI1NTYxODk2Mzkt/YjE1MGVkOWM0MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGNH/VnljMjl1WVh4bGJu/d3dmSHd3Zkh4OE1B/PT0' , color : 'bg-red-600'} ,
  { src : 'https://imgs.search.brave.com/ziiGwTzUF9o8rtB0X2MyMQVHN2L4G7NtoHeNpd_el30/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/dXR1bW4tcGVyc29u/LXdpdGgtY296eS1j/bG90aGVzXzIzLTIx/NDkxMzc4NDEuanBn/P3NpemU9NjI2JmV4/dD1qcGc' , color : 'bg-green-600'} ,
  { src : 'https://imgs.search.brave.com/lwOL6OhhwyiHQC3kVCB1bHVGK4U-dPMHYcR1wG7klSA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY1/MTA0OTI3Ni9waG90/by9wb3J0cmFpdC1z/ZW5pb3Itd29tYW4t/c21pbGluZy53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1MYW5nNnRzNUpi/NHJlZjJoUTIwZ0Jh/dnhRQkw4M2RKSnQt/SjdYdFRhOGdBPQ' , color : 'bg-yellow-300'} ,
  { src : 'https://imgs.search.brave.com/KDfb9K5zQsJZJRWry_yZKovDzQ-yjE-X3SdubY_ezAY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/aWZlc3R5bGUtcGVv/cGxlLWVtb3Rpb25z/LWNhc3VhbC1jb25j/ZXB0LWNvbmZpZGVu/dC1uaWNlLXNtaWxp/bmctYXNpYW4td29t/YW4tY3Jvc3MtYXJt/cy1jaGVzdC1jb25m/aWRlbnQtcmVhZHkt/aGVscC1saXN0ZW5p/bmctY293b3JrZXJz/LXRha2luZy1wYXJ0/LWNvbnZlcnNhdGlv/bl8xMjU4LTU5MzM1/LmpwZz9zaXplPTYy/NiZleHQ9anBn' , color : 'bg-red-600'} ,
  { src : 'https://imgs.search.brave.com/BQ4PZrhG5v98O2pGytApMVBNK32MS_SUnpjW4myTRq4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjUw/MjU2NTUvc3RvY2st/cGhvdG8tcG9ydHJh/aXQtb2YtaGFwcHkt/bWF0dXJlLW1hbg' , color : 'bg-yellow-300'} ,
] ;

export const BarChartdata = {
  labels : ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'] ,
  datasets : [
    {
      label : 'BTC(in k)' ,
      data : [300,500,600,600,400,500,400,200,100,500,700,200] ,
      backgroundColor : 'rgb(126,69,161)' ,
      borderColor : 'rgb(126,69,161)' ,
      borderWidth : 1 ,
      barThickness : 10 ,
      borderRadius : 10 ,
    } ,
    {
      label : 'UTH(in k)' ,
      data : [150,200,400,500,100,150,200,100,50,200,250,150] ,
      backgroundColor : 'rgb(90,68,199)' ,
      borderColor : 'rgb(90,68,199)' ,
      borderWidth : 1 ,
      barThickness : 10 ,
      borderRadius : 10 ,
    } ,
  ]
} ;