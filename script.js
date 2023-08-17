function redirectToPage() {
    window.location.href = "./src/pages/page-redirect.html";
}

const myListAPI = () => {
    return {
        "object_num_01": {
            "data":[{
                "Biomass": 120,
                "Coal": 937,
                "Dutch Imports": 474,
                "French Imports": 53,
                "Gas (Combined Cycle)": 394,
                "Gas (Open Cycle)": 651,
                "Hydro": 0,
                "Irish Imports": 458,
                "Nuclear": 0,
                "Oil": 935,
                "Other": 300,
                "Pumped Storage": 0,
                "Solar": 0,
                "Wind": 0
            }]
        },
        "object_num_02": {
            "data":[{
                "from": "2018-01-20T12:00Z",
                "to": "2018-01-20T12:30Z",
                "intensity": {
                    "forecast": 266,
                    "actual": 263,
                    "index": "moderate"
                }
            }]
        },
        "object_num_03": {
            "data":[{
                "from": "2018-01-20T12:00Z",
                "to": "2018-01-20T12:30Z",
                "intensity": {
                    "forecast": 266,
                    "actual": 263,
                    "index": "moderate"
                }
            }]
        }
    }
}
