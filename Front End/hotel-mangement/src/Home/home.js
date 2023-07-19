import React from 'react'
import '../CSS/main.css'
import home from '../Images/home.png'
import room1 from '../Images/room1.png'
import room2 from '../Images/room2.png'
import room3 from '../Images/room3.png'
import resort1 from '../Images/resort1.png'
import resort2 from '../Images/resort2.png'
import resort3 from '../Images/resort3.png'
import bottom from '../Images/homebottom.png'


export default function Home() {
    return (
        <div>
            <div>
                <div >
                    <img className='homeimg' src={home} alt=''></img>
                </div>
                <div>
                    <div className='hometxt '><br />
                        <p><h1 className='text-success'>Book now to enjoy 33% off our Best Available Rate</h1></p><br />
                        <p>To live well carries different meaning for every individual. Whether going on a getaway with family, or an adventure with friends, to “live well” has different meaning for everyone.</p>
                        <p>Interweaving this spirit of living well with the transformative nature of travel, our anniversary campaign ‘Live Well, Travel Well’ aims to inspire the pursuit of whatever brings you joy.</p>
                        <p>Sense the healing power of travel with 33% off our Best Available Rate.</p>
                    </div><br /><br />
                    {/* pic 1    ********************** */}
                    <div className='first-row'>
                        <div className="left">
                            <img className='pavpicimg' src={room1} alt=''/>
                            <div className="hompicimgtxt text-success">
                                <h2>Oasis</h2>
                                <p>Retreat to a contemporary space infused with elements of Indian culture. Live between a modern city and the open country. Discover the enchanting Angsana Bangalore.</p>
                            </div>
                        </div>
                        <div className="right">
                            <img className='pavpicimg' src={room2} alt=''/>
                            <div className="hompicimgtxt text-success">
                                <h2>Resort</h2>
                                <p>Set on an idyllic lush green hilltop overlooking the turquoise waters of Benitses Bay, Angsana Corfu offers chic, contemporary accommodation with far reaching sea views.</p>
                            </div>
                        </div>
                        <div className="jyohomcentre">
                            <img className='pavpicimg' src={room3} alt=''/>
                            <div className="hompicimgtxt text-success">
                                <h2>Maison</h2>
                                <p>Maison Souvannaphoum is a historical boutique hotel in the heart of Luang Prabang with magnificent French colonial rooms infused with romance and style and many more.</p>
                            </div>
                        </div><br /><br />
                    </div>
                    <div style={{ marginTop: "150px" }} />
                    {/* pic 1    ********************** */}
                    <div className='first-row'>
                        <div className="left">
                            <img className='pavpicimg' src={resort1} alt=''/>
                            <div className="hompicimgtxt text-success">
                                <h2>Oasis</h2>
                                <p>Retreat to a contemporary space infused with elements of Indian culture. Live between a modern city and the open country. Discover the enchanting Angsana Bangalore.</p>
                            </div>
                        </div>
                        <div className="right">
                            <img className='pavpicimg' src={resort2} alt=''/>
                            <div className="hompicimgtxt text-success">
                                <h2>Resort</h2>
                                <p>Set on an idyllic lush green hilltop overlooking the turquoise waters of Benitses Bay, Angsana Corfu offers chic, contemporary accommodation with far reaching sea views.</p>
                            </div>
                        </div>
                        <div className="jyohomcentre">
                            <img className='pavpicimg' src={resort3} alt=''/>
                            <div className="hompicimgtxt text-success">
                                <h2>Maison</h2>
                                <p>Maison Souvannaphoum is a historical boutique hotel in the heart of Luang Prabang with magnificent French colonial rooms infused with romance and style and many more.</p>
                            </div>
                        </div><br /><br />

                        <div style={{ marginTop: "150px" }} />
                    </div>
                    <div className='footer'>
                        <img className='homebottom' src={bottom} alt=''></img>
                    </div><br />
                </div>
            </div>
        </div>
    )
}