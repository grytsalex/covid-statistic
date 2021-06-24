import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { actionGetCountriesRequest } from '../../actions';
import { selectorGetCountries } from '../../selectors'

export const TableWrapper = () => {
    const dispatch = useDispatch();
    const countries = useSelector(selectorGetCountries, shallowEqual);

    useEffect(() => {
        dispatch(actionGetCountriesRequest());
    }, [dispatch])

    return (
        <div>{countries?.map(({ Country }) => `<span>${Country}</span>`)}</div>
    )
}