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
        "total": "455",
        "ok": "455",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2350",
        "ok": "2350",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1128",
        "ok": "1128",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1202",
        "ok": "1202",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1376",
        "ok": "1376",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1505",
        "ok": "1505",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1527",
        "ok": "1527",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 62,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.667",
        "ok": "66.667",
        "ko": "-"
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
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "455",
        "ok": "455",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2350",
        "ok": "2350",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1128",
        "ok": "1128",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1202",
        "ok": "1202",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1376",
        "ok": "1376",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1505",
        "ok": "1505",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1527",
        "ok": "1527",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 62,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.667",
        "ok": "66.667",
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
