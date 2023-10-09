import React from 'react';
import EndowUI from './endowUI';
import AccommodationUI from './accommodationUI';

const HomeUI = () => {
    return (
        <>
            <EndowUI />
            <AccommodationUI/>
            <div className="container mt-5">
                <footer className="py-3 my-4">
                    <p className="text-center text-muted">© 2023 Đặng Minh Tài</p>
                </footer>
            </div>
        </>
    );
};

export default HomeUI;