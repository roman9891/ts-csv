import { CsvFileReader } from "./CsvFileReader"

const reader = new CsvFileReader('football.csv')
reader.read()

let winsByTeam: {[key: string]: number} = {}

// enum MatchResult {
//     HomeWin = 'H',
//     AwayWin = 'A',
//     Draw = 'D',
// }

for (let match of reader.data) {
    if (match[5] === 'H') {
        let winner = match[1]
        if (winsByTeam[winner]) winsByTeam[winner] ++
        else winsByTeam[winner] = 1
    } else if (match[5] === 'A') {
        let winner = match[2]
        if (winsByTeam[winner]) winsByTeam[winner] ++
        else winsByTeam[winner] = 1
    } 
}

console.log(winsByTeam)