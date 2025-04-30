var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10544",
        "ok": "10544",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2106",
        "ok": "2106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "810",
        "ok": "810",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1008",
        "ok": "1008",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2242",
        "ok": "2242",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10454",
        "ok": "10454",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 96,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 77,
    "percentage": 39
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 27,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.182",
        "ok": "18.182",
        "ko": "-"
    }
},
contents: {
"req_pagodeservicios-686a8": {
        type: "REQUEST",
        name: "PagoDeServicios",
path: "PagoDeServicios",
pathFormatted: "req_pagodeservicios-686a8",
stats: {
    "name": "PagoDeServicios",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10544",
        "ok": "10544",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2106",
        "ok": "2106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "810",
        "ok": "810",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1008",
        "ok": "1008",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2242",
        "ok": "2242",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10454",
        "ok": "10454",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 96,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 77,
    "percentage": 39
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 27,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.182",
        "ok": "18.182",
        "ko": "-"
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
