import * as pt from "pareto-core-types"

export function wrapRawArray<T>(source: T[]): pt.Array<T> {
    if (!(source instanceof Array)) {
        throw new Error("invalid input in 'createArray'")
    }
    return {
        map: <NT>(callback: (entry: T) => NT) => {
            return wrapRawArray(source.map((entry) => {
                return callback(entry)
            }))
        },
        forEach: <NT>(
            callback: (entry: T) => NT
        ) => {
            source.forEach(callback)
        },
    }
}
