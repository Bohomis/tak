const location1 = 'Gabinet Pani Kierownik';
const location2 = 'Korytarzu';

const cab1_hall = ['UA', 'UC', 'UE', 'UF', 'UG', 'UH', 'UJ', 'UL', 'UK'];
const cab2_hall = ['8M', '9M', '8T', '9T', '3T', 'FK', 'FA', 'FH'];
const cab3_hall = ['UM', 'UN', 'US', 'UR', 'UT', 'UW', 'UY', 'UU', 'UV', 'UP', 'UX', 'FX', 'FW', 'FE', 'FT', 'FY', 'FC', 'FF', 'FP', 'FG', 'FS'];
const cab4_hall = ['FR', 'FL', 'FN', 'FU', 'FM', 'FJ', 'FV', '5N', '4N', '1N', '2N', '3N', '6N', '9N', 'TJ', 'TC', 'TE', 'TK'];
const cab5_hall = ['PAŁECZNICA', 'ZABYTKI', 'INDYWIDUALNE', 'ZMNIEJSZONE', '1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', ];
const cab6_hall = ['1M', '2M', '3M', '4M', '5M', '6M', '7M', '1L', '2L', '3L'];
const cab7_hall = ['3L', '4L', '5L', '6L', '7L', '8L', '9L', '4K', '5K', '6K', '7K', '8K', '9K', '7TT', '7N', '8N'];
const obj1 = 'Teczka';
const shelf_1 = 'szafce 1';
const shelf_2 = 'szafce 2';
const shelf_3 = 'szafce 3';
const shelf_4 = 'szafce 4';
const shelf_5 = 'szafce 5';
const shelf_6 = 'szafce 6';
const shelf_7 = 'szafce 7';


let input3 = prompt('Wpisz kod');
let input2 = input3.toString();
let input = input3.toLocaleUpperCase();

let pro1 = cab1_hall.includes(input);
let pro2 = cab2_hall.includes(input);
let pro3 = cab3_hall.includes(input);
let pro4 = cab4_hall.includes(input);
let pro5 = cab5_hall.includes(input);
let pro6 = cab6_hall.includes(input);
let pro7 = cab7_hall.includes(input);


switch (true) {
    case pro1:
       alert(obj1 + ' znajduje się w ' + location2 + ' w ' + shelf_1); 
        break;
    case pro2:
        alert(obj1 + ' znajduje się w ' + location2 + ' w ' + shelf_2); 
        break;
    case pro3:
        alert(obj1 + ' znajduje się w ' + location2 + ' w ' + shelf_3); 
        break;
    case pro4:
        alert(obj1 + ' znajduje się w ' + location2 + ' w ' + shelf_4); 
        break;
    case pro5:
        alert(obj1 + ' znajduje się w ' + location2 + ' w ' + shelf_5); 
        break;
    case pro6:
        alert(obj1 + ' znajduje się w ' + location2 + ' w ' + shelf_6); 
        break;
    case pro7:
        alert(obj1 + ' znajduje się w ' + location2 + ' w ' + shelf_7); 
        break;
    default:
        break;
}