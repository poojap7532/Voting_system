import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <button type="button" class="btn btn-primary">Log in</button> */}
                    </div>
                </nav>
            </>
        </div>
    )
}
