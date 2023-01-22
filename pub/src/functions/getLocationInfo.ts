import * as process from "process"
import * as path from "path"

export function getLocationInfo(depth: number): string {
    const e = new Error();
    const regex = /\((.*)\)$/
    //const regex = /\((.*):(\d+):(\d+)\)$/ //further splitted; file,line,column,
    if (e.stack === undefined) {
        throw new Error("NO STACK INFO")
    }
    const match = regex.exec(e.stack.split("\n")[depth + 2]);
    if (match === null) {
        throw new Error("COULD NOT PARSE STACK INFO")
    }
    return path.relative(process.cwd(), match[1])
}

