import { CozeyColorName } from '../../tailwind.config'

type CozeyTableColors = { 
    [c: string]: {
        label: string;
        name: CozeyColorName
    }
}

const COLORS: CozeyTableColors = {
    oak: {
        label: "Oak",
        name: "cozey-table-oak"
    },
    blackWood: {
        label: "Black Wood",
        name: "cozey-table-black-wood"
    },
    walnut: {
        label: "Walnut",
        name: "cozey-table-walnut"
    },
    espresso: {
        label: "Espresso",
        name: "cozey-table-espresso"
    },
    sandstone: {
        label: "Sandstone",
        name: "cozey-table-sandstone"
    },
    pebble: {
        label: "Pebble",
        name: "cozey-table-pebble"
    },
    eclipse: {
        label: "Eclipse",
        name: "cozey-table-eclipse"
    },
    twilight: {
        label: "Twilight",
        name: "cozey-table-twilight"
    },
    solstice: {
        label: "Solstice",
        name: "cozey-table-solstice"
    }
}

export const tables = [
    {
        "sectionId": "1",
        "sectionName": "Coffee Tables",
        "tables": [
            {
                "tableId": "1",
                "color": COLORS.oak,
                "title": "Mensa Coffee Table",
                "price": 360,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "2",
                "color": COLORS.blackWood,
                "title": "Mensa Coffee Table",
                "price": 360,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "3",
                "color": COLORS.walnut,
                "title": "Mensa Coffee Table",
                "price": 360,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "4",
                "color": COLORS.oak,
                "title": "Stella Coffee Table - 1 Unit",
                "price": 210,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "5",
                "color": COLORS.walnut,
                "title": "Stella Coffee Table - Set of 2",
                "price": 420,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "6",
                "color": COLORS.blackWood,
                "title": "Pluto Coffee Table",
                "price": 135,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "7",
                "color": COLORS.oak,
                "title": "Stella Coffee Table - 3 Units",
                "price": 630,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "8",
                "color": COLORS.espresso,
                "title": "Pluto Coffee Table",
                "price": 135,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "9",
                "color": COLORS.walnut,
                "title": "Stella Coffee Table - 1 Unit",
                "price": 210,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "10",
                "color": COLORS.oak,
                "title": "Stella Coffee Table - 2 Units",
                "price": 420,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "11",
                "color": COLORS.walnut,
                "title": "Stella Coffee Table - 3 Units",
                "price": 630,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "12",
                "color": COLORS.sandstone,
                "title": "Mistral Rectangle Coffee Table",
                "price": 380,
                "financing": true,
                "saving": null,
                "outdoor": true
            },
            {
                "tableId": "13",
                "color": COLORS.pebble,
                "title": "Mistral Rectangle Coffee Table",
                "price": 380,
                "financing": true,
                "saving": null,
                "outdoor": true
            }
        ]
    },
    {
        "sectionId": "2",
        "sectionName": "Side Tables",
        "tables": [
            {
                "tableId": "14",
                "color": COLORS.oak,
                "title": "Mensa Side Table",
                "price": 250,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "15",
                "color": COLORS.blackWood,
                "title": "Mensa Side Table",
                "price": 250,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "16",
                "color": COLORS.walnut,
                "title": "Mensa Side Table",
                "price": 250,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "17",
                "color": COLORS.eclipse,
                "title": "Solis Adjustable Table",
                "price": 180,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "18",
                "color": COLORS.twilight,
                "title": "Solis Adjustable Table",
                "price": 180,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "19",
                "color": COLORS.solstice,
                "title": "Solis Adjustable Table",
                "price": 180,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "20",
                "color": COLORS.walnut,
                "title": "Stella Coffee Table - 1 Unit",
                "price": 210,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "21",
                "color": COLORS.oak,
                "title": "Stella Coffee Table - 1 Unit",
                "price": 210,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "22",
                "color": COLORS.espresso,
                "title": "Pluto Side Table",
                "price": 85,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "23",
                "color": COLORS.blackWood,
                "title": "Pluto Side Table",
                "price": 85,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "24",
                "color": COLORS.walnut,
                "title": "Stella Media Unit - 1 Unit | No Door",
                "price": 145,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "25",
                "color": COLORS.oak,
                "title": "Stella Media Unit - 1 Unit | No Door",
                "price": 145,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "26",
                "color": COLORS.walnut,
                "title": "Stella Media Unit - 1 Unit | With Door",
                "price": 165,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "27",
                "color": COLORS.oak,
                "title": "Stella Media Unit",
                "price": 165,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "28",
                "color": COLORS.sandstone,
                "title": "Mistral End Table",
                "price": 225,
                "financing": true,
                "saving": null,
                "outdoor": true
            },
            {
                "tableId": "29",
                "color": COLORS.pebble,
                "title": "Mistral End Table",
                "price": 225,
                "financing": true,
                "saving": null,
                "outdoor": true
            },
        ]
    },
    {
        "sectionId": "3",
        "sectionName": "Media Units"
    },
    {
        "sectionId": "4",
        "sectionName": "Table Sets"
    }
]

export type TableSection = typeof tables[0]

export type Tables = TableSection['tables']

export type TableCard = {
    "tableId": string,
    "color": typeof COLORS.oak,
    "title": string,
    "price": number,
    "financing": boolean,
    "saving": null | string,
    "outdoor": boolean
}