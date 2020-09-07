import React, { useState, useEffect } from "react"

import { getBreadCrumbs } from './api/utils'

const BreadCrumbs = ({ categories }) => {

    const [breadCrumbs, setBreadCrumbs] = useState([])

    useEffect(() => {
        setBreadCrumbs(getBreadCrumbs(categories))
    }, [])  // Only run once

    return (
        <div>
            {console.log(`categories: ${JSON.stringify(categories)}`)}
            {categories.map((category, i) => (
                <span key={i} className='bread-crumb'>
                    <a href={breadCrumbs[i]}>{category}</a>
                    {(i < categories.length - 1) ? ' -> ' : ''}
                </span>
            ))
            }
        </div>

    )
}

export default BreadCrumbs
