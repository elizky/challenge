import React from 'react'

const Paginator = ({ setPage, page }) => {

    const changePage = (val) => {
        const newPage = page + val;
        if (newPage === 0) return;
        setPage(newPage);
    }
    

    return (
        <div className="btn-group col-12 m-auto" role="group">
            {(page === 1)
                ? null
                : (
                    <button type="button" className="btn btn-outline-primary" onClick={() => changePage(-1)} >
                        &laquo; Previous
                    </button>
                )}
            {
                <button type="button" className="btn btn-outline-primary" onClick={() => changePage(1)}>
                    Next &raquo;
                </button>
            }
        </div>
    )
}

export default Paginator
