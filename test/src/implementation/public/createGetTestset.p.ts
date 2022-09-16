
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"
import * as pw from "pareto-core-raw"

import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub"

export const f_createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            ($) => {
                pl.panic(`duplicate key: ${$}`)
            }
        )



        return pa.value({
            elements: builder.getDictionary()
        })
    }
}