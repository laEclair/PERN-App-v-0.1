import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '../index';
import { Pagination } from 'react-bootstrap';
import totalCount from '../store/ServiceStore';

const Pages = observer(() => {
    const {service} = useContext(Context)
    const pageCount = Math.ceil(service.totalCount / service.limit)
    const pages = []

    for(let i = 0; i < pageCount; i++){
        pages.push(i + 1)
    }

    return(
    <Pagination className = "mt-3">
        {pages.map(page =>
            <Pagination.Item
                key = {page}
                active = {service.page === page }
                onClick={() => service.setPage(page)}
            >
                {page}
            </Pagination.Item>
            )}
    </Pagination>
    );
});

export default Pages;