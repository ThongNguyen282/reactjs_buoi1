import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='content'>
                            <h2 className='title'>Lorem ipsum dolor sit amet consectetur</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur sit aliquid eius vel ad est iusto natus quia totam.</p>
                            <button className='btn btn-primary'>Call to action!</button>
                        </div>
                        <img src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" className="d-block  w-100" alt="https://picsum.photos/199" />
                    </div>
                    <div className="carousel-item">
                        <div className='content'>
                            <h2 className='title'>Lorem ipsum dolor sit amet consectetur</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur sit aliquid eius vel ad est iusto natus quia totam.</p>
                            <button className='btn btn-primary'>Call to action!</button>
                        </div>
                        <img src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" className="d-block  w-100" alt="https://picsum.photos/199" />
                    </div>
                    <div className="carousel-item">
                        <div className='content'>
                            <h2 className='title'>Lorem ipsum dolor sit amet consectetur</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur sit aliquid eius vel ad est iusto natus quia totam.</p>
                            <button className='btn btn-primary'>Call to action!</button>
                        </div>
                        <img src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" className="d-block  w-100" alt="https://picsum.photos/199" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </button>
            </div>

        );
    }
}

export default Banner;