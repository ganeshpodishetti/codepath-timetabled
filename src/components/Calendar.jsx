import Event from "./Event";

const Calendar = () => {
    // const times = [
    //     '8 am', '9 am', '10 am', '11 am', '12 pm',
    //     '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'
    // ];

    return(
        <div className="Calender">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {times.map((time, index) => (
                        <tr key={index}>
                            <td>{time}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))} */}
                    <tr>
                        <td className="time">8 am</td>
                        <Event event = 'Starbucks☕️' color ='green' location='Maple & Ash'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Yolk🍴' color ='pink' location='Boca Raton'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event event = 'Subway🚇' color ='blue' location='Delray Beach'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Chipotle🍚' color ='green' location='Deerfield Beach'/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event = 'Fresh Kitchen' color ='pink' location='Hillsboro'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Chick fill A' color ='green' location='Pompano'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event event = 'Panda Express' color ='blue' location='Cypress Creek'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Taco Bell' color ='green' location='Coral Springs'/>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <Event event = 'Dunkin' color ='pink' location='Palm Beach'/>
                        <td></td>
                        <td></td>
                        <Event event = 'Raw Juice' color ='blue' location='Lake Worth'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event = 'Pizza Hut' color ='green' location='Boynton'/>
                        <td></td>
                        <td></td>
                        <Event event = 'Dominos' color ='blue' location='West Palm'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Mc Donalds' color ='pink' location='Fort Lauderdale'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <Event event = 'Little Ceaser' color ='green' location='Hollywood'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <Event event = 'Burger King' color ='pink' location='Miami'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Popeyes' color ='blue' location='Key West'/>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;