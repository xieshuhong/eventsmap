import MapContainer from './maps/mapcontainer';
import SelectionHome from "./components/selection";
import SectionArea from './components/section';
import { useState } from "react";
const initialTasks = [
  { key: '1', name: 'University of Calgary Downtown Campus', address: '906 8 Ave SW, Calgary, AB', lat: 51.0467, lng: -114.0818, type: 'school'},
  { key: '2', name: 'University of Calgary: Department of Art', address: '2975 University Way NW, Calgary, AB', lat: 51.0760, lng: -114.1299, type: 'school'},
  { key: '3', name: 'University of Calgary Architecture', address: '6 Ave SE, Calgary, AB', lat: 51.0517, lng:  -114.0563, type: 'school'},
  { key: '4', name: 'Ambrose University', address: '150 Ambrose Cir SW, Calgary, AB', lat: 51.0386, lng: -114.1917, type: 'school'},
  { key: '5', name: 'University of Calgary - Foothills Campus', address: '3330 Hospital Drive NW, Calgary, AB', lat: 51.0663, lng: -114.0572, type: 'school'},
  { key: '6', name: 'Mount Royal University', address: '4825 Mt Royal Gate SW, Calgary, AB', lat: 51.0128, lng: -114.1315, type: 'school'},
  { key: '7', name: 'Bow Valley College', address: '345 6 Ave SE, Calgary, AB', lat: 51.0472, lng: -114.0561, type: 'school'},
  { key: '8', name: 'SAIT', address: '1301 16 Ave NW, Calgary, AB', lat: 51.0642, lng: -114.0870, type: 'school'},
  { key: '9', name: 'St. Mary\'s University', address: '14500 Bannister Road SE, Calgary', lat: 50.9223, lng: -114.0680, type: 'school'},
  { key: '10', name: 'Alberta University of the Arts', address: '1407 14 Ave NW, Calgary', lat: 51.0626, lng: -114.0913, type: 'school'},
  { key: '11', name: 'ABM College', address: '112 28 St SE #200, Calgary', lat: 51.0520, lng: -113.9924, type: 'school'},
  { key: '12', name: 'Rocky Mountain College', address: '4039 Brentwood Rd NW, Calgary', lat: 51.0887, lng: -114.133, type: 'school'},
  { key: '13', name: 'Bay River College', address: '3516 26 St NE, Calgary', lat: 51.0844, lng: -113.9972, type: 'school'},
  { key: '14', name: 'CDI College - City Centre', address: '703 6 Ave SW #200, Calgary', lat: 51.0476, lng: -114.0767, type: 'school'},
  { key: '15', name: 'CDI College - North', address: '403 33 St NE #100, Calgary', lat: 51.0559, lng: -113.9864, type: 'school'},
  { key: '16', name: 'CDI College - South', address: '6624 Centre Street S #12, Calgary', lat: 50.9953, lng: -114.0625, type: 'school'},
  { key: '17', name: 'Alberta Bible College', address: '635 Northmount Dr NW, Calgary', lat: 51.0865, lng: -114.0895, type: 'school'},
  { key: '18', name: 'Reeves College - North', address: '2886 Sunridge Way NE #120, Calgary', lat: 51.0704, lng: -113.9972, type: 'school'},
  { key: '19', name: 'Reeves College - City Centre', address: '703 6 Ave SW #400, Calgary', lat: 51.0477, lng: -114.0766, type: 'school'},
  { key: '20', name: 'Columbia College', address: '802 Manning Rd NE, Calgary', lat: 51.0570, lng: -114.0180, type: 'school'},
  { key: '21', name: 'Aspen Creek', address: '', lat: 50.866, lng: -114.556, type: 'event'},
  { key: '22', name: 'Banded Peak School', address: '', lat: 50.934, lng: -114.564, type: 'event'},
  { key: '23', name: 'Banff Centre', address: '', lat: 51.17, lng: -115.561, type: 'event'},
  { key: '24', name: 'Bottomlands', address: '', lat: 51.051, lng: -114.041, type: 'event'},
  { key: '25', name: 'Bow Valley Provincial Park North', address: '802 Manning Rd NE, Calgary', lat: 51.083, lng: -115.081, type: 'event'},
  { key: '26', name: 'Bowmont', address: '', lat: 51.101, lng: -114.191, type: 'event'},
  { key: '27', name: 'Bowness Park and Baker Park', address: '', lat: 51.097, lng: -114.218, type: 'event'},
  { key: "28", name:  "MRU Currie",address:"",lat:51.012, lng:-114.126, type:"event"},
  { key: "29", name:  "Moose Creek",address:"",lat:51.032, lng:-114.811, type:"event"},
  { key: "30", name:  "Mount Laurie",address:"",lat:51.114, lng:-115.094, type:"event"},
  { key: "31", name:  "North Glenmore Park and Lakeview",address:"",lat:50.987, lng:-114.123, type:"event"},
  { key: "32", name:  "North Haven",address:"",lat:51.099, lng:-114.087, type:"event"},
  { key: "33", name:  "Nose Creek Park (Airdrie)",address:"",lat:51.28, lng:-114.012, type:"event"},
  { key: "34", name:  "Nose Hill (1:15,000)",address:"",lat:51.115, lng:-114.109, type:"event"},
  { key: "35", name:  "Nose Hill Central - 14th Street",address:"",lat:51.105, lng:-114.102, type:"event"},
  { key: "36", name:  "Nose Hill North (1:10,000)",address:"",lat:51.125, lng:-114.099, type:"event"},
  { key: "37", name:  "Nose Hill South - Brisebois",address:"",lat:51.104, lng:-114.127, type:"event"},
  { key: "38", name:  "Paskapoo Slopes",address:"",lat:51.08, lng:-114.21, type:"event"},
  { key: "39", name:  "Pearce Estate",address:"",lat:51.041, lng:-114.018, type:"event"},
  { key: "40", name:  "Prince's Island & Crescent Heights",address:"",lat:51.056, lng:-114.07, type:"event"},
  { key: "41", name:  "Quarry Lake + CNC",address:"",lat:51.078, lng:-115.375, type:"event"},
  { key: "42", name:  "Redwood Meadows",address:"",lat:50.989, lng:-114.503, type:"event"},
  { key: "43", name:  "River Park",address:"",lat:51.01, lng:-114.089, type:"event"},
  { key: "44", name:  "Rumsey",address:"",lat:51.925, lng:-112.681, type:"event"},
  { key: "45", name:  "SAIT / Riley Park",address:"",lat:51.06, lng:-114.089, type:"event"},
  { key: "46", name:  "Sandy McNabb",address:"",lat:50.638, lng:-114.503, type:"event"},
  { key: "47", name:  "Shaganappi Park",address:"",lat:51.04, lng:-114.121, type:"event"},
  { key: "48", name:  "St Andrews / Hillhurst",address:"",lat:51.064, lng:-114.124, type:"event"},
  { key: "49", name:  "St. Patrick's Island / Fort Calgary",address:"",lat:51.046, lng:-114.047, type:"event"},
  { key: "50", name:  "Stanley Park",address:"",lat:51.017, lng:-114.07, type:"event"},
  { key: "51", name:  "Strathcona - Patterson Heights to Signal Ridge",address:"",lat:51.044, lng:-114.181, type:"event"},
  { key: "52", name:  "Strathcona Park",address:"",lat:51.049, lng:-114.184, type:"event"},
  { key: "53", name:  "Sulphur Springs",address:"",lat:50.887, lng:-114.712, type:"event"},
  { key: "54", name:  "Ti-Jurabi-Chubi / Camp Chief Hector / Bow Valley PP South",address:"",lat:51.076, lng:-115.049, type:"event"},
  { key: "55", name:  "Triwood",address:"",lat:51.085, lng:-114.111, type:"event"},
  { key: "56", name:  "Twelve Mile Coulee",address:"",lat:51.123, lng:-114.243, type:"event"},
  { key: "57", name:  "University of Calgary",address:"",lat:51.079, lng:-114.139, type:"event"},
  { key: "58", name:  "Varsity",address:"",lat:51.086, lng:-114.141, type:"event"},
  { key: "59", name:  "West Confederation Park (formerly Calgary Canmore Park)",address:"",lat:51.082, lng:-114.111, type:"event"}
];


const universitiesEventsTransit = [
  {key: "1", name: "Bottomlands: 16 mins"},
  {key: "1", name: "Capri Avenue: 37 mins"},
  {key: "1", name: "Carburn Park: 43 mins"},
  {key: "1", name: "Bowness Park + Baker Park: 40 mins"},
  {key: "1", name: "Bowmont: 44 mins"},
  {key: "1", name: "Aspen Creek: 2 hours 35 mins"},
  {key: "1", name: "Banff Centre: 2 hours 35 mins"},
  {key: "1", name: "Canmore + CNC (ISSOM): 2 hours 44 mins"},
  {key: "1", name: "Banded Peak School: no transit"},
  {key: "1", name: "Bow Valley Provincial Park North: no transit"},
  {key: "1", name: "Camp Gardner & Kamp Kiwanis: no transit"},
  {key: "1", name: "Canmore Nordic Centre (ISOM): no transit"},
  {key: "1", name: "Cochrane Ranche: no transit"},
  {key: "1", name: "Confederation Park: no transit"},
  {key: "2", name: "Canmore Nordic Centre (ISOM): 19 mins"},
  {key: "2", name: "Bowmont: 46 mins"},
  {key: "2", name: "Bow Valley Provincial Park North: 46 mins"},
  {key: "2", name: "Banff Centre: 53 mins"},
  {key: "2", name: "Capri Avenue: 1 hour 4 mins"},
  {key: "2", name: "Banded Peak School: 2 hours 29 mins"},
  {key: "2", name: "Bowness Park + Baker Park: 2 hours 38 mins"},
  {key: "3", name: "Banded Peak School: 2 hours 47 mins"},
  {key: "2", name: "Bottomlands: no transit"},
  {key: "2", name: "Aspen Creek: no transit"},
  {key: "2", name: "Camp Gardner & Kamp Kiwanis: no transit"},
  {key: "2", name: "Canmore + CNC (ISSOM): no transit"},
  {key: "2", name: "Carburn Park: no transit"},
  {key: "2", name: "Cochrane Ranche: no transit"},
  {key: "2", name: "Confederation Park: no transit"},
  {key: "3", name: "Aspen Creek: no transit"},
  {key: "3", name: "Banff Centre: 17 mins"},
  {key: "3", name: "Canmore Nordic Centre (ISOM): 52 mins"},
  {key: "3", name: "Capri Avenue: 49 mins"},
  {key: "3", name: "Bowmont: 59 mins"},
  {key: "3", name: "Bow Valley Provincial Park North: 1 hour 0 mins"},
  {key: "3", name: "Bowness Park + Baker Park: 2 hours 56 mins"},
  {key: "4", name: "Banded Peak School: 2 hours 58 mins"},
  {key: "3", name: "Bottomlands: no transit"},
  {key: "3", name: "Camp Gardner & Kamp Kiwanis: no transit"},
  {key: "3", name: "Canmore + CNC (ISSOM): no transit"},
  {key: "3", name: "Carburn Park: no transit"},
  {key: "3", name: "Cochrane Ranche: no transit"},
  {key: "3", name: "Confederation Park: no transit"},
  {key: "4", name: "Banff Centre: 32 mins"},
  {key: "4", name: "Canmore Nordic Centre (ISOM): 59 mins"},
  {key: "4", name: "Capri Avenue: 1 hour 2 mins"},
  {key: "4", name: "Bow Valley Provincial Park North: 1 hour 7 mins"},
  {key: "4", name: "Bowmont: 1 hour 0 mins"},
  {key: "4", name: "Bowness Park + Baker Park: 3 hours 7 mins"},
  {key: "4", name: "Aspen Creek: no transit"},
  {key: "4", name: "Bottomlands: no transit"},
  {key: "4", name: "Camp Gardner & Kamp Kiwanis: no transit"},
  {key: "4", name: "Canmore + CNC (ISSOM): no transit"},
  {key: "4", name: "Carburn Park: no transit"},
  {key: "4", name: "Cochrane Ranche: no transit"},
  {key: "4", name: "Confederation Park: no transit"}


]

const schools = initialTasks.filter((task) => task.type == "school");

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [events, setEvents] = useState([])



  function onchange(item) {
    console.log('item', item);
    const selectedValue = initialTasks.filter((task) => task.key == item);
    const filteredTasks = initialTasks.filter((task) => ((task.type !== selectedValue[0]?.type)))
    const activities = universitiesEventsTransit.filter((event) => ((event.key == item)))
    setEvents(() => activities );
    const newArr = selectedValue.concat(filteredTasks);
    console.log('newArr', newArr);
    console.log('events', events);
    setTasks(() => newArr );
    console.log('tasks', tasks);
  }
  

  return (
    <main>
      
      <SelectionHome items={schools} onchange={onchange}/>
      <div style={{display: 'flex'}}>
        <MapContainer tasks={tasks} />
        <div className='ml-12'>
                <SectionArea missions={events} />
        </div>
      </div>
    </main>
  );
}
