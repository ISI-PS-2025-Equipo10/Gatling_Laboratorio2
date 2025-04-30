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
        "total": "1044",
        "ok": "1044",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2756",
        "ok": "2756",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1646",
        "ok": "1646",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "315",
        "ok": "315",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1696",
        "ok": "1696",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1831",
        "ok": "1831",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1989",
        "ok": "1989",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2752",
        "ok": "2752",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 186,
    "percentage": 93
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
        "total": "1044",
        "ok": "1044",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2756",
        "ok": "2756",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1646",
        "ok": "1646",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "315",
        "ok": "315",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1696",
        "ok": "1696",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1831",
        "ok": "1831",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1989",
        "ok": "1989",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2752",
        "ok": "2752",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 186,
    "percentage": 93
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
