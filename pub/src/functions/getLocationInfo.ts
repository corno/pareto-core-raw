

export function getLocationInfo(): string {
    const e = new Error();
    const regex = /\((.*)\)$/
    //const regex = /\((.*):(\d+):(\d+)\)$/ //further splitted; file,line,column,
    if (e.stack === undefined) {
        throw new Error("NO STACK INFO")
    }
    const match = regex.exec(e.stack.split("\n")[2]);
    if (match === null) {
        throw new Error("COULD NOT PARSE STACK INFO")
    }
    return match[1]
}

