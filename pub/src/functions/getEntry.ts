import * as pt from "pareto-core-types"

export function getEntry<T, RT>(
    dictionary: pt.Dictionary<T>,
    key: string,
    exists: ($: T) => RT,
    notExists: () => RT
): RT {
    let entry: T | undefined = undefined
    dictionary.map(($, thisKey) => {
        if (thisKey === key) {
            entry = $
        }
    })
    if (entry !== undefined) {
        return exists(entry)
    } else {
        return notExists()
    }
}

export function unsafeGetEntry<T>(dictionary: pt.Dictionary<T>, key: string): T {
    const found: string[] = []
    let entry: T | undefined = undefined
    dictionary.map(($, thisKey) => {
        found.push(key)
        if (thisKey === key) {
            entry = $
        }
    })
    if (entry === undefined) {
        throw new Error(`CORE: missing entry '${key}', (found: ${(found.length > 20) ? "more than 20" : found.map($ => `'${$}'`).join(', ')})`)
    } else {
        return entry
    }

}