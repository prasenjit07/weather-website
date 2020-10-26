const request = require('request')


const forecast=(longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=fc742ae398e75aabef9b9f6e3f182fe9&query='+latitude+','+longitude

    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect',undefined)
        } else if(body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out.')
        }
    })
}

module.exports= forecast