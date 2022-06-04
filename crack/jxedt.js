let body = $response.body;
let url = $request.url;
let obj = JSON.parse(body);
if (url.search("batchCheckRights") !== -1) {
    obj.result.SVIP = {
        "status": "2",
        "beginTime": "2022-04-24",
        "endTime": "2099-04-26",
        "userBindDeviceList": [],
        "level": 1,
        "overdueSecond": "0",
        "deviceOverflow": "0",
        "resourceId": "",
        "rightsType": "SVIP",
        "residualSecond": "999999",
        "description": null
    }
} else {
    obj.result = {
        "status": "2",
        "beginTime": "2022-04-24",
        "endTime": "2099-04-26",
        "userBindDeviceList": [],
        "level": 1,
        "overdueSecond": "0",
        "deviceOverflow": "0",
        "resourceId": "",
        "rightsType": "SPEED_VIP_KM4",
        "residualSecond": "999999",
        "description": null
    }
}
body = JSON.stringify(obj);
$done({body});