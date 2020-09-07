import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from 'react-router-dom'
import MainLayout from "./MainLayout";

const ProductsByCategory = () => {

    return (
        <div>
            <MainLayout>
                <h1 >Products By Category</h1>
                <p>{JSON.stringify(useParams())}</p>
                <p>{`Params length ${Object.keys(useParams()).length}`}</p>
            </MainLayout>
        </div>
    )
}

export default ProductsByCategory