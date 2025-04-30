var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "374",
        "ok": "374",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20433",
        "ok": "20433",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2049",
        "ok": "2049",
        "ko": "-"
    },
    "percentiles1": {
        "total": "421",
        "ok": "421",
        "ko": "-"
    },
    "percentiles2": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "percentiles3": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10462",
        "ok": "10462",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 289,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "6.667",
        "ko": "-"
    }
},
contents: {
"req_login-d56b6": {
        type: "REQUEST",
        name: "login",
path: "login",
pathFormatted: "req_login-d56b6",
stats: {
    "name": "login",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "374",
        "ok": "374",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20433",
        "ok": "20433",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2049",
        "ok": "2049",
        "ko": "-"
    },
    "percentiles1": {
        "total": "421",
        "ok": "421",
        "ko": "-"
    },
    "percentiles2": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "percentiles3": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10462",
        "ok": "10462",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 289,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "6.667",
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
