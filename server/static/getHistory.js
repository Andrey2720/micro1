let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

const createLineChart = (xData, yData) =>{
    console.log(xData)
    console.log(yData)
    let data = {
        labels: xData,
        datasets: [{
            data:yData
        }]
    }
    let config = {
        type: 'line',
        data: data
    }
    let chart = new Chart(ctx, config)
}

fetch("http://localhost:3001/").then((Response) => {
        
        return Response.json()
    })
    .then((data) => {
        console.log(data)
        // data.forEach((e) => {
        //     console.log(e)
           
        //     container.innerHTML +=`<img id="img_film" class="poster" src=" `+ e + `" alt=" ">`
        //   })

        let xData = []
        let yData = []
        for(let i = 0; i< data.length; i++){
            xData.push(data[i][0])
            yData.push(data[i][1])
            
        }
        createLineChart(xData,yData)



    })