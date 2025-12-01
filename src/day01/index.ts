import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFile = async () => {
    try {
        const raw_data = await fs.readFile(join(__dirname, "input.txt"), "utf8")
        const code_arr = raw_data.split("\n")
        return code_arr
    } catch (err) {
        console.error("error reading file", err)
    }
}

const executeMoves = (code_arr: string[]) => {
    // we are starting at 50
    let starting_point = 50
    let password = 0
    code_arr.forEach( item => {
        let move = Number(item.slice(1))
        switch (item[0]) {
            case "R":
                for (let i = 0; i < move; i++) {
                    starting_point += 1
                    if ((starting_point % 100) === 0) {
                        password += 1
                    }
                }
                break;
            case "L":
                for (let i = 0; i < move; i++) {
                    starting_point -= 1
                    if ((starting_point % 100) === 0) {
                        password += 1
                    }
                }
                break;
            }
        })
    console.log(password)
}

const arr = await readFile()
if (arr) {
    executeMoves(arr)
}