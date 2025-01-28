import React from "react";
import '../stylesheets/Wine.css';
import WineRecommended from './WineRecommended';
import { TailSpin } from  'react-loader-spinner'

function WineModal ({ setIsOpen, setIsLoading, data}) {

  return(
    <div className="col">
        <div className="row p-2">
          {setIsLoading ?
            <div className="spinner">
              <h3>Loading, this may take a while... </h3>
              <TailSpin
                className='spinner'
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
            :
            <>
              <h2 className="m-2 card-recommended">Top 3 most similar wines</h2>
              <div className="item-center">
                {data.Items.length>0 ?
                (data.Items.map( (wine) => (
                  <div key={wine._id}>
                    <div className="container card-recommended" >
                      <div className="col-sm-6 " >
                        <WineRecommended
                          name={wine.Name}
                          winery={wine.Winery}
                          totalratings={wine.Totalqualifications}
                          avgratings={wine.Avgqualifications}
                          imgpath={wine.Image}
                        />
                      </div>
                    </div>
                    </div>
                )))

            :
            null
            }
            </div>
            <div className="button-close">
              <button
                className="btn btn-primary "
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Close
              </button>
            </div>
          </>
          }
      </div>
      </div>
  );
}


export default WineModal;