const COLORS = {
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
    }
} as const

export const tables = [
    {
        "sectionId": "1",
        "sectionName": "Coffee Tables",
        "tables": [
            {
                "tableId": "1",
                "imageName": '1.webp',
                "color": COLORS.oak,
                "title": "Mensa Coffee Table",
                "price": 360,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "2",
                "imageName": '2.webp',
                "color": COLORS.blackWood,
                "title": "Mensa Coffee Table",
                "price": 360,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "3",
                "imageName": '3.webp',
                "color": COLORS.walnut,
                "title": "Mensa Coffee Table",
                "price": 360,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "4",
                "imageName": '4.webp',
                "color": COLORS.oak,
                "title": "Stella Coffee Table - 1 Unit",
                "price": 210,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "5",
                "imageName": '5.webp',
                "color": COLORS.walnut,
                "title": "Stella Coffee Table - Set of 2",
                "price": 420,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "6",
                "imageName": '6.webp',
                "color": COLORS.blackWood,
                "title": "Pluto Coffee Table",
                "price": 135,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "7",
                "imageName": '7.webp',
                "color": COLORS.oak,
                "title": "Stella Coffee Table - 3 Units",
                "price": 630,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "8",
                "imageName": '8.webp',
                "color": COLORS.espresso,
                "title": "Pluto Coffee Table",
                "price": 135,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "9",
                "imageName": '9.webp',
                "color": COLORS.walnut,
                "title": "Stella Coffee Table - 1 Unit",
                "price": 210,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "10",
                "imageName": '10.webp',
                "color": COLORS.oak,
                "title": "Stella Coffee Table - 2 Units",
                "price": 420,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "11",
                "imageName": '11.webp',
                "color": COLORS.walnut,
                "title": "Stella Coffee Table - 3 Units",
                "price": 630,
                "financing": true,
                "saving": null,
                "outdoor": false
            },
            {
                "tableId": "12",
                "imageName": '12.webp',
                "color": COLORS.sandstone,
                "title": "Mistral Rectangle Coffee Table",
                "price": 380,
                "financing": true,
                "saving": null,
                "outdoor": true
            },
            {
                "tableId": "13",
                "imageName": '13.webp',
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
        "sectionName": "Side Tables"
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
    "imageName": string,
    "color": typeof COLORS.oak,
    "title": string,
    "price": number,
    "financing": boolean,
    "saving": null | string,
    "outdoor": boolean
}