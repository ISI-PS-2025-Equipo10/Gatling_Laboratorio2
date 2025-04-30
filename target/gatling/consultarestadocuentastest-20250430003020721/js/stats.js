var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "543",
        "ok": "-",
        "ko": "543"
    },
    "maxResponseTime": {
        "total": "2442",
        "ok": "-",
        "ko": "2442"
    },
    "meanResponseTime": {
        "total": "1289",
        "ok": "-",
        "ko": "1289"
    },
    "standardDeviation": {
        "total": "435",
        "ok": "-",
        "ko": "435"
    },
    "percentiles1": {
        "total": "1264",
        "ok": "-",
        "ko": "1264"
    },
    "percentiles2": {
        "total": "1493",
        "ok": "-",
        "ko": "1493"
    },
    "percentiles3": {
        "total": "2382",
        "ok": "-",
        "ko": "2382"
    },
    "percentiles4": {
        "total": "2438",
        "ok": "-",
        "ko": "2438"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 200,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.667",
        "ok": "-",
        "ko": "66.667"
    }
},
contents: {
"req_consultarestado-470a3": {
        type: "REQUEST",
        name: "ConsultarEstadoCuentas",
path: "ConsultarEstadoCuentas",
pathFormatted: "req_consultarestado-470a3",
stats: {
    "name": "ConsultarEstadoCuentas",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "543",
        "ok": "-",
        "ko": "543"
    },
    "maxResponseTime": {
        "total": "2442",
        "ok": "-",
        "ko": "2442"
    },
    "meanResponseTime": {
        "total": "1289",
        "ok": "-",
        "ko": "1289"
    },
    "standardDeviation": {
        "total": "435",
        "ok": "-",
        "ko": "435"
    },
    "percentiles1": {
        "total": "1264",
        "ok": "-",
        "ko": "1264"
    },
    "percentiles2": {
        "total": "1493",
        "ok": "-",
        "ko": "1493"
    },
    "percentiles3": {
        "total": "2382",
        "ok": "-",
        "ko": "2382"
    },
    "percentiles4": {
        "total": "2438",
        "ok": "-",
        "ko": "2438"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 200,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.667",
        "ok": "-",
        "ko": "66.667"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
