let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

const getBybyDistrictId = async function (req, res) {
    try {
        let district = req.query.district_id
        let date = req.query.date
        console.log(`query params are : ${district} ${date}`)

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

const liveweather = async function (req, res) {
    try {
        let arrayCity = ["Motihari", "patna", "delhi", "london", "mumbai"]
        let apiId = req.query.apiId
        let cityTemp = []
        for (let cities of arrayCity) {

            let weather = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${apiId}`
            }

            let result = await axios(weather)
            let temp = result.data.main.temp
            let info = {
                city: cities,
                temprature: temp
            }
            cityTemp.push(info)
        }
        cityTemp.sort((a, b) => a.temprature - b.temprature)
        res.status(200).send({ msg: cityTemp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

};

const getMemes = async function (req, res) {
    try {
        
        let memes = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }

        let result = await axios(memes);
        let data = result.data
        res.status(200).send(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

const createMemes = async function (req, res) {
    try {
        let temp_id = req.query.template_id
        let userName = req.query.username
        let passWord = req.query.password
        let text0 = req.query.text0
        let text1 = req.query.text1


        let memes = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${temp_id}&username=${userName}&password=${passWord}&text0=${text0}&text1=${text1}`
        }

        let result = await axios(memes);
        let data = result.data
        res.status(200).send(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};





module.exports.getMemes=getMemes
module.exports.createMemes = createMemes
module.exports.getBybyDistrictId = getBybyDistrictId
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.liveweather = liveweather